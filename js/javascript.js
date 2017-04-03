/* Make Each author have his own array */

console.log("The scripts have started!");

$(function () {
    // All jQuery code goes here
    $('.dropdownMenu > li').hover(function () {
        $(this).children("ul").slideToggle(200);
    })
})

jQuery(document).ready(function ($) {

})

loadJSON();

function loadJSON() {
    console.log("Reading the JSON file.");
    $.ajax({
        url: "/js/quotes.json",
        contentType: 'application/json; charset=UTF-8',
        dataType: "json",
        success: function (data) {
            console.log(data);
            open("GET", "/js/quotes.json", true);
            document.getElementById("author").innerHTML = Author;
            var Quote = data["Quote"];
            var Author = data["Author"];
                document.getElementById("quote").innerHTML = Quote;
            console.log(Quote);
            console.log(Author);
        },
    });
    /*loadAuthorList(data);*/
}


/*
for (var i in JSON_Object) {
    for (var j in JSON_Object[i]){
        console.log(JSON_Object[i][j].Author);
    }
}*/


//Make sure that something is in the array

/*
var index = 0;
var outerArray = JSON.parse(jsonText);
var map = {};
var ids = [    // This assumes no more than 99 elements
    "#one", "#two", "#three",...So on & So forth..., "#ninety-nine"
];x
outerArray.forEach(function(nestedArray) {
    nestedArray.forEach(function(object) {
        map[ids[index++]] = object;
        delete object.count; // Doesn't matter whether this is before or after the line above
    });
});
/*
/*function newQuote() {
    var quoteID = Math.floor(Math.random() * (quotes.length));
    $("#quote").html(quotes[quoteID].quote);
    $("#attrib").html(quotes[quoteID].attrib);
    $("#twitterButton").attr("href", "http://twitter.com/intent/tweet?text=" + quotes[quoteID].quote + " -" + quotes[quoteID].attrib);
}

// wait for page load before displaying content
$(document).ready(function () {
    // load an initial quote
    newQuote();

});
*/








/*function loadAuthorList(data) {
    console.log("Loading Author List");

    var listHTML = "";
    for(var i = 0; i < data.length; i++) {
        listHTML += "<a href=\"javascript:loadAuthor(" + i + ")\"><div>" + data[i].author + "</div></a>";
    }
    $("#authorList").html(listHTML);
}
*/




function Quotes() {


    var quoteArray = Object.keys(id);
    var randomNumber = Math.random();
    var fullQuoteIndex = Math.floor(randomNumber * quoteArray.length);

    var randomKey = quoteArray[fullQuoteIndex];


};









//var animalArray  = Object.keys(animals);
//var randomNumber = Math.random();
//var animalIndex  = Math.floor(randomNumber * animalArray.length);
//
//var randomKey    = animalArray[animalIndex];
// This will course this will return the value of the randomKey
// instead of a fresh random value
//var randomValue  = animals[randomKey];


/*
var animals = {
    'cat': 'meow',
    'dog': 'woof',
    'cow': 'moo',
    'sheep': 'baaah',
    'bird': 'tweet'
};


// Random Key
console.log(Object.keys(animals)[Math.floor(Math.random()*Object.keys(animals).length)]);

// Random Value
console.log(animals[Object.keys(animals)[Math.floor(Math.random()*Object.keys(animals).length)]]);
*/
