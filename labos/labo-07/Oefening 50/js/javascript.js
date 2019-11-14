//Normal function

// function welkom() {
//     var titel = document.getElementById("heading");
//     titel.textContent = "Hello function world!";
// }

// welkom();

//anonymous funcion
// var welkom = function() {
//     var titel = document.getElementById("heading");
//     titel.textContent = "Hello function world!";
// }

// welkom();

//invoked function
var welkom = (function() {
    var titel = document.getElementById("heading");
    titel.textContent = "Hello function world!";
}());
