var twitter = require('twitter')
var config = require('../config')
// Services for API
module.exports.getAllTweets = function () {

  var promise = new Promise( function(resolve, reject) {
    var twit = new twitter(config.twitter)
    var params = {screen_name: 'cblicious', count: 200}
      twit.get('statuses/home_timeline', params).then(
        function (tweets) {
          var tweetsByUser = tweets.map(function (tweet) {
            var user = tweet.user.name
            return user
          })
          var tweetsCount = tweetsByUser.reduce(function (userCount, currentTweet) {
            if (typeof userCount[currentTweet] !== 'undefined') {
              userCount[currentTweet]++
              return userCount
            } else {
              userCount[currentTweet] = 1
              return userCount
            }
          }, {});
          resolve(tweetsCount);
        }).catch(function (error) {
          reject( error);
        });
    });
    return promise;

}
