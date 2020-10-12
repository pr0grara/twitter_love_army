const users = {
  demo: { username: "", password: "" }, 
};

const armoHashtags = {
  artStrong: "#ArtsakhStrong",
  artIsArm: "#ArtsakhIsArmenia",
  stopAli: "#StopAliyev",
  sancAzer: "#SanctionAzerbaijan",
  sancTurk: "#SanctionTurkey",
  recArt: "#RecognizeArtsakh",
  arm: "#Armenia",
  believe: "#BelieveArmenia",
  azeriLies: "#AzerbaijanLies",
};

const puppeteer = require("puppeteer");
const username = users.demo.username; //add your own user
const password = users.demo.password; 

let browser = null;
let page = null;

(async () => {
  browser = await puppeteer.launch({ headless: false });

  page = await browser.newPage();
  page.setViewport({
    width: 1280,
    height: 800,
    isMobile: false,
  });

  await page.goto("https://twitter.com/login", { waitUntil: "networkidle2" });

  //LOGIN
  await page.type('input[name="session[username_or_email]"]', username, {
    delay: 25,
  });
  await page.type('input[name="session[password]"]', password, { delay: 25 });
  await page.click('div[data-testid="LoginForm_Login_Button"]');

  //SEARCH TERM
  await page.waitFor('input[data-testid="SearchBox_Search_Input"]');
  await page.type(
    'input[data-testid="SearchBox_Search_Input"]',
    `${armoHashtags.recArt}`,
    { delay: 25 }
  );
  await page.keyboard.press("Enter");
  await page.waitFor(2000);

  //SCROLL DOWN + GET TWEETS
  let tweetsSet = new Set();
  try {
    let previousHeight;
    for (let i = 0; i < 20; i++) {
      const elementTweets = await page.$$(
        "a.r-1re7ezh.r-1loqt21.r-1q142lx.r-1qd0xha.r-a023e6.r-16dba41.r-ad9z0x.r-bcqeeo.r-3s2u2q.r-qvutc0.css-4rbku5.css-18t94o4.css-901oao"
      );
      const propertyJsTweets = await Promise.all(
        elementTweets.map((tweet) => tweet.getProperty("href"))
      );
      const urls = await Promise.all(
        propertyJsTweets.map((tweet) => tweet.jsonValue())
      );

      urls.forEach((item) => tweetsSet.add(item));

      console.log(tweetsSet);

      previousHeight = await page.evaluate("document.body.scrollHeight");
      await page.evaluate("window.scrollTo(0, document.body.scrollHeight)");
      await page.waitForFunction(
        `document.body.scrollHeight > ${previousHeight}`
      );
      await page.waitFor(1500 + Math.floor(Math.random() * 1000));
    }
  } catch (e) {
    console.log(e);
  }

  console.log("---END---");

  // VISIT ALL TWEETS AND CLICK LIKE
  const urls = Array.from(tweetsSet);
  for (let i = 0; i < urls.length; i++) {
    try {
      const url = urls[i];
      console.log(url);
      await page.goto(`${url}`);

      await page.waitFor(2000 + Math.floor(Math.random() * 1000));
      await page.click('div[data-testid="like"]');
      await page.waitFor(2000 + Math.floor(Math.random() * 1000));
      await page.goBack();
    } catch (error) {
      console.error(error);
    }
  }
})();
