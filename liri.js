var DepLinker = require('dep-linker');
DepLinker.copyDependenciesTo('../../node_modules')

// Code needed to grab the data from keys.js
var twitterKeys = require('./keys.js')

console.log(twitterKeys.twitter)

// for (var key in twitterKeys.twitter) {
// 	console.log(twitterKeys.twitter[key]);
// }

var Twitter = require('twitter');
var key = twitterKeys.twitter.consumer_key;
var secret = twitterKeys.twitter.consumer_secret;
var accessKey = twitterKeys.twitter.access_token_key;
var accessToken = twitterKeys.twitter.access_token_secret;
 
var client = new Twitter({
  consumer_key: process.env.key,
  consumer_secret: process.env.secret,
  access_token_key: process.env.accessKey,
  access_token_secret: process.env.accessToken
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
    console.log(response);
  }
});



// var request = require('request');
// request('http://www.omdbapi.com/', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage. 
//   }
// })

// var userChoice = process.argv[2];

// request("http://www.omdbapi.com/?t=" + userChoice + "&y=&plot=short&r=json", function (error, response, body) {
//     // console.log(JSON.parse(body));

//     // console.log(JSON.parse(body)["Year"]) // Show the HTML for the Google homepage. 
//     // console.log(JSON.parse(body).Year) // Show the HTML for the Google homepage. 
//     // console.log(JSON.parse(body).Released) // Show the HTML for the Google homepage. 


// });


// var spotify = require('spotify');
// var songName = process.argv[2];

// spotify.search({ type: 'artist OR album OR track', query: songName }, function(err, data) {
//     if ( err ) {
//         console.log('Error occurred: ' + err);
//         return;
//     }
 
//     // Do something with 'data'
//     console.log(JSON.stringify(data, null, 2)); 
// });


