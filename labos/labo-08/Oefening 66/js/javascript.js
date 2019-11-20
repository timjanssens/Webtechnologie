let getal = prompt("Van welk getal wil u de faculteit berkenen?")
let faculteit = 1;

for (let i=1; i <= getal ; i++) {
    faculteit *= i;
}


let text = document.getElementById("text");
text.textContent = "De faculteit van " + getal + " is " + faculteit;