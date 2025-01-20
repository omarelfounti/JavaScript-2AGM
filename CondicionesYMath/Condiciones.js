//Instalamos la dependencia prompt => npm install prompt-sync
const prompt = require('prompt-sync')();

let num = prompt("Introduce un número:");

// Intentamos convertir el valor ingresado a un número
num = Number(num);

if (!Number.isNaN(num)) {
    console.log("El número al cuadrado es " + (num * num));
} else {
    console.log("Error: No ingresaste un número válido.");
}


