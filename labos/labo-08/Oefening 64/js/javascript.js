let teRadenGetal = Math.floor((Math.random() * 10 ) +1);
let gok = prompt("Raad een getal tussen 1 en 10");;
let pogingen = 1;

while (teRadenGetal != gok) {
    pogingen++;
    if (teRadenGetal > gok) {
        gok = prompt("hoger");
    }
    else {
        gok = prompt("lager");
    }
}



let text = document.getElementById("text");
text.textContent = "Goed geraden in " + pogingen + " pogingen , het getal was " + teRadenGetal;