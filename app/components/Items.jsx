var React = require('react');

var Items = React.createClass({
    render: function(props) {
      /*  var tweetItems = props.tweets.map(function(item, key) {
            return <div className="tweet">{item},{key}</div>;
        });
        return <div>{tweetItems}</div>;
        */
        return <div> {props} </div>
    }
});
module.exports = Items;
