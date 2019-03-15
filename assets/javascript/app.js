      var config = {
        apiKey: "AIzaSyAsv17YRZ4fAKoYe7AUQYCet56jWO4bEVo",
        authDomain: "startravel-cdcf3.firebaseapp.com",
        databaseURL: "https://startravel-cdcf3.firebaseio.com",
        projectId: "startravel-cdcf3",
        storageBucket: "startravel-cdcf3.appspot.com",
        messagingSenderId: "12355858482"
      };
      // set  golbal varibles
      var shipName = "";
      var shipDest = "";
      var firstship = "";
      var shipFreq = "";

      // start db
      $(document).ready(function () {
        firebase.initializeApp(config);
        var database = firebase.database();
        $("#add-ship-btn").on("click", function (event) {
          event.preventDefault();
          // user input
          shipName = $("#ship-name-input").val().trim();
          shipDest = $("#dest-input").val().trim();
          firstship = $("#firstship-input").val().trim();
          shipFreq = $("#freq-input").val().trim();
          // Creates local "temporary" object for holding ship data
          var newship = {
            name: shipName,
            destination: shipDest,
            start: firstship,
            frequency: shipFreq
          };
          // Uploads ship data to the database
          database.ref().push(newship);
          // Clears data and alerts of addition
          $("#ship-name-input").val("");
          $("#dest-input").val("");
          $("#firstship-input").val("");
          $("#freq-input").val("");
          alert("ship successfully added");
        });
        // adds info to db
        database.ref().on("child_added", function (childSnapshot, prevChildKey) {
          var shipName = childSnapshot.val().name;
          var shipDest = childSnapshot.val().destination;
          var firstship = childSnapshot.val().start;
          var shipFreq = childSnapshot.val().frequency;

          // time functions
          var firstTime = 0;
          var firstTimeConverted = moment(firstTime, "HH:mm");
          var currentTime = moment();
          var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
          var tRemainder = diffTime % shipFreq;
          var tMinutesTillship = shipFreq - tRemainder;
          var nextship = moment().add(tMinutesTillship, "minutes");

          // Adding to table
          $("#ship-table > tbody").append("<tr><td>" + shipName + "</td><td>" + shipDest + "</td><td>" + shipFreq +
            "</td><td>" + moment(nextship).format("HH:mm") + "</td><td>" + tMinutesTillship + "</td></tr>");
        });

      });