let bus = new Object();
    bus.nummerplaat =  "1 ABC 123",
    bus.bestemming = "Barcelona",
    bus.zetels = 52,
    bus.GereserveerdeZetels = 43,
    bus.zetelsVrij =  function() {
        return this.zetels - this.GereserveerdeZetels;
    }

let showText =  function(busElement, id) {
    let titel = document.getElementById(id);
    titel.textContent = busElement;
}

showText(bus.bestemming, "heading");
showText(bus.zetelsVrij(), "aantalZetelsVrij");