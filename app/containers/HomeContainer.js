var React = require('react');
var Home = require('../components/Home');
var twitterService = require('../utils/twitterService');

var HomeContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      tweetsInfo: [],
    }
  },

  componentDidMount: function () {
    var query = this.props.location.query;
    twitterService.getPlayersInfo(['cblicous', 'cblicous'])
      .then(function (tweets) {
        this.setState({
          isLoading: false,
          tweetsInfo: [tweets[0], tweets[1]]
        })
      }.bind(this))
  },
  render: function () {
    return (
      <Home
        isLoading={this.state.isLoading}
        tweetsInfo={this.state.tweetsInfo}
        />

    )
  }
});

module.exports = HomeContainer;
