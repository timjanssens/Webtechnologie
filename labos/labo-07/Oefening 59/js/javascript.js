//constructor for bus
function Bus(bestemming, nummerplaat, zetelsTotaal, zetelsBezet) {
    this.bestemming = bestemming;
    this.nummerplaat = nummerplaat;
    this.zetelsTotaal = zetelsTotaal;
    this.zetelsBezet = zetelsBezet;
    this.zetelsVrij = function () {
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

let bussen = [];

function addBus(bestemming, nummerplaat, zetelsTotaal, zetelsBezet) {
    bus = new Bus(bestemming, nummerplaat, zetelsTotaal, zetelsBezet);
    bussen.push(bus);
}

addBus("Barcelona", "1 ABC 123", 55, 43);
addBus("Boedapest", "2 QWE 123", 80, 50);



//make objects bus


function addPassenger(name, nationality, age, bus) {
    bus.zetelsBezet++;
    let passenger = new Passenger(name, nationality, age);
    bus.passengers.push(passenger);
}

addPassenger("Tim", "Belgium", 38, bussen[0]);
addPassenger("Lisbeth", "Belgium", 37, bussen[0]);

addPassenger("Babs", "Belgium", 17, bussen[1]);
addPassenger("Kyan", "Belgium", 16, bussen[1]);




let heading = document.getElementById("heading");
for (busTeller = 0; busTeller < bussen.length; busTeller++) {
    heading.textContent += bussen[busTeller].bestemming + " : \r\n";
    // // //lus  maken om de passagiers uit het object te halen en deze samen te voegen
    for (let passagierTeller = 0; passagierTeller < bussen[busTeller].passengers.length; passagierTeller++) {
        heading.textContent += passagierTeller+1 + ")  " +  bussen[busTeller].passengers[passagierTeller].name + "\r\n";
    }
    heading.textContent += "\r\n" + "\r\n";
}