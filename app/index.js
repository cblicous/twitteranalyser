
var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

var _APP_INFO = {
  name: 'Twitter Loudness Calculator',
  branch: 'master',
  version: '1.0'
}


ReactDOM.render(routes, document.getElementById('app'));
