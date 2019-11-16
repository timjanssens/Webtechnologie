//constructor for passengers
function Passenger(name, nationality, age) {
    this.name = name;
    this.nationality = nationality;
    this.age = age;
}

//make objects passenger
let passengerOne = new Passenger("Tim", "Belgium", 38);
let passengerTwo = new Passenger("Lisbeth", "Belgium", 37);

//array maken van objecten
let arrayOfPassengerOne = Object.entries(passengerOne);
let arrayOfPassengerTwo = Object.entries(passengerTwo);
//2 arrays samenvoegen
let AllPassengers = [arrayOfPassengerOne , arrayOfPassengerTwo];

//constructor for bus
function Bus(bestemming, nummerplaat, zetelsTotaal, zetelsBezet, passengers) {
    this.bestemming = bestemming;
    this.nummerplaat = nummerplaat;
    this.zetelsTotaal = zetelsTotaal;
    this.zetelsBezet = zetelsBezet;
    this.zetelsVrij = function(){
        return this.zetelsTotaal - this.zetelsBezet;
    }
    this.passengers = passengers;
}


//make objects bus
let busEen = new Bus("Barcelona", "1 ABC 123", 55, 43, AllPassengers);
let busTwee = new Bus("Boedapest", "2 QWE 123", 80, 50);


let heading = document.getElementById("heading");
heading.textContent = busEen.bestemming;


let paragraph = document.getElementById("paragraph");
//lus  maken om de passagiers uit de array te halen en deze samen te voegen
for (i = 0 ; i <= AllPassengers.length ; i++)
paragraph.textContent += busEen.passengers[i][0][1] + ", ";


