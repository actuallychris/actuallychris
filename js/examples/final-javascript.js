console.log("The scripts have started!");

loadJSON();

function loadJSON() {
console.log("Reading the JSON file.");
$.ajax({
url: "/js/quotes.json",
dataType: "json",
success: function (data) {}
console.log(data);




})
}
