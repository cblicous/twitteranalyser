var React = require('react');

var Main = React.createClass({
  render: function () {
    return (
      <div className='main-container'>
        <div className='jumbotron col-sm-12 text-center' >
          <h1>Twitter Feed Analyzer</h1>
          <p className='lead'>Finds your top twitterers</p>
            {this.props.children}
            </div>
      </div>
    )
  }
});

module.exports = Main;
