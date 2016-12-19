var twitter = require('twitter')
var config = require('../config')
// Services for API
module.exports.getAllTweets = function () {


    var twit = new twitter(config.twitter)
    var params = {screen_name: 'cblicious', count: 200}
    return  twit.get('statuses/home_timeline', params).then(
        function (tweets) {
          var tweetsByUser = tweets.map(function (tweet) {
            var user = tweet.user.name;
            return user;
          })
          var tweetsCount = tweetsByUser.reduce(function (userCount, currentTweet) {
            if (typeof userCount[currentTweet] !== 'undefined') {

              userCount[currentTweet].value++;
              return userCount;
            } else {
              userCount[currentTweet] = {
                  value: 1,
                    name: currentTweet
                  };

              return userCount;
            }
          }, {});
          return(tweetsCount);
        }).catch(function (error) {
          return( error);
      });

}
