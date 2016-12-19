/** @jsx React.DOM */

var React = require('react');

/*
// Create a new ntwitter instance
var twit = new twitter(config.twitter);

// Set a stream listener for tweets matching tracking keywords
twit.stream('statuses/filter',{ track: 'javascript'}, function(stream){
  //streamHandler(stream,io);
});
*/

// Export the TweetsApp component
module.exports = TweetsList = React.createClass({

  // Called directly after component rendering, only on client
  componentDidMount: function(){

    // Preserve self reference
    var self = this;


  },

  // Render the component
  render: function(props){
    console.log(this.state);
    return (
      <div className="tweets-list">
       Test
      </div>
    )

  }

});
