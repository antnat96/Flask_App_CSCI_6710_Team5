$(document).ready(function() {
        
    // Handler for the "Add Flight" button
    $("#add-flight-button").on("click", function() {

      // Generate random 5 character alphanumeric identifier string
      let randomString = Math.random().toString(36).slice(2).substr(0, 5);

      // Getting input elements & values
      var aircraftInfoRaw = document.querySelectorAll("#aircraft-info input");
      var flightInfoRaw = document.querySelectorAll("#flight-info input");
      var cargoInfoRaw = document.querySelectorAll("#cargo-info input");

      // Initializing value arrays
      var aircraftInfo = [];
      var flightInfo = [];
      var cargoInfo = [];

      // Filling value arrays
      for (var i = 0, element; element = aircraftInfoRaw[i++];) {
          if (element == null || element == undefined || element == "") {
            aircraftInfo.push(null);
          }
          else {
            aircraftInfo.push(element.value);
          }
      }
      for (var i = 0, element; element = flightInfoRaw[i++];) {
        if (element == null || element == undefined || element == "") {
          flightInfo.push(null);
        }
        else {
          flightInfo.push(element.value);
        }
      }
      for (var i = 0, element; element = cargoInfoRaw[i++];) {
        if (element == null || element == undefined || element == "") {
          cargoInfo.push(null);
        }
        else {
          cargoInfo.push(element.value);
        }
      }

      let comprehensiveInfo = {
        "id": randomString,        
        "aircraft": {
          "type": aircraftInfo[0],
          "tail_num": aircraftInfo[1]
        },
        "departure" : {
          "date": flightInfo[0],
          "location": flightInfo[1],
          "airport_code": flightInfo[2],
          "time_local": flightInfo[3],
          "time_zulu": flightInfo[4],
        },
        "arrival" : {
          "date": flightInfo[5],
          "location": flightInfo[6],
          "airport_code": flightInfo[7],
          "time_local": flightInfo[8],
          "time_zulu": flightInfo[9],
        },
        "time" : flightInfo[10],
        "cargo" : {
          "num_of_items": cargoInfo[0],
          "weight_lbs": cargoInfo[1],
          "weight_kg": cargoInfo[2],
          "loading_agents": cargoInfo[3],
          "description": cargoInfo[4]
        },
      }

      $.ajax({
          url: "https://jsonbox.io/box_1aa2eecea9560cd80c48",
          data: JSON.stringify(comprehensiveInfo),
          type: "POST",
          dataType: "json",
          contentType: "application/json"
      }).done(function(result){
        $(':input').val('');
      }).fail(function(result) {
        window.alert("Oops! Something went wrong! Please try again later.");
      });
    })
  });