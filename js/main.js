/* -----------------------------------------------
   Function for retrieving the main weather info
   ----------------------------------------------- */

function cali(){


// Replace the lat/long below with the lat/long for your desired location.
// Get your city lat/long using https://www.latlong.net/
// var arr = ['Welcome to the Best Place on Earth','Welcome to the Most Magical Place on Earth','Take a Magical Journey to a World Beyond Your Own','Your Journey Starts Here','Start Your Magical Day off Right','Venture Outside Your Comfort Zone, the Rewards are Worth it','All it Takes is Faith and Trust','Even Miracles Take a Little Time','Dont Just Fly, Soar','Believe You Can, Then You Will','Today is a Good Day to Try','Giving up is For Rookies','Always Let Your Conscience be Your Guide','Happiness is the Richest Thing we Will Ever Own','The only thing predictable about life is its unpredictability','All our dreams can come true, if we have the courage to pursue them'];

// function getRandom(){
//   // get random number based on length of array
//   var rand = Math.floor(Math.random() * arr.length);
//   // display random value
//   $('.intro').html( arr[rand] );
// }

// // call function when page loads
// getRandom();

  $('.locationselection').removeClass('slideRight').addClass('slideLeft');
  $('header').css('visibility','visible');

var latlong = '33.812931,-117.924393';

// Your unique API key. Place the long string of characters between the quotes.
var apikey = '4affea472264b6301f11a2f96050f4ae';

// Access the DarkSky API for weather data. DO NOT EDIT THIS LINE.
$.getJSON('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/'+apikey+'/' + latlong)

// Display the weather content once it is loaded, not before.

.done(function(forecast) {

		var arr = ['Welcome to the Best Place on Earth','Welcome to the Most Magical Place on Earth','Take a Magical Journey to a World Beyond Your Own','Your Journey Starts Here','Start Your Magical Day off Right','Venture Outside Your Comfort Zone, the Rewards are Worth it','All it Takes is Faith and Trust','Even Miracles Take a Little Time','Dont Just Fly, Soar','Believe You Can, Then You Will','Today is a Good Day to Try','Giving up is For Rookies','Always Let Your Conscience be Your Guide','Happiness is the Richest Thing we Will Ever Own','The only thing predictable about life is its unpredictability','All our dreams can come true, if we have the courage to pursue them'];
  	// get random number based on length of array
  		var rand = Math.floor(Math.random() * arr.length);
  	// display random value
  		$('.intro').html( arr[rand] );
  		

	// call function when page loads
	

	
  	$('.locationselection').removeClass('slideRight').addClass('slideLeft');
  	$('header').css('visibility','visible');
	// Your header section covers over the main weather info.
	// When the data is available, you will need to hide/remove this section
	// in order to see the main content. How you do this is up to you.
	
	// The most basic basic approach is to just hide the header (uncomment to use)
		
	// $('header').hide();
	
	// Other methods include animating the header away.
	// This can be done by adding a class name containing CSS animation
	// code to the header like this (uncomment to use)

	// $('header').addClass('anim');

	// This assumes you have written a class with the animation code
	// and named it .anim

	// Another way to remove the header is to provide a button and the event
	// to trigger what happens when the button is clicked (uncomment to use)

	$('header').append('<a class="continuebutton" href="#">Enter</a>');
	$('header .continuebutton').click(function(){
		$('header').addClass('slideLeft');
		$('main').append('<h1 class="toplocation">California</h1>');
	  $('main').css('visibility','visible');
	});

	// The following line calls a function to display
	// the main weather information. DO NOT EDIT THIS LINE.
	displayData(forecast);
})




.always(function(forecast) {
	console.log(forecast);
});

function displayData(forecast){

	$('.summary').html(forecast.currently.summary);

	$('.hour1 h2').html(timeConverter(forecast.hourly.data[1].time)+'0');
	$('.hour1 h3').html(Math.round(forecast.hourly.data[1].temperature) + "°F");
	$('.hour1 div').html('<img src="'+displayIcon(forecast.hourly.data[1].icon)+'">');

	$('.hour2 h2').html(timeConverter(forecast.hourly.data[2].time)+'0');
	$('.hour2 h3').html(Math.round(forecast.hourly.data[2].temperature) + "°F");
	$('.hour2 div').html('<img src="'+displayIcon(forecast.hourly.data[2].icon)+'">');

	$('.hour3 h2').html(timeConverter(forecast.hourly.data[3].time)+'0');
	$('.hour3 h3').html(Math.round(forecast.hourly.data[3].temperature) + "°F");
	$('.hour3 div').html('<img src="'+displayIcon(forecast.hourly.data[3].icon)+'">');

	$('.hour4 h2').html(timeConverter(forecast.hourly.data[4].time)+'0');
	$('.hour4 h3').html(Math.round(forecast.hourly.data[4].temperature) + "°F");
	$('.hour4 div').html('<img src="'+displayIcon(forecast.hourly.data[4].icon)+'">');

	$('.hour5 h2').html(timeConverter(forecast.hourly.data[5].time)+'0');
	$('.hour5 h3').html(Math.round(forecast.hourly.data[5].temperature) + "°F");
	$('.hour5 div').html('<img src="'+displayIcon(forecast.hourly.data[5].icon)+'">');

	$('.hour6 h2').html(timeConverter(forecast.hourly.data[6].time)+'0');
	$('.hour6 h3').html(Math.round(forecast.hourly.data[6].temperature) + "°F");
	$('.hour6 div').html('<img src="'+displayIcon(forecast.hourly.data[6].icon)+'">');

	$('.hour7 h2').html(timeConverter(forecast.hourly.data[7].time)+'0');
	$('.hour7 h3').html(Math.round(forecast.hourly.data[7].temperature) + "°F");
	$('.hour7 div').html('<img src="'+displayIcon(forecast.hourly.data[7].icon)+'">');

	$('.hour8 h2').html(timeConverter(forecast.hourly.data[8].time)+'0');
	$('.hour8 h3').html(Math.round(forecast.hourly.data[8].temperature) + "°F");
	$('.hour8 div').html('<img src="'+displayIcon(forecast.hourly.data[8].icon)+'">');

	$('.hour9 h2').html(timeConverter(forecast.hourly.data[9].time)+'0');
	$('.hour9 h3').html(Math.round(forecast.hourly.data[9].temperature) + "°F");
	$('.hour9 div').html('<img src="'+displayIcon(forecast.hourly.data[9].icon)+'">');

	$('.hour10 h2').html(timeConverter(forecast.hourly.data[10].time)+'0');
	$('.hour10 h3').html(Math.round(forecast.hourly.data[10].temperature) + "°F");
	$('.hour10 div').html('<img src="'+displayIcon(forecast.hourly.data[10].icon)+'">');

	$('.hour11 h2').html(timeConverter(forecast.hourly.data[11].time)+'0');
	$('.hour11 h3').html(Math.round(forecast.hourly.data[11].temperature) + "°F");
	$('.hour11 div').html('<img src="'+displayIcon(forecast.hourly.data[11].icon)+'">');

	$('.hour12 h2').html(timeConverter(forecast.hourly.data[12].time)+'0');
	$('.hour12 h3').html(Math.round(forecast.hourly.data[12].temperature) + "°F");
	$('.hour12 div').html('<img src="'+displayIcon(forecast.hourly.data[12].icon)+'">');

	$('.day01 p').html(Math.round(forecast.currently.temperature) + "°F");
	 $('.day01').append('<img src="'+displayIcon(forecast.daily.data[0].icon)+'">');


	 $('.day02 p').html(Math.round(forecast.daily.data[1].temperatureHigh) + "°F");
	 $('.day02 h3').html(displayDay(1));
	 $('.day02 h4').append('<img src="'+displayIcon(forecast.daily.data[1].icon)+'">');
	 
	 $('.day03 p').html(Math.round(forecast.daily.data[2].temperatureHigh) + "°F");
	 $('.day03 h3').html(displayDay(2));
	 $('.day03 h4').append('<img src="'+displayIcon(forecast.daily.data[2].icon)+'">');

	 $('.day04 p').html(Math.round(forecast.daily.data[3].temperatureHigh) + "°F");
	 $('.day04 h3').html(displayDay(3));
	 $('.day04 h4').append('<img src="'+displayIcon(forecast.daily.data[3].icon)+'">');

	 $('.day05 p').html(Math.round(forecast.daily.data[4].temperatureHigh) + "°F");
	 $('.day05 h3').html(displayDay(4));
	 $('.day05 h4').append('<img src="'+displayIcon(forecast.daily.data[4].icon)+'">');

	 $('.day06 p').html(Math.round(forecast.daily.data[5].temperatureHigh) + "°F");
	 $('.day06 h3').html(displayDay(5));
	 $('.day06 h4').append('<img src="'+displayIcon(forecast.daily.data[5].icon)+'">');

	 $('.day07 p').html(Math.round(forecast.daily.data[6].temperatureHigh) + "°F");
	 $('.day07 h3').html(displayDay(6));
	 $('.day07 h4').append('<img src="'+displayIcon(forecast.daily.data[6].icon)+'">');

	 $('.day08 p').html(Math.round(forecast.daily.data[7].temperatureHigh) + "°F");
	 $('.day08 h3').html(displayDay(7));
	 $('.day08 h4').append('<img src="'+displayIcon(forecast.daily.data[7].icon)+'">');
	}
}


function flor(){

  $('.locationselection').removeClass('slideRight').addClass('slideLeft');
  $('header').css('visibility','visible');

var latlong = '28.352911,-81.590698';

// Your unique API key. Place the long string of characters between the quotes.
var apikey = '4affea472264b6301f11a2f96050f4ae';

// Access the DarkSky API for weather data. DO NOT EDIT THIS LINE.
$.getJSON('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/'+apikey+'/' + latlong)

// Display the weather content once it is loaded, not before.

.done(function(forecast) {

		var arr = ['Welcome to the Best Place on Earth','Welcome to the Most Magical Place on Earth','Take a Magical Journey to a World Beyond Your Own','Your Journey Starts Here','Start Your Magical Day off Right','Venture Outside Your Comfort Zone, the Rewards are Worth it','All it Takes is Faith and Trust','Even Miracles Take a Little Time','Dont Just Fly, Soar','Believe You Can, Then You Will','Today is a Good Day to Try','Giving up is For Rookies','Always Let Your Conscience be Your Guide','Happiness is the Richest Thing we Will Ever Own','The only thing predictable about life is its unpredictability','All our dreams can come true, if we have the courage to pursue them'];
  	// get random number based on length of array
  		var rand = Math.floor(Math.random() * arr.length);
  	// display random value
  		$('.intro').html( arr[rand] );

	
  	$('.locationselection').removeClass('slideRight').addClass('slideLeft');
  	$('header').css('visibility','visible');


	$('header').append('<a class="continuebutton" href="#">Enter</a>');
	$('header .continuebutton').click(function(){
		$('header').addClass('slideLeft');
		$('main').append('<h1 class="toplocation">Florida</h1>');
	  $('main').css('visibility','visible');
	});

	// The following line calls a function to display
	// the main weather information. DO NOT EDIT THIS LINE.
	displayData(forecast);
})

.always(function(forecast) {
	console.log(forecast);
});

function displayData(forecast){

	$('.summary').html(forecast.currently.summary);

	$('.hour1 h2').html(timeConverter(forecast.hourly.data[1].time)+'0');
	$('.hour1 h3').html(Math.round(forecast.hourly.data[1].temperature) + "°F");
	$('.hour1 div').html('<img src="'+displayIcon(forecast.hourly.data[1].icon)+'">');

	$('.hour2 h2').html(timeConverter(forecast.hourly.data[2].time)+'0');
	$('.hour2 h3').html(Math.round(forecast.hourly.data[2].temperature) + "°F");
	$('.hour2 div').html('<img src="'+displayIcon(forecast.hourly.data[2].icon)+'">');

	$('.hour3 h2').html(timeConverter(forecast.hourly.data[3].time)+'0');
	$('.hour3 h3').html(Math.round(forecast.hourly.data[3].temperature) + "°F");
	$('.hour3 div').html('<img src="'+displayIcon(forecast.hourly.data[3].icon)+'">');

	$('.hour4 h2').html(timeConverter(forecast.hourly.data[4].time)+'0');
	$('.hour4 h3').html(Math.round(forecast.hourly.data[4].temperature) + "°F");
	$('.hour4 div').html('<img src="'+displayIcon(forecast.hourly.data[4].icon)+'">');

	$('.hour5 h2').html(timeConverter(forecast.hourly.data[5].time)+'0');
	$('.hour5 h3').html(Math.round(forecast.hourly.data[5].temperature) + "°F");
	$('.hour5 div').html('<img src="'+displayIcon(forecast.hourly.data[5].icon)+'">');

	$('.hour6 h2').html(timeConverter(forecast.hourly.data[6].time)+'0');
	$('.hour6 h3').html(Math.round(forecast.hourly.data[6].temperature) + "°F");
	$('.hour6 div').html('<img src="'+displayIcon(forecast.hourly.data[6].icon)+'">');

	$('.hour7 h2').html(timeConverter(forecast.hourly.data[7].time)+'0');
	$('.hour7 h3').html(Math.round(forecast.hourly.data[7].temperature) + "°F");
	$('.hour7 div').html('<img src="'+displayIcon(forecast.hourly.data[7].icon)+'">');

	$('.hour8 h2').html(timeConverter(forecast.hourly.data[8].time)+'0');
	$('.hour8 h3').html(Math.round(forecast.hourly.data[8].temperature) + "°F");
	$('.hour8 div').html('<img src="'+displayIcon(forecast.hourly.data[8].icon)+'">');

	$('.hour9 h2').html(timeConverter(forecast.hourly.data[9].time)+'0');
	$('.hour9 h3').html(Math.round(forecast.hourly.data[9].temperature) + "°F");
	$('.hour9 div').html('<img src="'+displayIcon(forecast.hourly.data[9].icon)+'">');

	$('.hour10 h2').html(timeConverter(forecast.hourly.data[10].time)+'0');
	$('.hour10 h3').html(Math.round(forecast.hourly.data[10].temperature) + "°F");
	$('.hour10 div').html('<img src="'+displayIcon(forecast.hourly.data[10].icon)+'">');

	$('.hour11 h2').html(timeConverter(forecast.hourly.data[11].time)+'0');
	$('.hour11 h3').html(Math.round(forecast.hourly.data[11].temperature) + "°F");
	$('.hour11 div').html('<img src="'+displayIcon(forecast.hourly.data[11].icon)+'">');

	$('.hour12 h2').html(timeConverter(forecast.hourly.data[12].time)+'0');
	$('.hour12 h3').html(Math.round(forecast.hourly.data[12].temperature) + "°F");
	$('.hour12 div').html('<img src="'+displayIcon(forecast.hourly.data[12].icon)+'">');

	$('.day01 p').html(Math.round(forecast.currently.temperature) + "°F");
	 $('.day01').append('<img src="'+displayIcon(forecast.daily.data[0].icon)+'">');


	 $('.day02 p').html(Math.round(forecast.daily.data[1].temperatureHigh) + "°F");
	 $('.day02 h3').html(displayDay(1));
	 $('.day02 h4').append('<img src="'+displayIcon(forecast.daily.data[1].icon)+'">');
	 
	 $('.day03 p').html(Math.round(forecast.daily.data[2].temperatureHigh) + "°F");
	 $('.day03 h3').html(displayDay(2));
	 $('.day03 h4').append('<img src="'+displayIcon(forecast.daily.data[2].icon)+'">');

	 $('.day04 p').html(Math.round(forecast.daily.data[3].temperatureHigh) + "°F");
	 $('.day04 h3').html(displayDay(3));
	 $('.day04 h4').append('<img src="'+displayIcon(forecast.daily.data[3].icon)+'">');

	 $('.day05 p').html(Math.round(forecast.daily.data[4].temperatureHigh) + "°F");
	 $('.day05 h3').html(displayDay(4));
	 $('.day05 h4').append('<img src="'+displayIcon(forecast.daily.data[4].icon)+'">');

	 $('.day06 p').html(Math.round(forecast.daily.data[5].temperatureHigh) + "°F");
	 $('.day06 h3').html(displayDay(5));
	 $('.day06 h4').append('<img src="'+displayIcon(forecast.daily.data[5].icon)+'">');

	 $('.day07 p').html(Math.round(forecast.daily.data[6].temperatureHigh) + "°F");
	 $('.day07 h3').html(displayDay(6));
	 $('.day07 h4').append('<img src="'+displayIcon(forecast.daily.data[6].icon)+'">');

	 $('.day08 p').html(Math.round(forecast.daily.data[7].temperatureHigh) + "°F");
	 $('.day08 h3').html(displayDay(7));
	 $('.day08 h4').append('<img src="'+displayIcon(forecast.daily.data[7].icon)+'">');
	}
}

function hong(){

  $('.locationselection').removeClass('slideRight').addClass('slideLeft');
  $('header').css('visibility','visible');

var latlong = '22.313333,114.043333';

// Your unique API key. Place the long string of characters between the quotes.
var apikey = '4affea472264b6301f11a2f96050f4ae';

// Access the DarkSky API for weather data. DO NOT EDIT THIS LINE.
$.getJSON('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/'+apikey+'/' + latlong)

// Display the weather content once it is loaded, not before.

.done(function(forecast) {

		var arr = ['Welcome to the Best Place on Earth','Welcome to the Most Magical Place on Earth','Take a Magical Journey to a World Beyond Your Own','Your Journey Starts Here','Start Your Magical Day off Right','Venture Outside Your Comfort Zone, the Rewards are Worth it','All it Takes is Faith and Trust','Even Miracles Take a Little Time','Dont Just Fly, Soar','Believe You Can, Then You Will','Today is a Good Day to Try','Giving up is For Rookies','Always Let Your Conscience be Your Guide','Happiness is the Richest Thing we Will Ever Own','The only thing predictable about life is its unpredictability','All our dreams can come true, if we have the courage to pursue them'];
  	// get random number based on length of array
  		var rand = Math.floor(Math.random() * arr.length);
  	// display random value
  		$('.intro').html( arr[rand] );

	
  	$('.locationselection').removeClass('slideRight').addClass('slideLeft');
  	$('header').css('visibility','visible');


	$('header').append('<a class="continuebutton" href="#">Enter</a>');
	$('header .continuebutton').click(function(){
		$('header').addClass('slideLeft');
		$('main').append('<h1 class="toplocation">Hong Kong</h1>');
	  $('main').css('visibility','visible');
	});

	// The following line calls a function to display
	// the main weather information. DO NOT EDIT THIS LINE.
	displayData(forecast);
})

.always(function(forecast) {
	console.log(forecast);
});

function displayData(forecast){

	$('.summary').html(forecast.currently.summary);

	$('.hour1 h2').html(timeConverter(forecast.hourly.data[1].time)+'0');
	$('.hour1 h3').html(Math.round(forecast.hourly.data[1].temperature) + "°F");
	$('.hour1 div').html('<img src="'+displayIcon(forecast.hourly.data[1].icon)+'">');

	$('.hour2 h2').html(timeConverter(forecast.hourly.data[2].time)+'0');
	$('.hour2 h3').html(Math.round(forecast.hourly.data[2].temperature) + "°F");
	$('.hour2 div').html('<img src="'+displayIcon(forecast.hourly.data[2].icon)+'">');

	$('.hour3 h2').html(timeConverter(forecast.hourly.data[3].time)+'0');
	$('.hour3 h3').html(Math.round(forecast.hourly.data[3].temperature) + "°F");
	$('.hour3 div').html('<img src="'+displayIcon(forecast.hourly.data[3].icon)+'">');

	$('.hour4 h2').html(timeConverter(forecast.hourly.data[4].time)+'0');
	$('.hour4 h3').html(Math.round(forecast.hourly.data[4].temperature) + "°F");
	$('.hour4 div').html('<img src="'+displayIcon(forecast.hourly.data[4].icon)+'">');

	$('.hour5 h2').html(timeConverter(forecast.hourly.data[5].time)+'0');
	$('.hour5 h3').html(Math.round(forecast.hourly.data[5].temperature) + "°F");
	$('.hour5 div').html('<img src="'+displayIcon(forecast.hourly.data[5].icon)+'">');

	$('.hour6 h2').html(timeConverter(forecast.hourly.data[6].time)+'0');
	$('.hour6 h3').html(Math.round(forecast.hourly.data[6].temperature) + "°F");
	$('.hour6 div').html('<img src="'+displayIcon(forecast.hourly.data[6].icon)+'">');

	$('.hour7 h2').html(timeConverter(forecast.hourly.data[7].time)+'0');
	$('.hour7 h3').html(Math.round(forecast.hourly.data[7].temperature) + "°F");
	$('.hour7 div').html('<img src="'+displayIcon(forecast.hourly.data[7].icon)+'">');

	$('.hour8 h2').html(timeConverter(forecast.hourly.data[8].time)+'0');
	$('.hour8 h3').html(Math.round(forecast.hourly.data[8].temperature) + "°F");
	$('.hour8 div').html('<img src="'+displayIcon(forecast.hourly.data[8].icon)+'">');

	$('.hour9 h2').html(timeConverter(forecast.hourly.data[9].time)+'0');
	$('.hour9 h3').html(Math.round(forecast.hourly.data[9].temperature) + "°F");
	$('.hour9 div').html('<img src="'+displayIcon(forecast.hourly.data[9].icon)+'">');

	$('.hour10 h2').html(timeConverter(forecast.hourly.data[10].time)+'0');
	$('.hour10 h3').html(Math.round(forecast.hourly.data[10].temperature) + "°F");
	$('.hour10 div').html('<img src="'+displayIcon(forecast.hourly.data[10].icon)+'">');

	$('.hour11 h2').html(timeConverter(forecast.hourly.data[11].time)+'0');
	$('.hour11 h3').html(Math.round(forecast.hourly.data[11].temperature) + "°F");
	$('.hour11 div').html('<img src="'+displayIcon(forecast.hourly.data[11].icon)+'">');

	$('.hour12 h2').html(timeConverter(forecast.hourly.data[12].time)+'0');
	$('.hour12 h3').html(Math.round(forecast.hourly.data[12].temperature) + "°F");
	$('.hour12 div').html('<img src="'+displayIcon(forecast.hourly.data[12].icon)+'">');

	$('.day01 p').html(Math.round(forecast.daily.data[0].temperatureHigh) + "°F");
	 $('.day01').append('<img src="'+displayIcon(forecast.daily.data[0].icon)+'">');


	 $('.day02 p').html(Math.round(forecast.daily.data[1].temperatureHigh) + "°F");
	 $('.day02 h3').html(displayDay(1));
	 $('.day02 h4').append('<img src="'+displayIcon(forecast.daily.data[1].icon)+'">');
	 
	 $('.day03 p').html(Math.round(forecast.daily.data[2].temperatureHigh) + "°F");
	 $('.day03 h3').html(displayDay(2));
	 $('.day03 h4').append('<img src="'+displayIcon(forecast.daily.data[2].icon)+'">');

	 $('.day04 p').html(Math.round(forecast.daily.data[3].temperatureHigh) + "°F");
	 $('.day04 h3').html(displayDay(3));
	 $('.day04 h4').append('<img src="'+displayIcon(forecast.daily.data[3].icon)+'">');

	 $('.day05 p').html(Math.round(forecast.daily.data[4].temperatureHigh) + "°F");
	 $('.day05 h3').html(displayDay(4));
	 $('.day05 h4').append('<img src="'+displayIcon(forecast.daily.data[4].icon)+'">');

	 $('.day06 p').html(Math.round(forecast.daily.data[5].temperatureHigh) + "°F");
	 $('.day06 h3').html(displayDay(5));
	 $('.day06 h4').append('<img src="'+displayIcon(forecast.daily.data[5].icon)+'">');

	 $('.day07 p').html(Math.round(forecast.daily.data[6].temperatureHigh) + "°F");
	 $('.day07 h3').html(displayDay(6));
	 $('.day07 h4').append('<img src="'+displayIcon(forecast.daily.data[6].icon)+'">');

	 $('.day08 p').html(Math.round(forecast.daily.data[7].temperatureHigh) + "°F");
	 $('.day08 h3').html(displayDay(7));
	 $('.day08 h4').append('<img src="'+displayIcon(forecast.daily.data[7].icon)+'">');
	}
}

function pari(){

  $('.locationselection').removeClass('slideRight').addClass('slideLeft');
  $('header').css('visibility','visible');

var latlong = '48.868719,2.7818';

// Your unique API key. Place the long string of characters between the quotes.
var apikey = '7b99fec5d1c6db675b304edbdb4683f7';

// Access the DarkSky API for weather data. DO NOT EDIT THIS LINE.
$.getJSON('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/'+apikey+'/' + latlong)

// Display the weather content once it is loaded, not before.

.done(function(forecast) {

		var arr = ['Welcome to the Best Place on Earth','Welcome to the Most Magical Place on Earth','Take a Magical Journey to a World Beyond Your Own','Your Journey Starts Here','Start Your Magical Day off Right','Venture Outside Your Comfort Zone, the Rewards are Worth it','All it Takes is Faith and Trust','Even Miracles Take a Little Time','Dont Just Fly, Soar','Believe You Can, Then You Will','Today is a Good Day to Try','Giving up is For Rookies','Always Let Your Conscience be Your Guide','Happiness is the Richest Thing we Will Ever Own','The only thing predictable about life is its unpredictability','All our dreams can come true, if we have the courage to pursue them'];
  	// get random number based on length of array
  		var rand = Math.floor(Math.random() * arr.length);
  	// display random value
  		$('.intro').html( arr[rand] );

	
  	$('.locationselection').removeClass('slideRight').addClass('slideLeft');
  	$('header').css('visibility','visible');


	$('header').append('<a class="continuebutton" href="#">Enter</a>');
	$('header .continuebutton').click(function(){
		$('header').addClass('slideLeft');
		$('main').append('<h1 class="toplocation">Paris</h1>');
	  $('main').css('visibility','visible');
	});

	// The following line calls a function to display
	// the main weather information. DO NOT EDIT THIS LINE.
	displayData(forecast);
})

.always(function(forecast) {
	console.log(forecast);
});

function displayData(forecast){

	$('.summary').html(forecast.currently.summary);

	$('.hour1 h2').html(timeConverter(forecast.hourly.data[1].time)+'0');
	$('.hour1 h3').html(Math.round(forecast.hourly.data[1].temperature) + "°F");
	$('.hour1 div').html('<img src="'+displayIcon(forecast.hourly.data[1].icon)+'">');

	$('.hour2 h2').html(timeConverter(forecast.hourly.data[2].time)+'0');
	$('.hour2 h3').html(Math.round(forecast.hourly.data[2].temperature) + "°F");
	$('.hour2 div').html('<img src="'+displayIcon(forecast.hourly.data[2].icon)+'">');

	$('.hour3 h2').html(timeConverter(forecast.hourly.data[3].time)+'0');
	$('.hour3 h3').html(Math.round(forecast.hourly.data[3].temperature) + "°F");
	$('.hour3 div').html('<img src="'+displayIcon(forecast.hourly.data[3].icon)+'">');

	$('.hour4 h2').html(timeConverter(forecast.hourly.data[4].time)+'0');
	$('.hour4 h3').html(Math.round(forecast.hourly.data[4].temperature) + "°F");
	$('.hour4 div').html('<img src="'+displayIcon(forecast.hourly.data[4].icon)+'">');

	$('.hour5 h2').html(timeConverter(forecast.hourly.data[5].time)+'0');
	$('.hour5 h3').html(Math.round(forecast.hourly.data[5].temperature) + "°F");
	$('.hour5 div').html('<img src="'+displayIcon(forecast.hourly.data[5].icon)+'">');

	$('.hour6 h2').html(timeConverter(forecast.hourly.data[6].time)+'0');
	$('.hour6 h3').html(Math.round(forecast.hourly.data[6].temperature) + "°F");
	$('.hour6 div').html('<img src="'+displayIcon(forecast.hourly.data[6].icon)+'">');

	$('.hour7 h2').html(timeConverter(forecast.hourly.data[7].time)+'0');
	$('.hour7 h3').html(Math.round(forecast.hourly.data[7].temperature) + "°F");
	$('.hour7 div').html('<img src="'+displayIcon(forecast.hourly.data[7].icon)+'">');

	$('.hour8 h2').html(timeConverter(forecast.hourly.data[8].time)+'0');
	$('.hour8 h3').html(Math.round(forecast.hourly.data[8].temperature) + "°F");
	$('.hour8 div').html('<img src="'+displayIcon(forecast.hourly.data[8].icon)+'">');

	$('.hour9 h2').html(timeConverter(forecast.hourly.data[9].time)+'0');
	$('.hour9 h3').html(Math.round(forecast.hourly.data[9].temperature) + "°F");
	$('.hour9 div').html('<img src="'+displayIcon(forecast.hourly.data[9].icon)+'">');

	$('.hour10 h2').html(timeConverter(forecast.hourly.data[10].time)+'0');
	$('.hour10 h3').html(Math.round(forecast.hourly.data[10].temperature) + "°F");
	$('.hour10 div').html('<img src="'+displayIcon(forecast.hourly.data[10].icon)+'">');

	$('.hour11 h2').html(timeConverter(forecast.hourly.data[11].time)+'0');
	$('.hour11 h3').html(Math.round(forecast.hourly.data[11].temperature) + "°F");
	$('.hour11 div').html('<img src="'+displayIcon(forecast.hourly.data[11].icon)+'">');

	$('.hour12 h2').html(timeConverter(forecast.hourly.data[12].time)+'0');
	$('.hour12 h3').html(Math.round(forecast.hourly.data[12].temperature) + "°F");
	$('.hour12 div').html('<img src="'+displayIcon(forecast.hourly.data[12].icon)+'">');

	$('.day01 p').html(Math.round(forecast.daily.data[0].temperatureHigh) + "°F");
	 $('.day01').append('<img src="'+displayIcon(forecast.daily.data[0].icon)+'">');


	 $('.day02 p').html(Math.round(forecast.daily.data[1].temperatureHigh) + "°F");
	 $('.day02 h3').html(displayDay(1));
	 $('.day02 h4').append('<img src="'+displayIcon(forecast.daily.data[1].icon)+'">');
	 
	 $('.day03 p').html(Math.round(forecast.daily.data[2].temperatureHigh) + "°F");
	 $('.day03 h3').html(displayDay(2));
	 $('.day03 h4').append('<img src="'+displayIcon(forecast.daily.data[2].icon)+'">');

	 $('.day04 p').html(Math.round(forecast.daily.data[3].temperatureHigh) + "°F");
	 $('.day04 h3').html(displayDay(3));
	 $('.day04 h4').append('<img src="'+displayIcon(forecast.daily.data[3].icon)+'">');

	 $('.day05 p').html(Math.round(forecast.daily.data[4].temperatureHigh) + "°F");
	 $('.day05 h3').html(displayDay(4));
	 $('.day05 h4').append('<img src="'+displayIcon(forecast.daily.data[4].icon)+'">');

	 $('.day06 p').html(Math.round(forecast.daily.data[5].temperatureHigh) + "°F");
	 $('.day06 h3').html(displayDay(5));
	 $('.day06 h4').append('<img src="'+displayIcon(forecast.daily.data[5].icon)+'">');

	 $('.day07 p').html(Math.round(forecast.daily.data[6].temperatureHigh) + "°F");
	 $('.day07 h3').html(displayDay(6));
	 $('.day07 h4').append('<img src="'+displayIcon(forecast.daily.data[6].icon)+'">');

	 $('.day08 p').html(Math.round(forecast.daily.data[7].temperatureHigh) + "°F");
	 $('.day08 h3').html(displayDay(7));
	 $('.day08 h4').append('<img src="'+displayIcon(forecast.daily.data[7].icon)+'">');
	}
}

function shan(){

  $('.locationselection').removeClass('slideRight').addClass('slideLeft');
  $('header').css('visibility','visible');

var latlong = '31.1440,121.6570';

// Your unique API key. Place the long string of characters between the quotes.
var apikey = '7b99fec5d1c6db675b304edbdb4683f7';

// Access the DarkSky API for weather data. DO NOT EDIT THIS LINE.
$.getJSON('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/'+apikey+'/' + latlong)

// Display the weather content once it is loaded, not before.

.done(function(forecast) {

		var arr = ['Welcome to the Best Place on Earth','Welcome to the Most Magical Place on Earth','Take a Magical Journey to a World Beyond Your Own','Your Journey Starts Here','Start Your Magical Day off Right','Venture Outside Your Comfort Zone, the Rewards are Worth it','All it Takes is Faith and Trust','Even Miracles Take a Little Time','Dont Just Fly, Soar','Believe You Can, Then You Will','Today is a Good Day to Try','Giving up is For Rookies','Always Let Your Conscience be Your Guide','Happiness is the Richest Thing we Will Ever Own','The only thing predictable about life is its unpredictability','All our dreams can come true, if we have the courage to pursue them'];
  	// get random number based on length of array
  		var rand = Math.floor(Math.random() * arr.length);
  	// display random value
  		$('.intro').html( arr[rand] );

	
  	$('.locationselection').removeClass('slideRight').addClass('slideLeft');
  	$('header').css('visibility','visible');


	$('header').append('<a class="continuebutton" href="#">Enter</a>');
	$('header .continuebutton').click(function(){
		$('header').addClass('slideLeft');
		$('main').append('<h1 class="toplocation">Shanghai</h1>');
	  $('main').css('visibility','visible');
	});

	// The following line calls a function to display
	// the main weather information. DO NOT EDIT THIS LINE.
	displayData(forecast);
})

.always(function(forecast) {
	console.log(forecast);
});

function displayData(forecast){

	$('.summary').html(forecast.currently.summary);

	$('.hour1 h2').html(timeConverter(forecast.hourly.data[1].time)+'0');
	$('.hour1 h3').html(Math.round(forecast.hourly.data[1].temperature) + "°F");
	$('.hour1 div').html('<img src="'+displayIcon(forecast.hourly.data[1].icon)+'">');

	$('.hour2 h2').html(timeConverter(forecast.hourly.data[2].time)+'0');
	$('.hour2 h3').html(Math.round(forecast.hourly.data[2].temperature) + "°F");
	$('.hour2 div').html('<img src="'+displayIcon(forecast.hourly.data[2].icon)+'">');

	$('.hour3 h2').html(timeConverter(forecast.hourly.data[3].time)+'0');
	$('.hour3 h3').html(Math.round(forecast.hourly.data[3].temperature) + "°F");
	$('.hour3 div').html('<img src="'+displayIcon(forecast.hourly.data[3].icon)+'">');

	$('.hour4 h2').html(timeConverter(forecast.hourly.data[4].time)+'0');
	$('.hour4 h3').html(Math.round(forecast.hourly.data[4].temperature) + "°F");
	$('.hour4 div').html('<img src="'+displayIcon(forecast.hourly.data[4].icon)+'">');

	$('.hour5 h2').html(timeConverter(forecast.hourly.data[5].time)+'0');
	$('.hour5 h3').html(Math.round(forecast.hourly.data[5].temperature) + "°F");
	$('.hour5 div').html('<img src="'+displayIcon(forecast.hourly.data[5].icon)+'">');

	$('.hour6 h2').html(timeConverter(forecast.hourly.data[6].time)+'0');
	$('.hour6 h3').html(Math.round(forecast.hourly.data[6].temperature) + "°F");
	$('.hour6 div').html('<img src="'+displayIcon(forecast.hourly.data[6].icon)+'">');

	$('.hour7 h2').html(timeConverter(forecast.hourly.data[7].time)+'0');
	$('.hour7 h3').html(Math.round(forecast.hourly.data[7].temperature) + "°F");
	$('.hour7 div').html('<img src="'+displayIcon(forecast.hourly.data[7].icon)+'">');

	$('.hour8 h2').html(timeConverter(forecast.hourly.data[8].time)+'0');
	$('.hour8 h3').html(Math.round(forecast.hourly.data[8].temperature) + "°F");
	$('.hour8 div').html('<img src="'+displayIcon(forecast.hourly.data[8].icon)+'">');

	$('.hour9 h2').html(timeConverter(forecast.hourly.data[9].time)+'0');
	$('.hour9 h3').html(Math.round(forecast.hourly.data[9].temperature) + "°F");
	$('.hour9 div').html('<img src="'+displayIcon(forecast.hourly.data[9].icon)+'">');

	$('.hour10 h2').html(timeConverter(forecast.hourly.data[10].time)+'0');
	$('.hour10 h3').html(Math.round(forecast.hourly.data[10].temperature) + "°F");
	$('.hour10 div').html('<img src="'+displayIcon(forecast.hourly.data[10].icon)+'">');

	$('.hour11 h2').html(timeConverter(forecast.hourly.data[11].time)+'0');
	$('.hour11 h3').html(Math.round(forecast.hourly.data[11].temperature) + "°F");
	$('.hour11 div').html('<img src="'+displayIcon(forecast.hourly.data[11].icon)+'">');

	$('.hour12 h2').html(timeConverter(forecast.hourly.data[12].time)+'0');
	$('.hour12 h3').html(Math.round(forecast.hourly.data[12].temperature) + "°F");
	$('.hour12 div').html('<img src="'+displayIcon(forecast.hourly.data[12].icon)+'">');

	$('.day01 p').html(Math.round(forecast.daily.data[0].temperatureHigh));
	 $('.day01').append('<img src="'+displayIcon(forecast.daily.data[0].icon)+'">');


	 $('.day01 p').html(Math.round(forecast.daily.data[0].temperatureHigh) + "°F");
	 $('.day01').append('<img src="'+displayIcon(forecast.daily.data[0].icon)+'">');


	 $('.day02 p').html(Math.round(forecast.daily.data[1].temperatureHigh) + "°F");
	 $('.day02 h3').html(displayDay(1));
	 $('.day02 h4').append('<img src="'+displayIcon(forecast.daily.data[1].icon)+'">');
	 
	 $('.day03 p').html(Math.round(forecast.daily.data[2].temperatureHigh) + "°F");
	 $('.day03 h3').html(displayDay(2));
	 $('.day03 h4').append('<img src="'+displayIcon(forecast.daily.data[2].icon)+'">');

	 $('.day04 p').html(Math.round(forecast.daily.data[3].temperatureHigh) + "°F");
	 $('.day04 h3').html(displayDay(3));
	 $('.day04 h4').append('<img src="'+displayIcon(forecast.daily.data[3].icon)+'">');

	 $('.day05 p').html(Math.round(forecast.daily.data[4].temperatureHigh) + "°F");
	 $('.day05 h3').html(displayDay(4));
	 $('.day05 h4').append('<img src="'+displayIcon(forecast.daily.data[4].icon)+'">');

	 $('.day06 p').html(Math.round(forecast.daily.data[5].temperatureHigh) + "°F");
	 $('.day06 h3').html(displayDay(5));
	 $('.day06 h4').append('<img src="'+displayIcon(forecast.daily.data[5].icon)+'">');

	 $('.day07 p').html(Math.round(forecast.daily.data[6].temperatureHigh) + "°F");
	 $('.day07 h3').html(displayDay(6));
	 $('.day07 h4').append('<img src="'+displayIcon(forecast.daily.data[6].icon)+'">');

	 $('.day08 p').html(Math.round(forecast.daily.data[7].temperatureHigh) + "°F");
	 $('.day08 h3').html(displayDay(7));
	 $('.day08 h4').append('<img src="'+displayIcon(forecast.daily.data[7].icon)+'">');
	}
}

function toky(){

  $('.locationselection').removeClass('slideRight').addClass('slideLeft');
  $('header').css('visibility','visible');

var latlong = '35.632778,139.880556';

// Your unique API key. Place the long string of characters between the quotes.
var apikey = '7b99fec5d1c6db675b304edbdb4683f7';

// Access the DarkSky API for weather data. DO NOT EDIT THIS LINE.
$.getJSON('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/'+apikey+'/' + latlong)

// Display the weather content once it is loaded, not before.

.done(function(forecast) {

		var arr = ['Welcome to the Best Place on Earth','Welcome to the Most Magical Place on Earth','Take a Magical Journey to a World Beyond Your Own','Your Journey Starts Here','Start Your Magical Day off Right','Venture Outside Your Comfort Zone, the Rewards are Worth it','All it Takes is Faith and Trust','Even Miracles Take a Little Time','Dont Just Fly, Soar','Believe You Can, Then You Will','Today is a Good Day to Try','Giving up is For Rookies','Always Let Your Conscience be Your Guide','Happiness is the Richest Thing we Will Ever Own','The only thing predictable about life is its unpredictability','All our dreams can come true, if we have the courage to pursue them'];
  	// get random number based on length of array
  		var rand = Math.floor(Math.random() * arr.length);
  	// display random value
  		$('.intro').html( arr[rand] );

	
  	$('.locationselection').removeClass('slideRight').addClass('slideLeft');
  	$('header').css('visibility','visible');


	$('header').append('<a class="continuebutton" href="#">Enter</a>');
	$('header .continuebutton').click(function(){
		$('header').addClass('slideLeft');
		$('main').append('<h1 class="toplocation">Tokyo</h1>');
	  $('main').css('visibility','visible');
	});

	// The following line calls a function to display
	// the main weather information. DO NOT EDIT THIS LINE.
	displayData(forecast);
})

.always(function(forecast) {
	console.log(forecast);
});

function displayData(forecast){

	$('.summary').html(forecast.currently.summary);

	$('.hour1 h2').html(timeConverter(forecast.hourly.data[1].time)+'0');
	$('.hour1 h3').html(Math.round(forecast.hourly.data[1].temperature) + "°F");
	$('.hour1 div').html('<img src="'+displayIcon(forecast.hourly.data[1].icon)+'">');

	$('.hour2 h2').html(timeConverter(forecast.hourly.data[2].time)+'0');
	$('.hour2 h3').html(Math.round(forecast.hourly.data[2].temperature) + "°F");
	$('.hour2 div').html('<img src="'+displayIcon(forecast.hourly.data[2].icon)+'">');

	$('.hour3 h2').html(timeConverter(forecast.hourly.data[3].time)+'0');
	$('.hour3 h3').html(Math.round(forecast.hourly.data[3].temperature) + "°F");
	$('.hour3 div').html('<img src="'+displayIcon(forecast.hourly.data[3].icon)+'">');

	$('.hour4 h2').html(timeConverter(forecast.hourly.data[4].time)+'0');
	$('.hour4 h3').html(Math.round(forecast.hourly.data[4].temperature) + "°F");
	$('.hour4 div').html('<img src="'+displayIcon(forecast.hourly.data[4].icon)+'">');

	$('.hour5 h2').html(timeConverter(forecast.hourly.data[5].time)+'0');
	$('.hour5 h3').html(Math.round(forecast.hourly.data[5].temperature) + "°F");
	$('.hour5 div').html('<img src="'+displayIcon(forecast.hourly.data[5].icon)+'">');

	$('.hour6 h2').html(timeConverter(forecast.hourly.data[6].time)+'0');
	$('.hour6 h3').html(Math.round(forecast.hourly.data[6].temperature) + "°F");
	$('.hour6 div').html('<img src="'+displayIcon(forecast.hourly.data[6].icon)+'">');

	$('.hour7 h2').html(timeConverter(forecast.hourly.data[7].time)+'0');
	$('.hour7 h3').html(Math.round(forecast.hourly.data[7].temperature) + "°F");
	$('.hour7 div').html('<img src="'+displayIcon(forecast.hourly.data[7].icon)+'">');

	$('.hour8 h2').html(timeConverter(forecast.hourly.data[8].time)+'0');
	$('.hour8 h3').html(Math.round(forecast.hourly.data[8].temperature) + "°F");
	$('.hour8 div').html('<img src="'+displayIcon(forecast.hourly.data[8].icon)+'">');

	$('.hour9 h2').html(timeConverter(forecast.hourly.data[9].time)+'0');
	$('.hour9 h3').html(Math.round(forecast.hourly.data[9].temperature) + "°F");
	$('.hour9 div').html('<img src="'+displayIcon(forecast.hourly.data[9].icon)+'">');

	$('.hour10 h2').html(timeConverter(forecast.hourly.data[10].time)+'0');
	$('.hour10 h3').html(Math.round(forecast.hourly.data[10].temperature) + "°F");
	$('.hour10 div').html('<img src="'+displayIcon(forecast.hourly.data[10].icon)+'">');

	$('.hour11 h2').html(timeConverter(forecast.hourly.data[11].time)+'0');
	$('.hour11 h3').html(Math.round(forecast.hourly.data[11].temperature) + "°F");
	$('.hour11 div').html('<img src="'+displayIcon(forecast.hourly.data[11].icon)+'">');

	$('.hour12 h2').html(timeConverter(forecast.hourly.data[12].time)+'0');
	$('.hour12 h3').html(Math.round(forecast.hourly.data[12].temperature) + "°F");
	$('.hour12 div').html('<img src="'+displayIcon(forecast.hourly.data[12].icon)+'">');

	$('.day01 p').html(Math.round(forecast.daily.data[0].temperatureHigh) + "°F");
	 $('.day01').append('<img src="'+displayIcon(forecast.daily.data[0].icon)+'">');


	 $('.day02 p').html(Math.round(forecast.daily.data[1].temperatureHigh) + "°F");
	 $('.day02 h3').html(displayDay(1));
	 $('.day02 h4').append('<img src="'+displayIcon(forecast.daily.data[1].icon)+'">');
	 
	 $('.day03 p').html(Math.round(forecast.daily.data[2].temperatureHigh) + "°F");
	 $('.day03 h3').html(displayDay(2));
	 $('.day03 h4').append('<img src="'+displayIcon(forecast.daily.data[2].icon)+'">');

	 $('.day04 p').html(Math.round(forecast.daily.data[3].temperatureHigh) + "°F");
	 $('.day04 h3').html(displayDay(3));
	 $('.day04 h4').append('<img src="'+displayIcon(forecast.daily.data[3].icon)+'">');

	 $('.day05 p').html(Math.round(forecast.daily.data[4].temperatureHigh) + "°F");
	 $('.day05 h3').html(displayDay(4));
	 $('.day05 h4').append('<img src="'+displayIcon(forecast.daily.data[4].icon)+'">');

	 $('.day06 p').html(Math.round(forecast.daily.data[5].temperatureHigh) + "°F");
	 $('.day06 h3').html(displayDay(5));
	 $('.day06 h4').append('<img src="'+displayIcon(forecast.daily.data[5].icon)+'">');

	 $('.day07 p').html(Math.round(forecast.daily.data[6].temperatureHigh) + "°F");
	 $('.day07 h3').html(displayDay(6));
	 $('.day07 h4').append('<img src="'+displayIcon(forecast.daily.data[6].icon)+'">');

	 $('.day08 p').html(Math.round(forecast.daily.data[7].temperatureHigh) + "°F");
	 $('.day08 h3').html(displayDay(7));
	 $('.day08 h4').append('<img src="'+displayIcon(forecast.daily.data[7].icon)+'">');
	}
}


// 	// The following line calls a function to display
// 	// the main weather information. DO NOT EDIT THIS LINE.
// 	displayData(forecast);
// })
// })



// // Print the data object feturned from DarkSky for all the details
// // DO NOT EDIT THIS LINE.
// // .always(function(forecast) {
// // 	console.log(forecast);
// // });




// /* -----------------------------------------------
//    Function for displaying the main weather info
//    ----------------------------------------------- */

// // All of the data comes from the "forecast" object returned
// // from the DarkSky API. Inspect this page in the browser
// // for a full list of data that can be used using the methods below.

function displayData(forecast){

	$('.day01 p').html(Math.round(forecast.daily.data[0].temperatureHigh));
	 $('.day01').append('<img src="'+displayIcon(forecast.daily.data[0].icon)+'">');


	 $('.day02 p').html(Math.round(forecast.daily.data[1].temperatureHigh));
	 $('.day02 h3').html(displayDay(1));
	 
	 $('.day03 p').html(Math.round(forecast.daily.data[2].temperatureHigh));
	 $('.day03 h3').html(displayDay(2));
	 
	 $('.day04 p').html(Math.round(forecast.daily.data[3].temperatureHigh));
	 $('.day04 h3').html(displayDay(3));

	 $('.day05 p').html(Math.round(forecast.daily.data[4].temperatureHigh));
	 $('.day05 h3').html(displayDay(4));

	 $('.day06 p').html(Math.round(forecast.daily.data[5].temperatureHigh));
	 $('.day06 h3').html(displayDay(5));

	 $('.day07 p').html(Math.round(forecast.daily.data[6].temperatureHigh));
	 $('.day07 h3').html(displayDay(6));

	 $('.day08 p').html(Math.round(forecast.daily.data[7].temperatureHigh));
	 $('.day08 h3').html(displayDay(7));
	}

// 	// Target an element in your interface and display
// 	// dynamic weather information inside of it

// 	// All of the data you need is located in the "Console" tab
// 	// when you inspect th code in the browser
// 	// Click the arrow next to the "Object" to drill down into the data
// 	// You can reference these data points in your code using the following
// 	// method(s).

// 	// For example, if I have an element <div class="today"> in my main content area
// 	// I can add data from the "Daily" array like this

// 	// $('.today').html(forecast.daily.data[0].temperatureHigh);
	
// 	// In this example, the high temperature for the first day of the week
// 	// (referenced by the number 0) is written as HTML inside the <div class="today"> element
// 	// If I want to round this number up, I would modify the code like this

// 	// $('.today').html(Math.round(forecast.daily.data[0].temperatureHigh));

// 	// If I want to display the same information for tomorrow, change the 0 to 1

// 	// $('.today').html(Math.round(forecast.daily.data[1].temperatureHigh));

// 	// If I want to display a summary of the weather
// 	// (like, "scattered thundershowers...") for today

// 	// $('.today').html(forecast.daily.data[0].summary);

// 	// If I want to modify the display of the page element based on the weather
// 	// I can access the "icon" property. This returns a value that can be used
// 	// as a CSS class name that you can create with your style details

// 	// $('.today').addClass(forecast.daily.data[0].icon);

// 	// Note – the value of "icon" above needs to be checked in the inspect
// 	// panel. It may say "rain". If this is the case, you could create a rule
// 	// inside your CSS called .rain and then add, maybe, a background color
// 	// or image. The full range of weather values returned by the "icon" property are

// 	// "clear-day", "clear-night", "rain", "snow", "sleet", "wind", "fog",
// 	// "cloudy", "partly-cloudy-day", "partly-cloudy-night", "hail",
// 	// "thunderstorm" and "tornado"

// }


/* -----------------------------------------------
   Function for creating day of the week
   ----------------------------------------------- */

// based on a system where 0 = today, 1 = tomorrow, etc.
// note: the number system below does not immediately correlate
// for example, 0 for today does not line up with 0 for Sunday below
// how this works – in the return statement, d.getDay() gets today's date
// as a number (if today is Thursday, d.getDay() will be 4)
// adding "n" to this number gives you how many days from today.
// n is passed as an argument to the displayDay() function
// in the main body of the code above.
// if today is Thursday, the 4th day of the week,
// and the number 2 is passed as an argument, 
// the function will return the number 6. 6 maps to Saturday in the 
// weekday array below.

function displayDay(n){

	var d = new Date();
	var weekday = new Array();

	weekday[0] = "Sun";
	weekday[1] = "Mon";
	weekday[2] = "Tue";
	weekday[3] = "Wed";
	weekday[4] = "Thu";
	weekday[5] = "Fri";
	weekday[6] = "Sat";

	var dispDay = d.getDay() + n;

	// adjust number system for numbers over 6
	// subtract 7 from totals higher than 6
	// to keep the day numbers in the array range above
	if(dispDay > 6){
		dispDay = dispDay - 7;
	}

	return weekday[ dispDay ];

}


/* -----------------------------------------------
   Function for converting timestampt to readable text
   Source: https://stackoverflow.com/a/6078873
   ----------------------------------------------- */

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  //var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  var time = hour + ':' + min ;
  
  if (time == '13:0') {
  	time = '1:0';
  	return time;
  	console.log(time);
  }else if (time == '14:0') {
  	time = '2:0';
  	return time;
  	console.log(time);

  }else if (time == '15:0') {
  	time = '3:0';
  	return time;
  	console.log(time);

  }else if (time == '16:0') {
  	time = '4:0';
  	return time;
  	console.log(time);

  }else if (time == '17:0') {
  	time = '5:0';
  	return time;
  	console.log(time);

  }else if (time == '18:0') {
  	time = '6:0';
  	return time;
  	console.log(time);

  }else if (time == '19:0') {
  	time = '7:0';
  	return time;
  	console.log(time);

  }else if (time == '20:0') {
  	time = '8:0';
  	return time;
  	console.log(time);

  }else if (time == '21:0') {
  	time = '9:0';
  	return time;
  	console.log(time);

  }else if (time == '22:0') {
  	time = '10:0';
  	return time;
  	console.log(time);

  }else if (time == '23:0') {
  	time = '11:0';
  	return time;
  	console.log(time);

  }else if (time == '0:0') {
  	time = '12:0';
  	return time;
  	console.log(time);

  } else {
  	return time;
  }
}



function displayIcon(n){
	switch(n) {
		case "clear-day":
    		return "img/icons/Sun.svg";
    		break;
    	case "clear-night":
    		return "img/icons/Moon-Full.svg";
    		break;
    	case "rain":
    		return "img/icons/Cloud-Rain.svg";
    		break;
    	case "snow":
    		return "img/icons/Snowflake.svg";
    		break;
    	case "sleet":
    		return "img/icons/Cloud-Hail.svg";
    		break;
    	case "wind":
    		return "img/icons/Wind.svg";
    		break;
    	case "fog":
    		return "img/icons/Cloud-Fog.svg";
    		break;
    	case "cloudy":
    		return "img/icons/Cloud.svg";
    		break;
    	case "partly-cloudy-day":
    		return "img/icons/Cloud-Sun.svg";
    		break;
    	case "partly-cloudy-night":
    		return "img/icons/Cloud-Moon.svg";
    		break;
    	case "hail":
    		return "img/icons/Cloud-Hail.svg";
    		break;
    	case "thunderstorm":
    		return "img/icons/Cloud-Lightening.svg";
    		break;
    	case "tornado":
    		return "img/icons/Tornado.svg";
    		break;
  		default:
    		// code block
	}
}