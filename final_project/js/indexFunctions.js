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
      window.alert("There was a problem getting the flights, try again later!");
    });

    // Populate the flights table
    function populateTable(info) {

      // if the info array has content
      if (info != undefined && info != null && info[0] != []) {

        // Initialize relevant info array for filling out content in cells
        let relevantInfo = [];

        // Set the table element
        let table = document.getElementById("flights_table");
        
        // For each flight
        for (let i = 0; i < info.length; i++) {

          // Push relevant info from that flight to the relevantInfo array
          relevantInfo.push(info[i].id,info[i].departure.date,info[i].departure.location,info[i].arrival.date,info[i].arrival.location,info[i].time,info[i].cargo.weight_lbs,info[i].aircraft.type,info[i].aircraft.tail_num);

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

          // Add delete button to last cell
          cell = newRow.insertCell(relevantInfo.length);

          // And assign it the unique row id as the id attribute
          cell.innerHTML = "<button id = " + info[i].id + " class = 'btn btn-primary del-flt-btn'>Delete</button>";

          // Unset the relevantInfo array so it can be refilled on next loop
          relevantInfo = [];

        }
        // Delete flights from the JSON box
        $(".del-flt-btn").on("click", function() {
          let id = $(this).attr("id");
          $.ajax({
            url: "https://jsonbox.io/box_1aa2eecea9560cd80c48?q=id:" + id,
            type: "DELETE",
            dataType: "json",
            contentType: "application/json"
          }).done(function(result){
            location.reload();
          }).fail(function(result) {
            window.alert("Oops! Something went wrong! Please try again later.");
          });

        })

      }
      else {
        return window.alert("No flight records");
      }
    }
  });