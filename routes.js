var JSX = require('node-jsx').install(),
React = require('react'),
ReactDOMServer = require('react-dom/server'),
TweetAnalyzerContainer = React.createFactory(require('./containers/TweetAnalyzerContainer'));


var twitterService = require('./services/twitterApiService.js');


module.exports = {

  apiGetFeed :function(req, res) {
    twitterService.getAllTweets().then(function (tweet){
        console.log(tweet);
        res.end(JSON.stringify(tweet));
        //res.end("hallo" + tweet['Fat Pikachu'])
        //res.json(tweet)
      }).catch(function (error) {
      throw error;
    })
    },

  index: function(req, res) {
      //  render and pass the vairables
      var markup = ReactDOMServer.renderToString (
           TweetAnalyzerContainer({

           })
         );
      // Render our 'home' template
      res.render('home', {
        markup: markup, // Pass rendered react markup
        state: "JSON.stringify(tweets) "// Pass current state to client side
      });

    }
  }
