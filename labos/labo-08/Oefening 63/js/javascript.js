let teRadenGetal = Math.floor((Math.random() * 10 ) +1);
let gok = 0;

1
do {
    gok = prompt("Raad een getal tussen 1 en 10");
} while (teRadenGetal != gok);


let text = document.getElementById("text");
text.textContent = "Goed geraden, het getal was " + teRadenGetal;