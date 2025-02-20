function saludoAleatorio() {
    var numero = Math.floor(Math.random() * 5) + 1; //generamos un numero aleatorio
  
    switch (numero) {
    case 1:
        console.log("¡Buenas tardes! ☕");
        break;
    case 2:
        console.log("¡Buenas noches! 🌙");
        break;
    case 3:
        console.log("¡Hola! 😃");
        break;
    case 4:
        console.log("¡Buenos días! 🌞");
        break;
    case 5:
        console.log("¡Hola! 😃");
        break;
        }
    }
    
saludoAleatorio(); //Llamamos a la función


  

// Creamos el objeto vehiculo con las propiedades marca, modelo y velocidadActual
let vehiculo = {
    marca: "Toyota",
    modelo: "Corolla",
    velocidadActual: 0,
    mostrarVelocidad: function() {
        console.log(`La velocidad actual es: ${this.velocidadActual} km/h`);
    }
};

// Añadimos dinámicamente el método cambiarVelocidad
vehiculo.cambiarVelocidad = function(nuevaVelocidad) {
    this.velocidadActual = nuevaVelocidad;
};

// Mostramos la velocidad
vehiculo.mostrarVelocidad();

// Cambiamos la velocidad
vehiculo.cambiarVelocidad(80);

// Mostramos la velocidad después de cambiarla
vehiculo.mostrarVelocidad();

