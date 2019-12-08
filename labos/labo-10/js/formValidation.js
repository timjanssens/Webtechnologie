/*
 * In dit javascript bestand plaats je de code om met behulp van cleave.js formvalidatie toe te passen op de ticketForm.
 * Gebruik hiervoor de documentatie op https://nosir.github.io/cleave.js/ 
 */

let cleaveDate = new Cleave('.dateField', {
    date: true,
    delimiter: '/',
});

var cleavePhoneNumber = new Cleave('.phoneNrField', {
    phone: true,
    phoneRegionCode: 'BE'
});



let cleaveCreditCard = new Cleave('.creditCardField', {
    creditCard: true
});


