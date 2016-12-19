var axios = require('axios')

function getFeed () {
  return axios.get('http://localhost:8080/api')
}

// Those modules get visible

var twitterService = {

  getTopTwitters: function () {
    return axios.get('http://localhost:8080/api').then(function (response) {
      // could add  this also in the Items.jsx. but for the lulz
      // here transform from object to array
        return response.data;
    })
   .catch(function (err) {
     console.warn('Error in getting tweets: ', err)
   })
  }
}

module.exports = twitterService
