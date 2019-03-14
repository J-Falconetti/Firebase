
// Set Variables
var shipName = "";
var shipDestination = "";
var shipTime = "";
var shipFrequency = "";
var nextArrival = "";
var minutesAway = "";
var starship = $("#ship-name");
var starshipDestination = $("#ship-destination");
var starshipTime = $("#ship-time").mask("00:00");
var starTimeFreq = $("#time-freq").mask("00");

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAsv17YRZ4fAKoYe7AUQYCet56jWO4bEVo",
    authDomain: "startravel-cdcf3.firebaseapp.com",
    databaseURL: "https://startravel-cdcf3.firebaseio.com",
    projectId: "startravel-cdcf3",
    storageBucket: "startravel-cdcf3.appspot.com",
    messagingSenderId: "12355858482"
  };

firebase.initializeApp(config);
