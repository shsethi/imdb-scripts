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
// imdb.getReq({ name: 'The Toxic Avenger' }, (err, things) => {
//     movie = things;
// });

// // Promises! 
// imdb.get('The Toxic Avenger').then(console.log);
// imdb.getById('tt0090190').then(console.log);


function formatUrl(url,title, index){
	return '<li>'+title +'  <a href='+url+'>'+url+'</a><br></li>';
	// index+ '. '+ title +'  <a href='+url+'>'+url+'</a><br>';
}

try {
	movieList.map((movie,index)=>{

		 imdb.getReq({ name: movie }).then(r=>{
			console.log(r.imdburl);
			fs.appendFile("Output.html", formatUrl(r.imdburl, r.title , index), function (err,data) {
				if (err) 
					return console.log(err);
				console.log(data);

				console.log('Hello World > helloworld.txt');
			});

		})
			
		

	});


} catch(e) {
		// statements
		console.log(e);
	}




// fs.writeFile("Output.html", data, [encoding], [callback])


