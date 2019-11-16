function Passenger(name, nationality, age) {
    this.name = name;
    this.nationality = nationality;
    this.age = age;
}

let passengerOne = new Passenger("Tim", "Belgium", 38);
let passengerTwo = new Passenger("Lisbeth", "Belgium", 37);

let screenPassengerOne = "Naam: " + passengerOne.name;
    screenPassengerOne += "\n Nationaliteit: " + passengerOne.nationality;
    screenPassengerOne += "\n Leeftijd: " + passengerOne.age;

let screenPassengerTwo = "Naam: " + passengerTwo.name;
screenPassengerTwo += "\n Nationaliteit: " + passengerTwo.nationality;
screenPassengerTwo += "\n Leeftijd: " + passengerTwo.age;

let idPassegerOne = document.getElementById("idPassengerOne");
idPassegerOne.textContent = screenPassengerOne;

let idPassengerTwo = document.getElementById("idPassengerTwo");
idPassengerTwo.textContent = screenPassengerTwo;