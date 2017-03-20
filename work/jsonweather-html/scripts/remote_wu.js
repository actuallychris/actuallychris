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
                var location = data['location']['city'];
                var temp_f = data['current_observation']['temp_f'];
                temp.text(temp_f);
                alert("Current temperature in " + location + " is: " + temp_f);
            }
        });
    }
    ajaxFromLocalJson("Franklin");
    ajaxFromAPI();






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
