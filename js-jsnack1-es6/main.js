// JSnack1: Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

$(document).ready(function() {

//                 ------------ JSnack1 -------------

// Creo un array di oggetti (bici)
let bikes = [
    {
        'name': 'citybike',
        'weight': 10,
    },
    {
        'name': 'bmx',
        'weight': 8,
    },
    {
        'name': 'tandem',
        'weight': 15,
    },
    {
        'name': 'fatbike',
        'weight': 20,
    },
    {
        'name': 'ibridbike',
        'weight': 12,
    },
];

    console.log(bikes);

// stampare la bici con il peso minore
// variabile di supporto per l'elemento corrente
let bikesFit = bikes[0];

// ciclo forEach
    bikes.forEach((element, i) => {
        if (element.weight < bikesFit.weight) {
            bikesFit = element;
        }
    });

    console.log(bikesFit);

    // stampa in html
    let {name, weight} = bikesFit;

    document.getElementById("container-bike").innerHTML =
     `
     <ul>
        <li>
            Nome : ${name}
            Peso : ${weight}
        </li>
    </ul>
    `

// ---end ready---
});
