var JSX = require('node-jsx').install();
var React = require('react');
var ReactDOMServer = require('react-dom/server');

var twitterService = require('./services/twitterApiService.js');


module.exports = {

  apiGetFeed :function(req, res) {
    twitterService.getAllTweets().then(function (tweet){
        res.end(JSON.stringify(tweet));
      }).catch(function (error) {
      throw error;
    })
    },

  index: function(req, res) {
    // Render React to a string, passing in our fetched tweets
         var markup = ReactDOMServer.renderToString(
           TweetAnalyzerContainer({
             tweets: []
           })
         );
      // Render our 'home' template
      res.render('home', {
        markup: markup, // Pass rendered react markup
        state: "JSON.stringify(tweets) "// Pass current state to client side
      });

    }
  }
