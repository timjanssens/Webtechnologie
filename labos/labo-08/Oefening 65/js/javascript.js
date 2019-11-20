let teRadenGetal = Math.floor((Math.random() * 10) + 1);
let gok = prompt("Raad een getal tussen 1 en 10");;
let pogingen = 1;

while (teRadenGetal != gok /*&& gok != "exit"*/ ) {
    pogingen++;
    if (teRadenGetal > gok) {
        gok = prompt("hoger");
    } else {
        gok = prompt("lager");
    }
    if (gok == "exit") {
        break;

    }
}



let text = document.getElementById("text");
if (gok == "exit") {
    text.textContent = "Je bent gestopt";
} else {
    text.textContent = "Goed geraden in " + pogingen + " pogingen , het getal was " + teRadenGetal;

}