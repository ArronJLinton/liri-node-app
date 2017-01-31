// Twitter Request
if (process.argv[2] === "my-tweets") {
// Code needed to grab the data from keys.js
var twitterKeys = require('./keys.js')

// for (var key in twitterKeys.twitter) {
// 	console.log(twitterKeys.twitter[key]);
// }

// My Twitter API Keys
var Twitter = require('twitter');
var key = twitterKeys.twitter.consumer_key;
var secret = twitterKeys.twitter.consumer_secret;
var accessKey = twitterKeys.twitter.access_token_key;
var accessToken = twitterKeys.twitter.access_token_secret;
 
var client = new Twitter({
  consumer_key: key,
  consumer_secret: secret,
  access_token_key: accessKey,
  access_token_secret: accessToken
});

	var params = {q: 'node.js'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (error) throw error;
	  console.log(tweets);
	  // console.log(JSON.stringify(response, null, 2));
		
	});
}

// OMDB API Request
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
    if(userChoice = process.argv[3]) {
    	console.log(userChoice)
    	console.log("Title: " + JSON.parse(body).Title)
	    console.log("Year: " + JSON.parse(body).Year)
	    console.log("Rated: " + JSON.parse(body).Rated)
	    console.log("Country: " +  JSON.parse(body).Country) 
	    console.log("Plot: " + JSON.parse(body).Plot) 
	    console.log("Actors: " + JSON.parse(body).Actors) 
	    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).imdbRating)
    }else {
    	userChoice = "Mr.Nobody";
    	console.log(userChoice);
    	console.log(JSON.parse(body).Title)
	    console.log(JSON.parse(body).Year)
	    console.log(JSON.parse(body).Rated)
	    console.log(JSON.parse(body).Country) 
	    console.log(JSON.parse(body).Plot) 
	    console.log(JSON.parse(body).Actors) 
	    console.log(JSON.parse(body).imdbRating)
    	}
	});
}


// Spotify request

var spotify = require('spotify');

function runSpotify() {
	if(process.argv[2] === "spotify-this-song"){
	var songName = process.argv[3];

	spotify.search({ type: 'track', query: songName }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }else if( songName === process.argv[3])  {
    	// Displays track info in terminal/gitbash
    	console.log("Track Name: " + data.tracks.items[0].name)
    	console.log("Artist: " + data.tracks.items[0].artists[0].name)
    	console.log("Album: " + data.tracks.items[0].album.name)
    	console.log("Preview: " + data.tracks.items[0].preview_url)    	
    }
    else {
    	songName = "The Sign";
    	console.log(songName);
    	console.log("Track Name: " + data.tracks.items[0].name)
    	console.log("Artist: " + data.tracks.items[0].artists[0].name)
    	console.log("Album: " + data.tracks.items[0].album.name)
    	console.log("Preview: " + data.tracks.items[0].preview_url)  
    }

	});
} 
}runSpotify();


// reading random.txt file
// fs - File System
var fs = require("fs");

if(process.argv[2] === "do-what-it-says") {
	fs.readFile("random.txt", "utf8", function(erro, data){
		var dataArr = data.split(",")

		process.argv[2] = dataArr[0];
		runSpotify();
		songName = dataArr[1];
		console.log(songName)
	})
}

// Writing log.txt file

// fs.writeFile("log.txt", )
