"use strict";

function initialisation_deck() {
    const couleurs = ["♥", "♦", "♣", "♠"];
    const valeurs = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
    let deckBase = [];
    for (let i=0; i<valeurs.length; i++) {
        for (let j=0; j<couleurs.length; j++) {
            deckBase.push("<div class='" + couleurs[j] + "'>" + couleurs[j] + valeurs[i] + "</div>");
        }
    }
    console.log(deckBase);
    return deckBase;
}

let deckActif = initialisation_deck();
let pioche = deckActif;
let main = [];
let indice;
let defausse = [];

function piocher(){
    if (pioche.length == 0){
        refaire_deck()
    }
    indice = Math.floor(Math.random() * pioche.length);
    main.push(pioche[indice]);
    pioche.splice(indice, 1);
    if (main.length > 5) {
        defausse.push(main.shift());
    }
    montrer_main()
    console.log(main);
    console.log(defausse);
}

function refaire_deck() {
    pioche = pioche.concat(defausse);
    defausse = [];
}

function montrer_main() {
    document.getElementById("carte1").innerHTML = main[0]
    document.getElementById("carte2").innerHTML = main[1]
    document.getElementById("carte3").innerHTML = main[2]
    document.getElementById("carte4").innerHTML = main[3]
    document.getElementById("carte5").innerHTML = main[4]
}