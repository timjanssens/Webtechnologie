let score = prompt("Wat is je score?");

function geslaagdOfNiet(uitslag) {
    if (uitslag >= 50) {
        return "Geslaagd";
    }
    else {
        return "Niet geslaagd"
    }
}

let uitslag = geslaagdOfNiet(score);

let text = document.getElementById("text");
text.textContent = uitslag;
