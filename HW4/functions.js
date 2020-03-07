$(document).ready(function() {

    // Load the Google Charts packages & set the callback
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    // Purpose: Draw the chart
    // Parameters: typeOfChart is the type of chart to draw, vampires and humans
    // is the number of each in the class, used to update the chart
    function drawChart(typeOfChart = "pie_select", vampires = 2, humans = 2) {
        // Add data to the chart
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Type of Person');
        data.addColumn('number', 'Number in Class');
        data.addRows([['Vampires', vampires], ['Humans', humans]]);

        var options = {'title':'Vampires & Humans in CSCI 6710', 'width':600, 'height':600, backgroundColor: 'silver'};

        // Instantiate the appropriate type of chart within the chart_div
        if (typeOfChart === "bar_select") {
            var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        }
        else {
            var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        }

        // Show the chart and hide the table if function called after changing the view mode
        if ($("#chart_div").hasClass("d-none") && !($("#table_div").hasClass("d-none"))) {
            $("#chart_div").removeClass("d-none");
            $("#table_div").addClass("d-none");
        }

        chart.draw(data, options);
    }
    
    // Handler for the "Add Student" button
    $("#add-student-button").on("click", function() {
        addStudent();
    })

    // Purpose: Collect the student's information and add it to the table and chart information
    function addStudent() {
        // Get the student's information
        let firstName = $("#firstName").val();
        let lastName = $("#lastName").val();
        let garlic = ($("#garlic_yes").is(":checked") === true) ? true : false;
        let shadow = ($("#shadow_yes").is(":checked") === true) ? true : false;
        let complexion = ($("#complexion_yes").is(":checked") === true) ? true : false;
        let accent = ($("#accent_yes").is(":checked") === true) ? true : false;

        // Add the information to the table
        var row = document.getElementById("students_table").insertRow(1);
        var idCell = row.insertCell(0);
        var firstNameCell = row.insertCell(1);
        var lastNameCell = row.insertCell(2);
        var garlicCell = row.insertCell(3);
        var shadowCell = row.insertCell(4);
        var complexionCell = row.insertCell(5);
        var accentCell = row.insertCell(6);
        var deleteCell = row.insertCell(7);
        idCell.innerHTML = "";
        firstNameCell.innerHTML = firstName;
        lastNameCell.innerHTML = lastName;
        garlicCell.innerHTML = (garlic === true) ? "Yes" : "No";
        shadowCell.innerHTML = (shadow === true) ? "Yes" : "No";
        complexionCell.innerHTML = (complexion === true) ? "Yes" : "No";
        accentCell.innerHTML = (accent === true) ? "Yes" : "No";
        deleteCell.innerHTML = "<button class= 'remove-student-button btn btn-primary'>Delete</button>";
    }         

    // Handle the "Delete" button
    $(document).on('click', '.remove-student-button', function(){
        // Get the closest row element's index and delete it
        let row = $(this).closest('tr').index();
        (row !== null && row !== undefined) ? document.getElementById("students_table").deleteRow(row) : window.alert("Oops! Having issues removing that student.");
    });

    // Handle the view mode change
    $("#select_view > a").on("click", function() {
        // Get the selected type of chart
        let typeOfChart = $(this).attr("id");
        // If table, show it, otherwise hide it and draw the appropriate chart
        (typeOfChart === "table_select") ? showTable() : drawChart(typeOfChart);
    })

    function showTable() {
        $("#chart_div").addClass("d-none");
        $("#table_div").removeClass("d-none");
    }

});