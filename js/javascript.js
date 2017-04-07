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

function search(nameVal, myArray) {
    var newArray = [];
    for (var i = 0; i < myArray.length; i++) {
        console.log(myArray[i].author);
        if (myArray[i].author.split(" ").pop() === nameVal) {
            newArray.push(myArray[i]);
        }
        else if (myArray[i].topic.split(" ").pop() === nameVal) {
            newArray.push(myArray[i]);
        }
    }
    return newArray;
}



$(function () {
    console.log("Reading the JSON file.");
    $.getJSON("../../js/quotes.json", function (data) {
        console.log(data);
        var classT = $("body").attr("class");
        //console.log(classT);
        var classA = String(classT).split(" ");
        //console.log(classA[1]);
        //var quoteArray = search(classA[1], data);
        var quoteArray = [];
        console.log('almost there');
        if (classA[0] === "Author") {
            quoteArray = data.filter(function (obj) {
                return String(obj.author).split(" ").pop() === classA[1];
            });
        }
        else if (classA[0] === "Topic") {
            quoteArray = data.filter(function(obj){
                return obj.topic.indexOf(classA[1]) > -1;
            });
        }

        console.log(quoteArray);
        var resourceQ = Quotes(quoteArray);
        var final_quote = resourceQ.quote;
        var final_author = resourceQ.author;
        var final_topic = resourceQ.topic;
        console.log(final_quote);
        console.log(final_author);
        console.log(final_topic);

        document.getElementById("Quote-div").innerHTML = final_quote;
        document.getElementById("Author-div").innerHTML = final_author;
        document.getElementById("Topic-div").innerHTML = final_topic;
    });



});








function Quotes(quoteArray2) {
    var randomNumber = Math.random();
    var fullQuoteIndex = Math.floor(randomNumber * quoteArray2.length);
    return quoteArray2[fullQuoteIndex];
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
 Random Key
console.log(Object.keys(animals)[Math.floor(Math.random()*Object.keys(animals).length)]);

// Random Value
console.log(animals[Object.keys(animals)[Math.floor(Math.random()*Object.keys(animals).length)]]);
*/
