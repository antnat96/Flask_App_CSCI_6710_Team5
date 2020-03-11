$(document).ready(function() {
    // Model option save the type of model user like to use to determine the result of the form
    var modelOption = "threshold_select";
    var vampires = 0;
    var humans = 0;

    // Load the Google Charts packages & set the callback
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    // Purpose: Draw the chart
    // Parameters: typeOfChart is the type of chart to draw, vampires and humans
    // is the number of each in the class, used to update the chart
    function drawChart(typeOfChart = "pie_select") {
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
        google.charts.setOnLoadCallback(drawChart);
    })

    // Purpose: Collect the student's information and add it to the table and chart information
    function addStudent() {
        // humanTf: true = human, false = vampire
        var humanTf = false;

        // Get the student's information
        let firstName = $("#firstName").val();
        let lastName = $("#lastName").val();
        let garlic = ($("#garlic_yes").is(":checked") === true) ? true : false;
        let shadow = ($("#shadow_yes").is(":checked") === true) ? true : false;
        let complexion = ($("#complexion_yes").is(":checked") === true) ? true : false;
        let accent = ($("#accent_yes").is(":checked") === true) ? true : false;

        // model selection logic
        if (modelOption == "threshold_select")
        {
            var score = 0;
            if(shadow == false){score+=4}
            if(complexion == true){score+=3}
            if(garlic == false){score+=3}
            if(accent == true){score+=3}
            if(score > 6 ){
                vampires+=1;
                humanTf = false;
            }
            else{
                humans+=1;
                humanTf = true;
            }
        }
        else if (modelOption == "random_select")
        {
            var randomGuess = Math.floor(Math.random() * (2 - 0) ) + 0
            if(randomGuess == 0){
                vampires+=1;
                humanTf = false;
            }
            else{
                humans+=1;
                humanTf = true;
            }
        }

        // Add the information to the table
        var row = document.getElementById("students_table").insertRow(1);
        var idCell = row.insertCell(0);
        var firstNameCell = row.insertCell(1);
        var lastNameCell = row.insertCell(2);
        var garlicCell = row.insertCell(3);
        var shadowCell = row.insertCell(4);
        var complexionCell = row.insertCell(5);
        var accentCell = row.insertCell(6);
        var vampireOrHuman = row.insertCell(7);
        var deleteCell = row.insertCell(8);
        idCell.innerHTML = "";
        firstNameCell.innerHTML = firstName;
        lastNameCell.innerHTML = lastName;
        garlicCell.innerHTML = (garlic === true) ? "Yes" : "No";
        shadowCell.innerHTML = (shadow === true) ? "Yes" : "No";
        complexionCell.innerHTML = (complexion === true) ? "Yes" : "No";
        accentCell.innerHTML = (accent === true) ? "Yes" : "No";
        if(humanTf){vampireOrHuman.innerHTML="Human"}
        else{vampireOrHuman.innerHTML="Vampire"}
        deleteCell.innerHTML = "<button class= 'remove-student-button btn btn-primary'>Delete</button>";

        
    }         

    // Handle the "Delete" button
    $(document).on('click', '.remove-student-button', function(){
        // Get the closest row element's index and delete it
        var table = document.getElementById("students_table");
        let row = $(this).closest('tr').index();
        var vampireOrHuamnCell = table.rows[row].cells[7].innerHTML;
        if(vampireOrHuamnCell == "Human"){humans-=1}
        else{vampires-=1}
        //console.log(document.getElementById("students_table").rows[1].innerHTML);
        (row !== null && row !== undefined) ? document.getElementById("students_table").deleteRow(row) : window.alert("Oops! Having issues removing that student.");
    });

    // Handle the view mode change
    $("#select_view > a").on("click", function() {
        // Get the selected type of chart
        let typeOfChart = $(this).attr("id");
        // If table, show it, otherwise hide it and draw the appropriate chart
        (typeOfChart === "table_select") ? showTable() : drawChart(typeOfChart);
    })

    // Handle type of model used
    $("#select_model > a").on("click", function(){
        modelOption = $(this).attr("id");
    })

    function showTable() {
        $("#chart_div").addClass("d-none");
        $("#table_div").removeClass("d-none");
    }

});