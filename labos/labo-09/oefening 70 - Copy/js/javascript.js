//oefening 71 begroeting -> tekst die in wordt ingevoerd als H2 tonen
function addPersonalMessage(e) {
    //ervoor zorgen dat de site niet geladen wordt
    e.preventDefault();
    //creeeren van mijnformdata
    let mijnFormData = new FormData(ELLOGINFORM);
    //data uit name "username halen"
    let username = mijnFormData.get("userName");
    //text uit username naar h2 duwen
    ELH2.textContent = username;
}

const ELH2 = document.getElementById("welcomeMessage");
const ELLOGINFORM = document.getElementById("loginForm");

//functie wordt uitgevoerd wanneer er submit wordt
ELLOGINFORM.addEventListener("submit", addPersonalMessage)


//oefening 71 array met openingsuren in een ul plaatsen door li's aan te maken.

//Array met openingsuren
let openingHourArr = [
    "Maandag 10-16u",
    "Dinsdag 11-17u",
    "Woensdag 8-12u",
    "Donderdag 13-18u",
    "Vrijdag 14-20u",
    "Zaterdag gesloten",
    "Zondag gesloten"
];

//vaste verwijzing naar ul
const MYLIST = document.getElementById("openingHoursList");

//functie wordt pas uitgevoerd wanneer de rest van de pagina geladen is.
window.addEventListener("load",addOpeningHours);

//functie om Li's te maken en om array met openingsuren in de li's te plaatsen
// --> gebruik van een for of loop
function addOpeningHours() {
for (const liOpeningHour of openingHourArr) {
    let listItem = document.createElement("li");
    listItem.textContent = liOpeningHour;
    MYLIST.appendChild(listItem);
}
}



let destinationArr = [{
        "name": "Budapest",
        "price": 50
    },
    {
        "name": "Parijs",
        "price": 30
    },
    {
        "name": "Praag",
        "price": 40
    },
    {
        "name": "Berlijn",
        "price": 60
    }
];

let busTypes = [{
        "type": "Lijnbus",
        "description": "Een lijnbus is een bus die wordt ingezet voor openbaar vervoer. Er kan onderscheid gemaakt worden tussen stads-, streek- en langeafstandsbussen. Lijnbussen zijn vaak voorzien van apparatuur voor verkeerslichtbeïnvloeding, zoals VETAG. "
    },
    {
        "type": "Stadsbus",
        "description": "Een stadsbus is een bus geschikt voor personenvervoer binnen een stad of binnen een stedelijke agglomeratie. Een stadsbus heeft tegenwoordig altijd een automatische transmissie, brede in- en uitstapdeuren en veel staanplaatsen. De nieuwste generatie bussen zijn lagevloerbussen zonder verhoogde instap. De in- en uitstap is dan circa 34 cm vanaf het wegdek. Dit wordt minder bij haltes met verhoogde trottoirs. Sommige bussen beschikken over een knielfunctie. Stadsbussen komen voor in verschillende lengtes: de midibus (9-12 meter), standaard (12 meter), stretched (15 meter, 3 assen waarvan 1 sleepas), de gelede bussen (18 meter, 3 assen) en de dubbelgelede (25,25 meter 4 assen). In sommige steden rijden elektrische stadsbussen zoals trolleybussen. "
    },
    {
        "type": "Streekbus",
        "description": "Een streekbus is een bus geschikt voor vervoer tussen steden en dorpen met meer zitplaatsen dan een stadsbus. De meeste streekbussen zijn 12 meter lang, hoewel ook gelede bussen en bussen met sleepassen worden ingezet. "
    },
    {
        "type": "Langeafstandsbus",
        "description": "Langeafstandsbussen zijn soms 15 meter lang (in plaats van de voor andere bussen gebruikelijke 12 meter), en voorzien van 44 zitplaatsen. Bij de achteras is dan een extra as bijgeplaatst (sleepas) om het draagvermogen per wiel binnen de wettelijke grenzen te houden. Deze zogenaamde derde as welke bij bochten meesturend is, wordt bij een snelheid van 20 km/u of meer weer geblokkeerd om de stabiliteit van de bus bij hogere snelheden te waarborgen. "
    }
]