// JSnack3: A partire da un array di oggetti, creare una copia dell'array e aggiungere ai singoli elementi dell'array una nuova proprietà "position" che contiene una lettera casuale.

$(document).ready(function() {

// creo un array di oggetti

var city = [
    {
        'name': 'Roma',
    },
    {
        'name': 'Milano',
    },
    {
        'name': 'Firenze',
    },
    {
        'name': 'Napoli',
    },
];
console.log(city);

var cloneCity = [];


for (var i = 0; i < city.length; i++) {

    var letterRandom = generateRandomLetter();
    // push nel nuovo array i dati dell'array originale
    cloneCity.push(city[i]);
    // aggiungo una nuova proprietà all'array clonato
    cloneCity[i].position = letterRandom;

};

console.log(cloneCity);


// ---end ready---
});


// funzione per generare una lettera random

function generateRandomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  return alphabet[Math.floor(Math.random() * alphabet.length)]
};

console.log(generateRandomLetter())
