/* Make Each author have his own array */

console.log("The scripts have started!");

loadJSON();

function loadJSON() {
    console.log("Reading the JSON file.");
    $.ajax({
        url: "/js/quotes.json",
        dataType: "json",
        success: function (data) {
            console.log(data);
            loadAuthorList(data);

        }
    });
}

function loadAuthorList(data) {
    console.log("Loading Author List");

    var listHTML = "";
    for(var i = 0; i < data.length; i++) {
        listHTML += "<a href=\"javascript:loadAuthor(" + i + ")\"><div>" + data[i].author + "</div></a>";
    }
    $("#authorList").html(listHTML);
}

$(function () {
    // All jQuery code goes here
    $('.dropdownMenu > li').hover(function () {
        $(this).children("ul").slideToggle(200);
    })
})

jQuery(document).ready(function ($) {

})























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
