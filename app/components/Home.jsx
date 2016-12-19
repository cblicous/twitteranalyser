var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var twitterService = require('../utils/twitterService.jsx');

var Home = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      tweets: [],
    }
  },

  componentDidMount: function () {
    twitterService.getTopTwitters().then(function (tweetsFound) {
            this.setState({
              isLoading: false,
              tweets: tweetsFound
            })
          }.bind(this));
    },

  render: function (props) {
  console.log(this.state.tweets);
    return this.state.isLoading  === true ? <p>LOADING</p>:
      <div className="jumbotron col-sm-12 text-center" >
        <h1>Twitter Feed Analyzer</h1>
        <p className='lead'>Twitter feed analyzer</p>
        {this.state.tweets.length}
      </div>

  }
});
module.exports = Home;
