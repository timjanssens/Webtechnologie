let keuzeBewerking = prompt("Welke bewerking wil je laten uitvoeren? U kan kiezen tussen +, -, * en /");
while (keuzeBewerking != "+" && keuzeBewerking != "-" && keuzeBewerking != "*" && keuzeBewerking != "/") {
    keuzeBewerking = prompt("Foute keuze --> Welke bewerking wil je laten uitvoeren? U kan kiezen tussen +, -, * en /");
}

let eersteGetal = prompt("Geef een eerste getal:");
while (isNaN(eersteGetal)) {
    eersteGetal = prompt("Foute keuze --> Geef een geldig eerste getal:");
}
eersteGetal = +eersteGetal;

let tweedeGetal = prompt("Geef een tweede getal");
while (isNaN(tweedeGetal)) {
    tweedeGetal = prompt("Foute keuze --> Geef een geldig tweede getal:");   
}
tweedeGetal = +tweedeGetal;

let uitslag;

switch (keuzeBewerking) {
    case "+":
        uitslag = eersteGetal + tweedeGetal;
        break;
    case "-":
        uitslag = eersteGetal - tweedeGetal;
        break;
    case "*":
        uitslag = eersteGetal * tweedeGetal;
        break;
    case "/":
        uitslag = eersteGetal / tweedeGetal;
        break;
    default:
        break;
}


let text = document.getElementById("text");
text.textContent = "De uitslag van " + eersteGetal  + keuzeBewerking + tweedeGetal +" is " + uitslag;

