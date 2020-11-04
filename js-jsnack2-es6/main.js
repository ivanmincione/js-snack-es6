// JSnack2: Creare un array di nomi e chiedere all'utente due numeri. Creare un nuovo array con i valori che si trovano in una posizione compresa tra i due numeri inseriti dall'utente.


$(document).ready(function() {

// Creo un array con dei nomi
let names = ["Mario", "Paolo", "Luca", "Giovanni", "Sara", ];

    const firstNum = parseInt(prompt( "Inserisci il primo numero"));
    const secondNum = parseInt(prompt( "Inserisci il secondo numero"));

const newNames= [];

// utilizzo ciclo forEach
    newNames.forEach((element, i) => {
        if (firstNum < i && secondNum > i) {
            newNames.push(element)
        }
    });


// alternativa con FILTER

// const newNames = names.filter((element, i) =>)
//  return firstNum < i && secondNum > i;

// ---end ready---
});
