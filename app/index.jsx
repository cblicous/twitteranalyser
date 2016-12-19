
var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes.jsx');

var _APP_INFO = {
  name: 'Github Battle',
  branch: 'video4',
  version: '1.0'
}

ReactDOM.render(routes, document.getElementById('app'));
