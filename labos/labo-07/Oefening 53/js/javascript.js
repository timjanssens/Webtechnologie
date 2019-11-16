let bus = {
    nummerplaat: "1 ABC 123",
    bestemming: "Barcelona",
    zetels: 52,
    GereserveerdeZetels: 43,
    zetelsVrij: function() {
        return this.zetels - this.GereserveerdeZetels;
    }

}

let showText =  function(busElement, id) {
    let titel = document.getElementById(id);
    titel.textContent = busElement;
}

showText(bus.bestemming, "heading");
showText(bus.zetelsVrij(), "aantalZetelsVrij");