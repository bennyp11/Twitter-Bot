require('dotenv').config();
const {TwitterClient} = require('twitter-api-client');
const CronJob = require('cron').CronJob;

const twitterClient = new TwitterClient({
    apiKey: process.env.TWITTER_API_KEY,
    apiSecret: process.env.TWITTER_API_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const tweet = "IT BE REBASE TIME";

var job = new CronJob({
    cronTime: '00 00 7,15,23 * * *',
    onTick: function sendTweet(){
        twitterClient.tweets.statusesUpdate({
            status: tweet
        }).then (response => {
            console.log("Tweeted!", response)
        }).catch(err => {
            console.error(err)
        });
    },
    start: true,
    timeZone: 'America/Los_Angeles'
});






