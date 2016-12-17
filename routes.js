var JSX = require('node-jsx').install(),
  React = require('react'),
    config = require('./config'),
  ReactDOMServer = require('react-dom/server'),
  TweetAnalyzerContainer = React.createFactory(require('./containers/TweetAnalyzerContainer')),
  twitter = require('twitter');


module.exports = {

  index: function(req, res) {
    var twit = new twitter(config.twitter);
    var params = {screen_name: 'cblicious', count : 200};


    var result = twit.get('statuses/home_timeline', params, function(error, tweets, response) {
      if (!error) {

        var tweetsByUser = tweets.map(function(tweet){
          var user = tweet.user.name;
         return user;
       });

       var tweetsCount = tweetsByUser.reduce(function(userCount, currentTweet){
        if(typeof userCount[currentTweet] !== "undefined"){
          userCount[currentTweet]++;
          return userCount;
        } else {
            userCount[currentTweet]=1;
            return userCount;
        }
      },[]);
        console.log(tweetsCount);
      } else {
        console.log(error);
      }

        });
      console.log(tweetsByUser);
      //  render and pass the vairables
      var markup = ReactDOMServer.renderToString (
           TweetAnalyzerContainer({
             tweets: tweetsByUser
           })
         );
      // Render our 'home' template
      res.render('home', {
        markup: markup, // Pass rendered react markup
        state: "JSON.stringify(tweets) "// Pass current state to client side
      });

    }
  }
