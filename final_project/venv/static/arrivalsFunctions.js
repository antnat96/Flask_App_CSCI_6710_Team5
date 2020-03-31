$(document).ready(function() {

  // Get the flights
  $.ajax({
    url: "https://jsonbox.io/box_1aa2eecea9560cd80c48",
    type: "GET",
    dataType: "json",
    contentType: "application/json"
  }).done(function(result){
    populateTable(result);
    $("td").hover(function() {
      let nearestRow = $(this).closest("tr");
      nearestRow.attr("style", "background-color: white")
    },function() {
      let nearestRow = $(this).closest("tr");
      nearestRow.attr("style", "")
    });

  }).fail(function(result) {
    window.alert("There was a problem getting the arrivals, try again later!");
  });

  // Populate the flights table
  function populateTable(info) {

    // if the info array has content
    if (info != undefined && info != null && info[0] != []) {

      // Initialize relevant info array for filling out content in cells
      let relevantInfo = [];

      // Set the table element
      let table = document.getElementById("arrivals_table");
      
      // For each flight
      for (let i = 0; i < info.length; i++) {

        // Push relevant info from that flight to the relevantInfo array
        relevantInfo.push(
          info[i].id,
          info[i].arrival.date,
          info[i].arrival.location,
          info[i].arrival.time_local,
          info[i].time,
          info[i].cargo.weight_lbs,
          info[i].cargo.description,
          info[i].cargo.num_of_items
        );

        // Add a row
        let newRow = table.insertRow(1);

        // Initialize the cell variable
        let cell;

        // For each piece of relevant info
        for (let j = 0; j < relevantInfo.length; j++) {

          // Add a cell
          cell = newRow.insertCell(j);

          // And fill it
          cell.innerHTML = relevantInfo[j];
        }

        // Unset the relevantInfo array so it can be refilled on next loop
        relevantInfo = [];

      }

    }
    else {
      return window.alert("No flight records");
    }
  }
});