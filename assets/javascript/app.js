$(document).ready(function () {
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
// db (firebox) info setup for local use
var database = firebase.database();

database.ref("/ships").on("child_added", function(snap) {

    //  local variables data from db
    var shipDiff = 0;
    var shipRemainder = 0;
    var minutesTillArrival = "";
    var nextshipTime = "";
    var frequency = snap.val().frequency;
    var storeInputs = function(event) {
      event.preventDefault();
      // get user input
      shipName = starship.val().trim();
      shipDestination = starshipDestination.val().trim();
      shipTime = moment(starshipTime.val().trim(), "HH:mm").subtract(1, "years").format("X");
      shipFrequency = starTimeFreq.val().trim();
    
    }
    
    database.ref("/ships").push({
      name: shipName,
      destination: shipDestination,
      time: shipTime,
      frequency: shipFrequency,
      nextArrival: nextArrival,
      minutesAway: minutesAway,
      date_added: firebase.database.ServerValue.TIMESTAMP
  });
  //  submit and add
    alert("ship successuflly added!");
    starship.val("");
    starshipDestination.val("");
    starshipTime.val("");
    starTimeFreq.val("");
  });
 
$("#btn-add").on("click", function(event) {
   if (starship.val().length === 0 || starshipDestination.val().length === 0 || starshipTime.val().length === 0 || starTimeFreq === 0) {
      alert("Please Fill All Required Fields");
  } else {
      // if form is filled out, run function
      storeInputs(event);
  }

  }
)}
)