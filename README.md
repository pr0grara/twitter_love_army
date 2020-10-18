# twitter_love_army
### this program contains a liking function and retweeting function
0. $npm install (chromium should take about a minute)
### to retweet
1. Add your users to the users object
2. Specify which user you would like to use
3. Specify which hashtag you would like to target
4. Run retweet.js
### retweet.js will:
1. open a new browser instance in chromium
2. navigate to twitter login
3. enter user credentials and submit
4. enter target hasgtag in search bar and submit
5. grab url of all tweets on page and add to a set
6. scroll to bottom of screen to add more tweets to page
7. iterate this process N times, adding new urls to set
8. iterate through url set navigating to each tweet:
9. liking and retweeting with a randomly selected tweet from the tweets object
10. once all urls have been visited browser is closed and console prints out results

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*godspeed general* 