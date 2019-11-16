//constructor for bus
function Bus(bestemming, nummerplaat, zetelsTotaal, zetelsBezet) {
    this.bestemming = bestemming;
    this.nummerplaat = nummerplaat;
    this.zetelsTotaal = zetelsTotaal;
    this.zetelsBezet = zetelsBezet;
    this.zetelsVrij = function(){
        return this.zetelsTotaal - this.zetelsBezet;
    }
    this.passengers = [];
}


//constructor for passengers
function Passenger(name, nationality, age) {
    this.name = name;
    this.nationality = nationality;
    this.age = age;
}



//make objects bus
let busEen = new Bus("Barcelona", "1 ABC 123", 55, 43);
let busTwee = new Bus("Boedapest", "2 QWE 123", 80, 50);


function addPassenger (bus, name, nationality, age) {
    bus.zetelsBezet++;
    let passenger = new Passenger(name,nationality,age);
    bus.passengers.push(passenger);
}

addPassenger(busEen,"Tim", "Belgium", 38);
addPassenger(busEen, "lisbeth", "Belgium", 37);


 let heading = document.getElementById("heading");
 heading.textContent = busEen.bestemming;


let paragraph = document.getElementById("paragraph");
//lus  maken om de passagiers uit het object te halen en deze samen te voegen
for (i = 0 ; i < Object.keys(busEen.passengers).length; i++)
paragraph.textContent += busEen.passengers[i].name + ", ";



