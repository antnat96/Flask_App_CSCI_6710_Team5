$(document).ready(function() {
    // Handler for the "Add Flight" button
    $("#search-aircraft-info").on('click',function() {
      var jqxhr = $.getJSON($SCRIPT_ROOT + '/serachAircraftInfo', {
      aircraft_type : $("#aircraftType").val(),
      aircraft_tail_num: $("#tailNumber").val(),
      })
    })

    $("#search-flight-info").on('click',function() {
      console.log("Search Flight Information");
      var jqxhr = $.getJSON($SCRIPT_ROOT + '/serachFlightInfo', {
      departure_date : $("#departureDate").val(),
      departure_location : $("#departureLocation").val(),
      departure_airport_code : $("#departureAirportCode").val(),
      departure_time_local: $("#departureTimeLocal").val(),
      departure_time_zulu: $("#departureTimeZulu").val(),
      arrival_date: $("#arrivalDate").val(),
      arrival_location: $("#arrivalLocation").val(),
      arrival_airport_code: $("#arrivalAirportCode").val(),
      arrival_time_local: $("#arrivalTimeLocal").val(),
      arrival_time_zulu: $("#arrivalTimeZulu").val(),
      flight_time : $("#flightTime").val()
      })
    })

    $("#search-cargo-info").on('click',function() {
      console.log("Search Cargo Information");
      var jqxhr = $.getJSON($SCRIPT_ROOT + '/serachCargoInfo', {
      cargo_num_of_items: $("#itemsNumber").val(),
      cargo_weight_lbs: $("#weightPounds").val(),
      cargo_weight_kg: $("#weightKilograms").val(),
      cargo_loading_agents: $("#loadingAgents").val(),
      cargo_description: $("#cargoDescription").val()
        })
    })
    
  });