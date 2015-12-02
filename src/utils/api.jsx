var Fetch = require('whatwg-fetch');
var Secrets = require('./secrets');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = Secrets.imgur.apikey;

module.exports = window.api = {
  get: function(url)
  {
    return fetch(rootUrl + url, {
      headers: {
        "Authorization": 'Client-ID '+ apiKey
      }
    }).
    then(function(response)
    {
      var data = response.json();
      return data;
    });
  }
};
