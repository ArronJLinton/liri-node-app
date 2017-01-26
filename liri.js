// Code needed to grab the data from keys.js
// var twitterKeys = require('./keys.js')

// console.log(twitterKeys.twitter)

// for (var key in twitterKeys.twitter) {
// 	console.log(twitterKeys.twitter[key]);
// }

// Twitter API request 
// var Twitter = require('twitter');
// var key = twitterKeys.twitter.consumer_key;
// var secret = twitterKeys.twitter.consumer_secret;
// var accessKey = twitterKeys.twitter.access_token_key;
// var accessToken = twitterKeys.twitter.access_token_secret;
 
// var client = new Twitter({
//   consumer_key: key,
//   consumer_secret: secret,
//   access_token_key: accessKey,
//   access_token_secret: accessToken
// });


// var params = {q: 'node.js'};
// client.get('search/tweets', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(error);
//   } else if(process.argv[2] === "my-tweets") {
//   // console.log(tweets);
//   console.log(JSON.stringify(response, null, 2));
// 	}
// });


var request = require('request');
request('http://www.omdbapi.com/', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    // console.log(body) // Show the HTML for the Google homepage. 
  }
})

// OMDB Request
if (process.argv[2] === "movie-this"){
	var userChoice = process.argv[3];

	request("http://www.omdbapi.com/?t=" + userChoice + "&y=&plot=short&r=json", function (error, response, body) {
    // console.log(JSON.parse(body));
    if(userChoice === process.argv[3]) {
	    console.log(JSON.parse(body).Title)
	    console.log(JSON.parse(body).Year)
	    console.log(JSON.parse(body).Rated)
	    console.log(JSON.parse(body).Country) 
	    console.log(JSON.parse(body).Plot) 
	    console.log(JSON.parse(body).Actors) 
	    console.log(JSON.parse(body).imdbRating)
    }else if (process.argv[3] === MrNobody) {
    	console.log("Title: " + JSON.parse(body).Title)
	    console.log("Year: " + JSON.parse(body).Year)
	    console.log("IMDB Rating: " + JSON.parse(body).Rated)
	    console.log("Country: " + JSON.parse(body).Country) 
	    console.log("Summary: " + JSON.parse(body).Plot) 
	    console.log("Actors: " + JSON.parse(body).Actors) 
	    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).imdbRating)
    	}
	});
}


// Spotify request
var spotify = require('spotify');
if(process.argv[2] === "spotify-this-song"){
	var songName = process.argv[3];

	spotify.search({ type: 'track', query: songName }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }else {
    	console.log("Track Name: " + data.tracks.items[0].name)
    	console.log("Artist: " + data.tracks.items[0].artists[0].name)
    	console.log("Album: " + data.tracks.items[0].album.name)
    	console.log("Preview: " + data.tracks.items[0].preview_url)    	
    }

	});
}


