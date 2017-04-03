/*function doIt() {
$.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=movies',
    method: 'POST',
    contentType: 'application/x-www-form-urlencoded',
    //dataType: 'json',
    headers: {'X-Mashape-Key': 'ZDRLNucPDUmshnv84BUjqJQcW3ewp1jleEBjsn4t5qLdVhvu5C'},
    accept: "application/json"

}).done(function(data) { document.getElementById("output").innerHTML = data;  }); }*/
doIt();

function doIt() {
    $.ajax({
        url: 'quotes.json',
        data: {},
        dataType: 'json',
        success: function (data) {
            $("#quote").text("\"" + data.quote + "\"");
            $("#author").text("- " + data.author);
        },
        error: function (err) {
            alert(err);
        },
    })

    var $button = document.querySelector('.button');
    addEventListener('click', function () {
        var duration = 0.3,
            delay = 0.08;
    });

}
