let showText =  function(welkomstekst, test) {
    let titel = document.getElementById(test);
    titel.textContent = welkomstekst;
}

showText("Universal function", "heading");
showText("To put text on the screen", "paragraph");