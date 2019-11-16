function Bus(bestemming, nummerplaat, zetelsTotaal, zetelsBezet) {
    this.bestemming = bestemming;
    this.nummerplaat = nummerplaat;
    this.zetelsTotaal = zetelsTotaal;
    this.zetelsBezet = zetelsBezet;
    this.zetelsVrij = function(){
        return this.zetelsTotaal - this.zetelsBezet;
    }
}

let busEen = new Bus("Barcelona", "1 ABC 123", 55, 43);
let busTwee = new Bus("Boedapest", "2 QWE 123", 80, 50);


let busEenScreen = "Bestemming: " + busEen.bestemming;
    busEenScreen += ",Vrije plaatsen: " + busEen.zetelsVrij();
    busEenScreen += ", Nummerplaat: " + busEen.nummerplaat;

let busTweeScreen = "Bestemming: " + busTwee.bestemming;
    busTweeScreen += ",Vrije plaatsen: " + busTwee.zetelsVrij();
    busTweeScreen += ", Nummerplaat: " + busTwee.nummerplaat;

let idEerstebus = document.getElementById("eersteBus");
idEerstebus.textContent = busEenScreen;

let idTweedBus = document.getElementById("tweedeBus");
idTweedBus.textContent = busTweeScreen;

