// // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyCS_LJiMZGK0YtgqxqKgj4eGPD2obBOMpI",
//     authDomain: "atmos-bcd7a.firebaseapp.com",
//     databaseURL: "https://atmos-bcd7a.firebaseio.com",
//     projectId: "atmos-bcd7a",
//     storageBucket: "atmos-bcd7a.appspot.com",
//     messagingSenderId: "671205675180"
//   };
//   firebase.initializeApp(config);

//  // Create a variable to reference the database.
// 	var database = firebase.database();

// // Create a variable for current time.
//   var currentTime = moment();
 
// $(document).ready(function(){
//     $('.parallax').parallax();
//   });


//------------------//
// All Stations API //
//------------------//

// Function to grab inputs and get the API information
$("#").on("click", function(event) {
  //Preventing the page from reloading after the button is clicked
  event.preventDefault();

  // Grabbing inputs to be stored as variables to be used in the URL
  var state = $("#state").val();
  var connectorType = $("#connector-type").val();
  var zip = $("#zip").val();
  var chargingLevel = $("#charging-level").val();

  // Creating URL using the inputs to search for fuel stations in the API
  var queryURL = "https://developer.nrel.gov/api/alt-fuel-stations/v1.json?zip=" + zip + ",ELEC&state=" + state + ",ev_connector_type=" + connectorType + ",ev_charging_level" + chargingLevel + ",status=E&limit=5&api_key=Kp6yrK20RheYpq1WjTLs2727PEW21APTLYCC2XHE&format=JSON";
  console.log(queryURL);

  // AJAX call to get the API
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    console.log(response);

    // Storing the fuel stations array as a variable
    var results = response.fuel_stations;
    console.log(results);

    // For loop to store the individual station information as variables
    for (var i = 0; i < results.length; i++) {
      var stationName = results[i].station_name;
      console.log(stationName);
      var stationAddress = results[i].street_address + " " + results[i].city + " " + results[i].state + " " + results[i].zip;
      console.log(stationAddress);
      var stationHours = results[i].access_days_time;
      console.log(stationHours);
      var stationPhone = results[i].station_phone;
      console.log(stationPhone);
      var cardsAccepted = results[i].cards_accepted;
      console.log(cardsAccepted);
      var stationStatus = results[i].status_code;
      console.log(stationStatus);
      //Need to look over how best to store charging level
      var chargingLevel = "";
      var stationAccess = results[i].groups_with_access_code;
      console.log(stationAccess);
      var connectorTypes = results[i].ev_connector_types;
      console.log(connectorTypes);
      var fuelType = results[i].fuel_type_code;
      console.log(fuelType);
      var fillType = results[i].ng_fill_type_code;
      console.log(fillType);
    };
  });
});