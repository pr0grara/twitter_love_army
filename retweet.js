const startTime = Date.now();
const users = {
  demo: { username: "azerihivan", password: "AliyevEatsDonkeyAss" }, //add your users to this object
};

const hashtags = {
  artStrong: "#ArtsakhStrong",
  artIsArm: "#ArtsakhIsArmenia",
  stopAli: "#StopAliyev",
  stopAzeri: "#StopAzerbaijaniAggression",
  sancAzer: "#SanctionAzerbaijan",
  sancTurk: "#SanctionTurkey",
  recArt: "#RecognizeArtsakh",
  peace: "#PeaceForArmenia",
  believe: "#BelieveArmenia",
  azeriLies: "#AzerbaijanLies",
};

const targetHash = hashtags.recArt; //specify target hashtag
const user = users.demo; //specify user 

const tweets = {
  0: "Armenia and Artsakh are under attack. Bring awareness to this cause to stop Azerbaijan and Turkey in this genocidal campaign.",
  1: "Azerbaijan and Turkey have weaponized social to silence celebrities & influencers whenever they shine light on the international war crimes they commit http://bit.do/stopaliyev",
  2: "Cluster munitions are bombs that open up mid-air and disperse dozens of submunitions, which saturate large areas. Using them is a war crime! @azerbaijan",
  3: "Azerbaijan has refused entry to foreign journalists save a few which have appoined 'minders' who tail them 24/7",
  4: "Azerbaijan is STILL relentlessly shelling Stepanakert. Through 3 weeks and 2 ceassefires, killing innocent civilians with cluster bombs. Sick.",
  5: "Those who put humanity before ideology fight for good. Those who do not, fight for evil. What do you think Turkey fights for?",
  6: "Azerbaijan continues to deliberately shell cultural targets.",
  7: "The White Cathedral in Artsakh was built in 1868. Azerbaijan formed in 1918. The latter bombed the former on the basis of the falsehood that Artsakh belongs to Azerbaijan on Oct 8 2020.",
  8: "AZERIS BACK AT IT AGAIN this time attacking AFTER agreed upon ceasefire!",
  9: "The Republic of Artsakh was founded by a free and fair referendum which had an 82% voter turnout, in which 99% of voters chose to create an independent state",
  10: "In reality, it is Azerbaijan who had been occupying Artsakh for 70 years. In the 90's The people of Artsakh voted to secede from Azerbaijan, were forced to fight over it... we won then and we will win now.",
  11: "It makes no military or strategic sense for Armenia to start this conflict. It had/has control over Artsakh. Azerbaijan is the aggressor.",
  12: "Armenia was The Economist’s Country of the Year in 2018. Google 'velvet revolution'. The world should side with a country that champions democracy not the 2 dictatorships attacking it",
  13: "The ethnic group which became Azerbaijanis entered the Caucasus in the 12TH Century AD. Artsakh has been a part of Armenia and inhabited by Armenians since the 5th Century BC",
  14: "Artsakh was illegally given to SOVIET Azerbaijan by Stalin without permission from the Armenians living there. The new Republic of Azerbaijan has no claim.",
  15: "Aliyev & his govt keep Azerbaijani's fed on a diet of anti-Armenian propaganda. Children are taught to hate Armenians in kindergarten & to view Armenians as enemies that must be destroyed",
  16: "Azerbaijan is not only repeating history, but outdoing it. Remember Ramil Safarov who axed Gurgen Margaryan to death in Hungary during a NATO-sponsored seminar? Well he received a hero’s welcome in Baku",
  17: "Azerbaijan not only repeating history, but outdoing it. Remember the Sumgait pogrom of 1988 where mobs of Azerbaijanis attacked & killed Armenian civilians on the streets & in their homes",
  18: "Azerbaijan teaches their population to hate Armenians. Contrastingly, Artsakh’s President has emphatically stated his fight is not with the people of Azerbaijan, but with its government.",
  19: "Convention on Cluster Munitions is a treaty which bans the use of cluster bombs. Az & Turkey have been using cluster munitions to indiscriminately attack civilians since the start of the war.",
  20: "Azerbaijan has long harboured deep anti-Armenian sentiment. While Artsakh’s President Arayik has emphatically stated his fight is not with the people of Az, but with its government!",
  21: "The Convention on Cluster Munitions is an international treaty that bans the use of cluster munitions. Az & Turkey have been using them to indiscriminately maim and kill civilians.",
  22: "Turkey, a NATO member *deep sigh*, has purchased oil from ISIS, directly funding the terrorist organisation. Turkey also hired thousands of ISIS mercenaries to attack Armenians",
  23: "#StopAzerbaijaniAggression attacking Artsakh AND Armenia during ceasefire!",
  24: "How many azeri soldiers must be lost before Aliyev understands that Artsakh is not his?",
  25: "Looks like azerbaijan just broke their word again https://www.dw.com/en/armenia-claims-azerbaijan-violated-fresh-cease-fire-in-nagorno-karabakh/a-55312086",
  26: "#StopAliyev IMMEDIATELY! Missile and artillery strikes during agreed upon ceasefire!!!! Beyond unacceptable",
  27: "We fight for the good. We thrive off the good. We are fighting for survival, and we fight evil today so that there is less tomorrow.",
  28: "We fight for good. We thrive off the good. We are fighting for survival, and we are fighting evil today so that there is less tomorrow.",
  29: "We fight for good. We thrive off the good. We are fighting for survival, and we are fighting evil today so that there is less tomorrow.",
  30: "We fight for good. We thrive off the good. We are fighting for survival, and we are fighting evil today so that there is less tomorrow.",
  31: "We fight for good. We thrive off the good. We are fighting for survival, and we are fighting evil today so that there is less tomorrow.",
  32: "A crime unpunished is a crime forgiven. When Turkey was forgiven for the attrocities it committed in 1915 the road was paved for the genocide attempt currently underway",
  33: "Who wins: David or Goliath?",
  34: "President of Artsakh, Arayik Harutunyan, has announced intentions to call upon the international community to officially recognize Artsakh as an independent republic.",
  35: "President of Artsakh has announced intentions to call upon the world to officially recognize Artsakh as an independent republic https://twitter.com/Pres_Artsakh/status/1315340056857653248",
  36: "Free Artsakh. Show Azerbaijan and Turkey their aggression has backfired. We will now be content with nothing less than sovereignty.",
  37: "Turkey is a mad dog state led by its rabid handler erdogan. Attacking not only Armenians but the whole region! Google 'Turkey conflict with...'",
  38: "The battle between good and evil is a tale as old as time. Today it is being played out in Artsakh. What do you fight for?",
  39: "Evil is a weed which will be pulled out by its roots wherever it is found, lest it overrun the garden",
  40: "Evil is a weed which will be pulled out by its roots wherever it is found, lest it overrun the garden",
  41: "Evil is a weed which will be pulled out by its roots wherever it is found, lest it overrun the garden",
  42: "Evil is a weed which will be pulled out by its roots wherever it is found, lest it overrun the garden",
  43: "Do not bury your head in the sand. Open your eyes-- SPEAK for what is right or allow what is wrong to grow in your SILENCE",
  44: "Everything that is not saved will be lost -Nintendo Save Screen",
  45: "Through the millenia Armenians have faced the threat of extermination countless times. Many of those enemies have collapsed before our eyes. We stand here today as monument to the failures of those enemies",
  46: "Erdogan wishes to blow out the candle of the Armenians. His forefathers wished for the same thing. They both have blown and they have both failed...and it drives them utterly mad",
  47: "Go ahead, try blowing out our flame. See if it will not spontaneously reignite as soon as you turn away.",
  48: "Erdogan is leading Azerbaijan to the gallows. Perhaps it was his intenion all along? Maybe he will personally place the new puppet after Aliyev",
  49: "Artsakh is not Azerbaijan. The world may be corrupt, bought and sold, but it will come to know this eventually-- kicking and screaming if necessaary.",
  50: "this war sets the precedent of 21st century pan-turkism",
  51: "imagine the denial of what happened during WW1 leading to WW3",
};

const twoHash = "#RecognizeArtsakh #SanctionTurkey";

const puppeteer = require("puppeteer");
const username = user.username;
const password = user.password;

let browser = null;
let page = null;

(async () => {
  console.log(`initiating protocol for user: ${username} targeting: ${targetHash}`)
  browser = await puppeteer.launch({ headless: false });

  page = await browser.newPage();
  page.setViewport({
    width: 1280,
    height: 800,
    isMobile: false,
  });

  await page.goto("https://twitter.com/login", { waitUntil: "networkidle2" });

  //LOGIN
  try {
    await page.type('input[name="session[username_or_email]"]', username, { delay: 50 });
    await page.type('input[name="session[password]"]', password, { delay: 50 });
    await page.click('div[data-testid="LoginForm_Login_Button"]');
  } catch(e) {
    console.log('LogIn Error')
  }

  //SEARCH TERM
  try {
    await page.waitFor('input[data-testid="SearchBox_Search_Input"]');
    await page.waitFor(1500)
    await page.type(
      'input[data-testid="SearchBox_Search_Input"]',
      targetHash,
      { delay: 50 }
    );
    await page.keyboard.press("Enter");
    await page.waitFor(2000);
  } catch (e) {
    console.log('SearchTerm Error')
  }

  //SCROLL DOWN + GET TWEETS
  let tweetsSet = new Set();
  try {
    let previousHeight;
    for (let i = 0; i < 10; i++) { //specify number of times puppeteer scrolls to bottom to obtain new tweets
      var elementTweets;
      try {
        elementTweets = await page.$$("a.r-1re7ezh.r-1loqt21.r-1q142lx.r-1qd0xha.r-a023e6.r-16dba41.r-ad9z0x.r-bcqeeo.r-3s2u2q.r-qvutc0.css-4rbku5.css-18t94o4.css-901oao");
        
        const propertyJsTweets = await Promise.all(
          elementTweets.map((tweet) => tweet.getProperty("href"))
        );
        const urls = await Promise.all(
          propertyJsTweets.map((tweet) => tweet.jsonValue())
        );
        
        urls.forEach((item) => tweetsSet.add(item));
        
        previousHeight = await page.evaluate("document.body.scrollHeight");
        await page.evaluate("window.scrollTo(0, document.body.scrollHeight)");
        await page.waitForFunction(`document.body.scrollHeight > ${previousHeight}`);
        await page.waitFor(1500 + Math.floor(Math.random() * 1000));
      } catch {
        console.log('no more tweets available / proceeding with function (this may repeat)');
      }
    }
  } catch (e) {
    console.log("ScrollDown/GetTweets Error");
    // console.log(e);
  }
  const setSize = tweetsSet.size
  console.log(tweetsSet);
  console.log(`tweets obtained: ${setSize}`)
  console.log(`estimated time: ${setSize * 5}m`)

  // VISIT ALL TWEETS AND CLICK LIKE
  const urls = Array.from(tweetsSet);
  var url;
  var tweetCount = 0;
  for (let i = 0; i < urls.length; i++) {
    let num = Math.random();
    var tweet = num > 0.3 ? tweets[i] + " " + twoHash : tweets[i];    
    let j = Math.floor(Math.random() * tweets.length - 1);
    try {
      url = urls[i];
      console.log(url);
      await page.goto(`${url}`);

      await page.waitFor(180000 + Math.floor(Math.random() * 120000)); //big time delay here
      const likes = await page.$$('div[data-testid="like"]');
      if (likes.length > 0) {
        await page.click('div[data-testid="like"]');
        await page.waitFor(500 + Math.floor(Math.random() * 100));
      }
      await page.click('div[data-testid="retweet"]');
      await page.waitFor(2000 + Math.floor(Math.random() * 200));
      await page.click('a[class="css-4rbku5 css-18t94o4 css-1dbjc4n r-1loqt21 r-18u37iz r-1ny4l3l r-1j3t67a r-9qu9m4 r-o7ynqc r-6416eg r-13qz1uu"]');
      await page.waitFor(500 + Math.floor(Math.random() * 200));
      await page.type('div[data-testid="tweetTextarea_0"]', tweet, {delay: 50,});
      await page.waitFor(500 + Math.floor(Math.random() * 200));
      await page.click('div[data-testid="tweetButton"]');
      await page.click('div[data-testid="tweetButton"]');
      tweetCount++;
      console.log(hashedTweets[j].slice(0, 60) + '... retweeted')
      await page.waitFor(5000 + Math.floor(Math.random() * 1000));
      await page.goBack();
    } catch (e) {
      console.log(`Failed to Retweet @ ${url}`)
    }
    console.log('------')
  }
  browser.close();
  const endTime = Date.now();
  const elapsedTime = endTime - startTime;
  console.log(`retweeted ${tweetCount + tweetCount > 1 ? ' times' : ' time'} for user ${username}`)
  console.log(`elapsed time: ${elapsedTime / 1000}s`)
})();
