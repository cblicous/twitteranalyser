var React = require('react');
var TweetsList = require('../components/TweetsList');

var TweetAnalyzerContainer = React.createClass({

  getInitialState: function () {
    return {
      isLoading: true,
      tweets: [],
    }
  },

  componentDidMount: function () {
      console.log('componentDidMount');

  /*  githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function (players) {
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        })
      }.bind(this)) */
  },
  render: function () {
    return (
      <TweetsList
        isLoading={this.state.isLoading}
        tweets={this.state.tweets}
      />
    )
  }
});

module.exports = TweetAnalyzerContainer
