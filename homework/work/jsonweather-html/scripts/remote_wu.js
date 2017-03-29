// Current Location Scripts
$(function () {

    var status = $('#status');

    (function getGeoLocation() {
        status.text('Getting Location...');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;

                // Call the getData function, send the lat and long
                getData(lat, long);

            });
        } else {
            status.text("Your browser doesn't support Geolocation or it is not enabled!");
        }

    })();

    // Get the data from the wunderground API
    function getData(lat, long) {
        $.ajax({
            url: "http://api.wunderground.com/api/d413f4de872540b9/geolookup/q/37.776289,-122.395234.json",
            dataType: "jsonp",
            success: function (data) {
                console.log(data);
                var city = data['location']['city'];
                var state = data['location']['state'];
                var temp_f = data['current_observation']['temp_f'];
                var feel = data['current_observation']['feelslike_f'];
                var summary = data['current_observation']['weather'];
                var icon = data['current_observation']['icon_url'];
                var precip = data['current_observation']['precip_today_in'];

                var cur_location=$("#citydisplay");
                var cur_temp=$("#currentTemp");
                var feelsLike=$("#feelsLike");
                var cur_sum=$("#summary");
                var cur_precip=$("#precip");


                // This displays current data
                $("title").prepend(city + ", " + state + "|" );
                cur_location.html(city + ", " + state);
                feelsLike.html("Feels Like" + feel + "F");
                cur_sum.html(summary);
                cur_precip.html("Today's Precipitation" + precip + " in.");
                $("#icon").attr("src", icon);

            }
        });
    }
    $("#cover").fadeOut(250);
}
});

}

// A function for changing a string to TitleCase
function toTitleCase(str) {
    return str.replace(/\w+/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
});
