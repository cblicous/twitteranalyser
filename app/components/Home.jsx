var React = require('react')
var ReactRouter = require('react-router')
var Link = ReactRouter.Link
var twitterService = require('../utils/twitterService.jsx')
var Items = require('../components/Items.jsx')

var Home = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      tweets: []
    }
  },
  componentDidMount: function () {
    twitterService.getTopTwitters().then(function (tweetsFound) {
      this.setState({
        isLoading: false,
        tweets: tweetsFound
      })
    }.bind(this))
  },
  render: function (props) {
    return this.state.isLoading === true ? <p>LOADING</p> :
      <Items tweets={this.state.tweets} />

  }
})
module.exports = Home
