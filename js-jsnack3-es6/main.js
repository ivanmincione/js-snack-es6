// JSnack3: A partire da un array di oggetti, creare una copia dell'array e aggiungere ai singoli elementi dell'array una nuova proprietà "position" che contiene una lettera casuale.

$(document).ready(function() {

// creo un array di oggetti

const city = [
    {
        'name': 'Roma',
        'people': 5000000
    },
    {
        'name': 'Milano',
        'people': 4000000

    },
    {
        'name': 'Firenze',
        'people': 1000000

    },
    {
        'name': 'Napoli',
        'people': 2000000

    },
];
console.log(city);

// creo una copia dell'array di partenza con SPREAD

// const copyCity = [...city];
// console.log(copyCity);
//
// //aggiungo la nuova proprietà POSITION
// copyCity.map((element, i) => {
//     element.position = generateRandomLetter();
//
// });
//

// --------   versione corretta------------
const copyCity = city.map((element) => {

    const copyElement = {...element, position:generateRandomLetter() };
    return copyElement;
});
console.log(copyCity);


// funzione per generare una lettera random
function generateRandomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  return alphabet[Math.floor(Math.random() * alphabet.length)]
};

});
