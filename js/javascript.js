$(function(){
    // All jQuery code goes here
    $('.dropdownMenu > li').hover(function() {
        $(this).children("ul").slideToggle(200);
    })
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
