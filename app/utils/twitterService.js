var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getFeed(){
  return axios.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name='+username+'&count=2');
}
function getUserInfo (username) {
  return axios.get('https://api.github.com/users/' + username + param);
}



// Those modules get visible

var twitterService = {

  getPlayersInfo: function (players) {
    // axios.all calls each axios.get
    return axios.all(
      players.map(function (username) {
      return getUserInfo(username)
      })
    )
    .then(function (info) {

    // he uses map to create the new array with just the data on the items
      return info.map(function (user) {
        return user.data
      })
    })
    .catch(function (err) {
      console.warn('Error in getPlayersInfo: ', err)
    })
  }



};

module.exports = twitterService;
