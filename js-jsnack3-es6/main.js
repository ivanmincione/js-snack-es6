// JSnack3: A partire da un array di oggetti, creare una copia dell'array e aggiungere ai singoli elementi dell'array una nuova proprietà "position" che contiene una lettera casuale.

$(document).ready(function() {

// creo un array di oggetti

const city = [
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

// creo una copia dell'array di partenza con SPREAD

const copyCity = [...city];
console.log(copyCity);

//aggiungo la nuova proprietà POSITION
copyCity.map((element, i) => {
    element.position = generateRandomLetter();

});





// funzione per generare una lettera random
function generateRandomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  return alphabet[Math.floor(Math.random() * alphabet.length)]
};

});
