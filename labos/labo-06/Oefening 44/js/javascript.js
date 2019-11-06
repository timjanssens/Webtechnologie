// Maak 3 variabelen aan om waarden in op te slagen.
// Let op: De naam van de variabelen is in het engels.
// We maken gebruik van let omdat dit properder is. 
let price;
let quantity;
let total;

// Wijs er waarden aan toe
price = 5;
quantity = 14;
// Bereken nu de totaalprijs en sla dit op in de total variabele
total = price * quantity;

// Gebruik nu console.log() om de waarde van total in de console af te drukken

console.log(total);

// het onderstaande stukje code wordt nog verder uitgelegd in een volgend hoofdstuk.
// Maar je kan er nu al gebruik van maken om de tekst van html elementen te wijzigen.

let priceSpan = document.getElementById("priceSpan"); // Deze instructie slaat het html element met id="priceSpan" op in de variabele priceSpan.
priceSpan.textContent = total; // Deze instructie wijzigt de tekst van the element in priceSpan naar de waarde die in total staat.

// nog een voorbeeld waarmee de tekst in het h1 element op de pagina gewijzigd wordt. 

let mainHeading = document.getElementById("mainHeading"); // Het h1 element wordt ingeladen.
mainHeading.textContent = "Demo oefening labo 6"; // We plaatsen een andere tekst in het h1 element.

// Er bestaat nog een (lelijke) manier om data op het scherm te tonen. 

alert(total);

// alert toont een melding op het scherm van de gebruiker met daarin de meegegeven waarde.