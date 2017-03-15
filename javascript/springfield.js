
jQuery(document).ready(function($) {
    $.ajax({
        url : "weather.json",
        dataType : "json",
        success : function(data) {
        console.log(data);
        function weather() {
            var location = data['Springfield']['City'];
            //                  Another Example is var location = data.Springfield.City;
            var state = data['Springfield']['State'];
            var temp_f = data['Springfield']['High'];
            console.log("Current temperature in " + location + " is: " + temp_f);

            var cur_location = $("#location");
            var temp = $("#temp");
            var message = $("#message");

cur_location.text(location + ", " + state);
temp.text(temp_f);
message.text("Current temperature in " + location + " is: " + temp_f);


        }
    });
});
