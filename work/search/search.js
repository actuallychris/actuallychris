$('#query').keyup(function () {
    var value = $('#query').val();
    var rExp = new RegExp(value, "i");
    $.getJSON("//autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {
        console.log(data); // test for JSON received


        // Begin building output
        var output = '<ol>';
        $("#forcast").html(data.current_observation.weather);
        $("#windDirection").html(data.current_observation.wind_dir);
        $("#precipitation").html(data.current_observation.precip_today_metric);
        $("#location").html(data.location.city + ", " + data.location.state);

        $("#highLow").html()

        $("#searchResults").html(output); // send results to the page
    }); // end getJSON
}); // end onkeyup

function setData(data) {
    console.log("Setting Data.");
    //reset the display search results
    $("#searchResults").html("");
    //document.getElementById("searchBar").setAttribute("value", " "); //this kills the results display for some reason
    //$("main").show();



}
