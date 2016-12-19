var React = require('react');

function valuesToArray(obj) {
  return Object.keys(obj).map(function (key) { return obj[key]; });
}

var Items = React.createClass({
    render: function() {
    //  return <div> {JSON.stringify(this.props)} </div>

      var tweetItems = valuesToArray(this.props.tweets).map(function(item) {
         return <div>{item.name},{item.value}</div>
       });
       return <div>{tweetItems}</div>;
       //return <div> {JSON.stringify(this.props)} </div>
    /*  return <div> {JSON.stringify(this.props)} </div> */
    }
});
module.exports = Items;
