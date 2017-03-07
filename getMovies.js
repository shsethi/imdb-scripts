const imdb = require('imdb-api');
const fs = require('fs');

let movieList = ['Bad boys',
'Jurassic Park',
'Terminator 2: Judgement Day',
'Where eagles dare',
'Tora Tora Tora',
'Guns of navarone',
'Fistful of dollars',
'Back to the Future trilogy',
'Animal House',
'Dumb and dumber',
'The Mask',
'Batman Forever',
'Top Gun',
'Home Alone',
'Lion King',
'Predator',
'Eraser',
'True lies',
'Commando',
'Hot Shots part deux',
'Mr Deeds',
'Happy Gilmore',
'Office Space',
'Star Wars: all episodes',
'Bridge on the river kwai',
'Saving Private Ryan',
'Basic Instinct',
'Wild Things',
'Titanic',
'Species',
'Madman',
'Robocop',
'Barb wire',
'James Bond',
'Mission Impossible',
'Free Willy',
'Good will hunting',
'Shawshank redemption',
'Pulp fiction',
'Requiem for a dream',
'You\'ve got mail',
'Con Air',
'Face off',
'The rock',
'Big Lebowski',
'Run Lola run',
'Snatch',
'Lock stock and two smoking barrels',
'Shaun of the dead',
'Hot fuzz',
'Rumble in the Bronx',
'Drunken master',
'Police story',
'Enter the Dragon',
'Shanghai noon',
'Armageddon',
'Catch me if you can',
'Forrest Gump',
'Cast away',
'Philadelphia',
'Apollo 13',
'The Departed',
'Goodfellas',
'Taxi driver',
'Scarface',
'Dog day afternoon',
'Gangs of new York',
'Heat﻿',
'Billy madison﻿'];

function formatUrl(url,title, index){
	return '<li>'+title +'  <a href='+url+'>'+url+'</a><br></li>';
	// index+ '. '+ title +'  <a href='+url+'>'+url+'</a><br>';
}

try {
	movieList.map((movie,index)=>{
		imdb.getReq({ name: movie }).then(r=>{
			fs.appendFile("Output.html", formatUrl(r.imdburl, r.title , index), function (err,data) {
				if (err) 
					return console.log(err);
				console.log('Done finding '+ movie);
				console.log(r.imdburl);
				
			});
		})	
	});
} catch(e) {
	console.log(e);
}