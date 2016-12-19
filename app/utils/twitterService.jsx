var axios = require('axios');

function getFeed() {
  return axios.get('http://localhost:8080/api');
}


// Those modules get visible

var twitterService = {

  getTopTwitters : function () {
   return getFeed().catch(function (err) {
      console.warn('Error in getting tweets: ', err)
    })
  }
};

module.exports = twitterService;
