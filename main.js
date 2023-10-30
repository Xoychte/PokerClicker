"use strict";

function initialisation_deck() {
    const couleurs = ["♥", "♦", "♣", "♠"];
    const valeurs = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
    let deckBase = [];
    for (let i=0; i<valeurs.length; i++) {
        for (let j=0; j<couleurs.length; j++) {
            deckBase.push(couleurs[j] + valeurs[i]);
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
    indice = Math.round(Math.random() * pioche.length);
    main.push(pioche[indice]);
    pioche.splice(indice, 1);
    if (main.length > 5) {
        defausse.push(main.shift());
    }
    console.log(main);
    console.log(defausse);
}

function refaire_deck() {
    pioche = pioche.concat(defausse);
    defausse = [];
}