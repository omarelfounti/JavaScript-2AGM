/*const vehiculo = {
    marca: "BMW"
    modelo: "M2"
    velocidadActual: "0 km/h 🚗💨"
    
};

console.log(vehiculo.velocidadActual);

vehiculo.mostrarVelocidad = "velocidadActual";
vehiculo.nuevaVelocidad = "80 km/h🚗💨";

console.log(vehiculo.nuevaVelocidad); */


const coche = {
    marca: "Audi",
    modelo: "Rs7",
    color: "azul",
    otros: "avant"
    
};

console.log(coche.marca, coche.color);

coche.marca = "BMW";
coche.color = "Negro";

const producto = {
    precio: "20€",
    categoria: "comida"
    
};  

producto.bajadaPrecio = false;

console.log(producto.precio, producto.bajadaPrecio);


producto.precio = "19,99€";
producto.bajadaPrecio = true;


console.log(producto.precio, producto.bajadaPrecio);

const vehiculo = {
    marca: "Audi",
    modelo: "Q7",
    velocidad: "0 km/h",
}

console.log("La velocidad actual es:", vehiculo.velocidad);
vehiculo.velocidadActual = "120 km/h"
console.log("La velocidad actual es:", vehiculo.velocidadActual)


function saludoAleatorio () {
    const numeroRandom = Math.floor(Math.random *5());

if (numeroRandom === 1) {
    console.log("Buenas Tardes");
} else if (numeroRandom === 2) {
    console.log("Buenas Noches");
} else if (numeroRandom === 3) {
    console.log("Hola");
} else if (numeroRandom === 4) {
    console.log("Hola, que tal");
} else if (numeroRandom === 5) {
    console.log("Hola, como estas");
}
else {
    console.log("No hay saludo");
}
}


function cuentaAtras() {
    for (let i = 100; i >= 50; i--) {
        console.log(i);
    }
    console.log("Cuenta atras finalizada");
}





