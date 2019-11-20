let inputPassword = prompt("Paswoord?");

let paswoordChecker = function(inputPassword) {
    if (inputPassword == "Wireframe") {
        return "Toegang toegestaan";
    }
    else {
        return "Toegang geweigerd";
    }
}

let result = paswoordChecker(inputPassword);

let text = document.getElementById("text");
text.textContent = result;