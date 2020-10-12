const users = {
  esh: { username: "azerihivan", password: "AliyevEatsDonkeyAss" }, //sample user... this is an actual account feel free to use lol
};

const tweets = {
  0: "Armenia and Artsakh are under attack. Bring awareness to this cause and STOP the weaponization of social media by Azerbaijan and Turkey in their genocidal campaign. #ArtsakhStrong #StopAliyev #StopErdogan #RecognizeArtsakh #PeaceForArmenia #SanctionTurkey",
  1: "Azerbaijan and Turkey have weaponized social media to silence celebrities & influencers who are shining a light on international war crimes http://bit.do/stopaliyev #ArtsakhStrong #StopAliyev #StopErdogan #RecognizeArtsakh #PeaceForArmenia #SanctionTurkey",
  2: "Cluster munitions are bombs that open up mid-air and disperse dozens of submunitions, which saturate large areas. Using them is a war crime! Azerbaijan is cluster bombing #Artsakh right now! #PeaceForArmenia #ArtsakhStrong #StopAliyev #SanctionTurkey #RecognizeArtsakh",
  3: "Azerbaijan has refused entry to foreign journalists AND has kept its population in an information blackout for 2 weeks now! #StopAzerbaijaniAggression #PeaceForArmenia #ArtsakhStrong #StopAliyev #StopErdogan #RecognizeArtsakh #SanctionTurkey",
  4: "Azerbaijan relentlessly shelled Stepanakert in Artsakh for 2 weeks! Killing many innocent civilians using cluster bombs, RESEARCH IT & SPEAK UP! #PeaceForArmenia #StopAzerbaijaniAggression #ArtsakhStrong #StopAliyev #StopErdogan #RecognizeArtsakh #SanctionTurkey",
  5: "Those who put humanity before ideology fight for good. Those who do not, fight for evil. Az and Turkey MUST be stopped #PeaceForArmenia #ArtsakhStrong #ArtsakhIsArmenia #StopAliyev #SanctionTurkey #StopAzeriAggression #RecognizeArtsakh ",
  6: "Azerbaijan continues to deliberately shell cultural targets. They recently bombed The White Cathedral in Shushi (a war crime as defined by the Rome Statute of the International Criminal Court) #PeaceForArmenia #ArtsakhStrong #StopAliyev #SanctionTurkey #RecognizeArtsakh",
  7: "The White Cathedral in Artsakh was built in 1868. Azerbaijan formed in 1918. The latter bombed the former on the basis of the falsehood that Artsakh belongs to Azerbaijan. #PeaceForArmenia #ArtsakhStrong #StopAliyev #StopErdogan #RecognizeArtsakh #SanctionTurkey",
  8: "AZ BACK AT IT this time attacking AFTER agreed upon ceasefire! #EnoughIsEnough #PeaceForArmenia #SanctionTurkey #ArtsakhStrong #StopAliyev #StopErdogan #RecognizeArtsakh",
  9: "The Republic of Artsakh was founded by a free and fair referendum which had an 82% voter turnout, in which 99% of voters chose to create an independent state #PeaceForArmenia #SanctionTurkey #ArtsakhStrong #StopAliyev #StopErdogan #RecognizeArtsakh",
  10: "In reality, it is actually Azerbaijan who had been occupying Artsakh for 70years. The people of Artsakh maintain their independence is one of liberation from Azerbaijan. #PeaceForArmenia #SanctionTurkey #ArtsakhStrong #StopAliyev #StopErdogan #RecognizeArtsakh",
  11: "It makes no military or strategic sense for Armenia to start this conflict as it already has control over Artsakh. Azerbaijan is the aggressor, breaching a near 30yr ceasfire treaty. #PeaceForArmenia #ArtsakhStrong #StopAliyev #SanctionTurkey #RecognizeArtsakh",
  12: "Armenia was The Economist’s Country of the Year 2018 due to the peaceful Velvet Revolution. The world should side with a country that champions democracy; not 2 dictatorships attacking it #PeaceForArmenia #ArtsakhStrong #StopAliyev #SanctionTurkey #RecognizeArtsakh",
  13: "History Brief: The ethnic group which became Azerbaijanis entered the Caucasus in the 12TH Century AD. Artsakh has been a part of Armenia and inhabited by Armenians since the 5th Century BC #PeaceForArmenia #ArtsakhStrong #SanctionTurkey #StopAliyev #RecognizeArtsakh",
  14: "Artsakh was illegally promised to Azerbaijan by the USSR without permission from the Armenians living there. Azerbaijan IS the occupier #PeaceForArmenia #StopAzerbaijaniAggression #ArtsakhStrong #StopAliyev #StopErdogan #RecognizeArtsakh #SanctionTurkey",
  15: "Aliyev & his govt feed Azerbaijani people a diet of anti-Armenian propaganda. Children are taught to hate Armenians in kindergarten & to view Armenians as enemies that must be destroyed #PeaceForArmenia #ArtsakhStrong #StopAliyev #StopErdogan #RecognizeArtsakh #SanctionTurkey",
  16: "Azerbaijan is not only repeating history, but outdoing it. Remember Ramil Safarov who axed Gurgen Margaryan to death in Hungary during a NATO-sponsored seminar? Well he received a hero’s welcome in Baku #PeaceForArmenia #ArtsakhStrong #StopAliyev #SanctionTurkey #RecognizeArtsakh",
  17: "Azerbaijan not only repeating history, but outdoing it. Remember the Sumgait pogrom of 1988 where mobs of Azerbaijanis attacked & killed Armenian civilians on the streets & in their homes #PeaceForArmenia #ArtsakhStrong #StopAliyev #StopErdogan #RecognizeArtsakh #SanctionTurkey",
  18: "Azerbaijan teaches their population to hate Armenians. Contrastingly, Artsakh’s President has emphatically stated his fight is not with the people of Azerbaijan, but with its government. #PeaceForArmenia #ArtsakhStrong #StopAliyev #SanctionTurkey #RecognizeArtsakh",
  19: "The Convention on Cluster Munitions is an international treaty that bans the use of cluster munitions. Az & Turkey have been using cluster munitions to indiscriminately attack civilians. #PeaceForArmenia #ArtsakhStrong #StopAliyev #SanctionTurkey #RecognizeArtsakh",
  20: "Azerbaijan has long harboured deep anti-Armenian sentiment. Contrastingly, Artsakh’s President has emphatically stated his fight is not with the people of Az, but with its government! #PeaceForArmenia #ArtsakhStrong #StopAliyev #SanctionTurkey #RecognizeArtsakh",
  21: "The Convention on Cluster Munitions is an international treaty that bans the use of cluster munitions. Az & Turkey have been using cluster munitions to indiscriminately attack civilians. #PeaceForArmenia #ArtsakhStrong #StopAliyev #SanctionTurkey #RecognizeArtsakh",
  22: "Turkey, a NATO member, has purchased oil from ISIS, directly funding the terrorist organisation. Turkey also recently hired thousands of ISIS mercenaries to attack Armenians #PeaceForArmenia #ArtsakhStrong #StopAliyev #StopErdogan #SanctionTurkey #RecognizeArtsakh",
  23: "#StopAzerbaijaniAggression attacking Artsakh AND Armenia during ceasefire! #PeaceForArmenia #ArtsakhStrong #StopAliyev #SanctionTurkey #Artsakh #RecognizeArtsakh",
  24: "Azerbaijan has just broken ceasefire with a rocket strikes! https://t.co/RiXnWxXwyZ?amp=1 #PeaceForArmenia #ArtsakhIsArmenia #StopAliyev #StopErdogan #SanctionTurkey #Artsakh #RecognizeArtsakh",
  25: "BREAKING!!! Azerbaijan breaks ceasefire! Artsakh retaliates https://t.co/RiXnWxXwyZ?amp=1 #PeaceForArmenia #ArtsakhIsArmenia #StopAliyev #StopErdogan #SanctionTurkey #RecognizeArtsakh",
  26: "#StopAliyev IMMEDIATELY! Missile strike during agreed upon ceasefire!!!! Beyond unacceptable #PeaceForArmenia #RecognizeArtsakh #SanctionTurkey",
  28: "We fight for the good. We thrive off the good. We are fighting for survival, and we fight evil today so that there is less tomorrow. #PeaceForArmenia #RecognizeArtsakh #ArtsakhStrong #StopAliyev #SanctionTurkey",
  29: "We fight for good. We thrive off the good. We are fighting for survival, and we are fighting evil today so that there is less tomorrow. #PeaceForArmenia #RecognizeArtsakh #ArtsakhStrong #StopAliyev #SanctionTurkey",
  30: "We fight for good. We thrive off the good. We are fighting for survival, and we are fighting evil today so that there is less tomorrow. #PeaceForArmenia #RecognizeArtsakh #ArtsakhStrong #StopAliyev #SanctionTurkey",
  31: "We fight for good. We thrive off the good. We are fighting for survival, and we are fighting evil today so that there is less tomorrow. #PeaceForArmenia #RecognizeArtsakh #ArtsakhStrong #StopAliyev #SanctionTurkey",
  32: "We fight for good. We thrive off the good. We are fighting for survival, and we are fighting evil today so that there is less tomorrow. #PeaceForArmenia #RecognizeArtsakh #ArtsakhStrong #StopAliyev #SanctionTurkey",
  33: "Stand up for what is right. A crime unpunished is a crime forgiven. When Turkey was forgiven for the attrocities it committed in 1915 the road was paved for the genocide attempt currently underway #PeaceForArmenia #RecognizeArtsakh #StopAliyev #SanctionTurkey",
  34: "Do you stand with David or Goliath? #PeaceForArmenia #ArtsakhIsArmenia #StopAliyev #StopErdogan #SanctionTurkey #SanctionAzerbaijan #RecognizeArtsakh #NoWar #ArtsakhStrong",
  35: "President of Artsakh, Arayik Harutunyan, has announced intentions to call upon the international community to officially recognize Artsakh as an independent republic. This is the way to peace. #PeaceForArmenia #RecognizeArtsakh #ArtsakhStrong #StopAliyev #SanctionTurkey",
  36: "President of Artsakh has announced intentions to call upon the international community to officially recognize Artsakh as an independent republic https://twitter.com/Pres_Artsakh/status/1315340056857653248 #PeaceForArmenia #RecognizeArtsakh #ArtsakhStrong #StopAliyev #SanctionTurkey",
  37: "Free Artsakh. Azerbaijani and Turkish aggression has backfired. We will now be content with nothing less than a sovereign Artsakh. #PeaceForArmenia #RecognizeArtsakh #ArtsakhStrong #StopAliyev #StopErdogan #SanctionTurkey #SanctionAzerbaijan #Artsakh #Armenia #Azerbaijan #Turkey",
  38: "Turkey is a mad dog. Attacking not only Armenians but the whole region! The world must unanimously #StopErdogan and #Aliyev. #PeaceForArmenia #RecognizeArtsakh #ArtsakhStrong #StopAliyev #StopErdogan #SanctionTurkey #SanctionAzerbaijan",
  39: "The battle between good and evil is a tale as old as time. It rages in #Artsakh currently but if evil is not stamped outr there it will be fought elsewhere tomorrow #PeaceForArmenia #RecognizeArtsakh #ArtsakhStrong #StopAliyev #StopErdogan #SanctionTurkey",
  40: "Evil is a weed which must be pulled out by the roots whenever it is found #PeaceForArmenia #RecognizeArtsakh #ArtsakhStrong #StopAliyev #StopErdogan #SanctionTurkey",
  41: "Evil is a weed which must be pulled out by the roots whenever it is found #PeaceForArmenia #RecognizeArtsakh #ArtsakhStrong #StopAliyev #StopErdogan #SanctionTurkey",
  42: "Evil is a weed which must be pulled out by the roots whenever it is found #PeaceForArmenia #RecognizeArtsakh #ArtsakhStrong #StopAliyev #StopErdogan #SanctionTurkey",
  43: "Evil is a weed which must be pulled out by the roots whenever it is found #PeaceForArmenia #RecognizeArtsakh #ArtsakhStrong #StopAliyev #StopErdogan #SanctionTurkey",
  44: "Do not bury your head in the sand. Open your eyes and SPEAK for what is right or allow what is wrong to grow in your silence #PeaceForArmenia #RecognizeArtsakh #ArtsakhStrong #StopAliyev #StopErdogan #SanctionTurkey",
  45: "Everything that is not saved will be lost #PeaceForArmenia #RecognizeArtsakh #ArtsakhStrong #StopAliyev #StopErdogan #SanctionTurkey",
  46: "Through the millenia Armenians have faced the threat of extermination numerous times. We stand here today as monument to the failures of our enemies (most of which are relegated to history books now) #PeaceForArmenia #RecognizeArtsakh #ArtsakhStrong #StopAliyev #SanctionTurkey",
  47: "Erdogan wishes to blow out the candle of the Armenians. His forefathers wished for the same thing. They both have blown and they have both failed...and it drives them mad #PeaceForArmenia #RecognizeArtsakh #ArtsakhStrong #StopAliyev #StopErdogan #SanctionTurkey",
  48: "Go ahead, try to blow out our flame. See if it will not spontaneously reignite as soon as you start celebrating. #PeaceForArmenia #RecognizeArtsakh #ArtsakhStrong #StopAliyev #StopErdogan #SanctionTurkey",
  49: "Let us Live. #PeaceForArmenia #RecognizeArtsakh #ArtsakhStrong #StopAliyev #StopErdogan #SanctionTurkey",
  50: "Artsakh is not Azerbaijan. Artsakh is Armenia. #PeaceForArmenia #RecognizeArtsakh #ArtsakhStrong #StopAliyev #StopErdogan #SanctionTurkey #SanctionAzerbaijan #Artsakh #Armenia #Azerrbaijan #Turkey",
};
const armoHashtags = {
  artStrong: "#ArtsakhStrong",
  artIsArm: "#ArtsakhIsArmenia",
  stopAli: "#StopAliyev",
  sancAzer: "#SanctionAzerbaijan",
  sancTurk: "#SanctionTurkey",
  recArt: "#RecognizeArtsakh",
  peace: "#PeaceForArmenia",
  believe: "#BelieveArmenia",
  lies: "#AzerbaijanLies",
  artStrong: "#ArtsakhStrong",
};

const puppeteer = require("puppeteer");
const username = users.esh.username; //replace esh with desired user
const password = users.esh.password; //replace esh with desired user

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
  await page.type('input[data-testid="SearchBox_Search_Input"]',`${armoHashtags.stopAli}`, { delay: 25 } //replace armoHashtags.stopAli with any other hashtag from armoHash object (see line 57)
  );
  await page.keyboard.press("Enter");
  await page.waitFor(2000);

  //SCROLL DOWN + GET TWEETS
  let tweetsSet = new Set();
  try {
    let previousHeight;
    for (let i = 0; i < 10; i++) {
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

  // VISIT ALL TWEETS, LIKE & RETWEET WITH QUOTE FROM tweet OBJECT
  const urls = Array.from(tweetsSet);
  for (let i = 0; i < urls.length; i++) {
    //iterate through all urls gathered previously
    let j = Math.floor(Math.random() * 50); //select tweet at random (see line 153)
    try {
      const url = urls[i];
      console.log(url);
      await page.goto(`${url}`);

      await page.waitFor(5000 + Math.floor(Math.random() * 3000));
      const likes = await page.$$('div[data-testid="like"]');
      if (likes.length > 0) {
        await page.click('div[data-testid="like"]');
        await page.waitFor(500 + Math.floor(Math.random() * 100));
      }
      await page.click('div[data-testid="retweet"]');
      await page.waitFor(500 + Math.floor(Math.random() * 100));
      await page.click(
        'a[class="css-4rbku5 css-18t94o4 css-1dbjc4n r-1loqt21 r-18u37iz r-1ny4l3l r-1j3t67a r-9qu9m4 r-o7ynqc r-6416eg r-13qz1uu"]'
      );
      await page.waitFor(500 + Math.floor(Math.random() * 100));
      await page.type('div[data-testid="tweetTextarea_0"]', tweets[j], {
        delay: 25,
      });
      await page.waitFor(300 + Math.floor(Math.random() * 200));
      await page.keyboard.press("Enter");
      await page.click('div[data-testid="tweetButton"]');
      await page.waitFor(5000 + Math.floor(Math.random() * 1000));
      await page.goBack();
    } catch (error) {
      console.error(error);
    }
  }
})();
