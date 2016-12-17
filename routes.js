var JSX = require('node-jsx').install(),
  React = require('react'),
    config = require('./config'),
  ReactDOMServer = require('react-dom/server'),
  TweetAnalyzerContainer = React.createFactory(require('./containers/TweetAnalyzerContainer')),
  twitter = require('twitter');

module.exports = {

  index: function(req, res) {
    var twit = new twitter(config.twitter);
    var params = {screen_name: 'cblicious'};
    twit.get('statuses/home_timeline', params, function(error, tweets, response) {
      if (!error) {
        console.log(tweets);
      } else {
        console.log(error);
      }

        });
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
