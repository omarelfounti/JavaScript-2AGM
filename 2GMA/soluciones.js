//Bien
function saludoAleatorio() {
  const numrandom = Math.floor(Math.random() * 4) + 1;
  if (numrandom == 1) {
      console.log("Hola");
  } else if (numrandom == 2) {
      console.log("Buenas tardes");
  } else if (numrandom == 3) {
      console.log("Buenas noches");
  } else if (numrandom == 4) {
      console.log("Buenos dias");
  } else {
      console.log("Buenas");
  }
}
saludoAleatorio();

/* 

//Ej 1
function saludoAleatorio() { 
    const numeroAleatorio = Math.floor(Math.random() * 5) + 1;

    if (numeroAleatorio == 1){
        console.log("Hola");
    }
    else if (numeroAleatorio == 2){
        console.log("Buenos dias");
    }
    else if (numeroAleatorio == 3){
        console.log("Buenas tardes");
    }
    else if (numeroAleatorio == 4){
        console.log("Buenas noches");
    }
    else if (numeroAleatorio == 5){
        console.log("Qu� tal est�s");
    }   
}

saludoAleatorio();

*/

//Bien
for (let i = 100; i >= 50; i -= 5) {
    console.log(i);
    if (i < 50) {
      break;
    }
  }


//Bien
let tablet = {
  propietario: "Javier",
  sistemaOperativo: "iOS"
};
tablet.propietario = "Omar";
tablet.sistemaOperativo = "Android";
console.log(tablet.propietario);
console.log(tablet.sistemaOperativo);

//Bien
let coche = {
  marca: "Citroen",
  color: "Blanco"
};
coche.marca = "BMW";
coche.color = "Negro";
console.log(coche.marca);
console.log(coche.color);

//Bien
let producto = {
  precio: 15.99,
  stock: false
};
producto.precio = 19.99;
producto.stock = true;
console.log(producto.precio);
console.log(producto.stock);

const vehiculo = {
  marca: "Audi",
  modelo: "RS7",
  velocidadActual: 0,
};
function mostrarVelocidad (velocidad) {
  velocidad = vehiculo.velocidadActual;
  console.log("La velocidad actual es: " + velocidad + " km/h")
};
function cambiarVelocidad(nuevaVelocidad) {
  nuevaVelocidad = 80;
  vehiculo.velocidadActual = nuevaVelocidad;
}
mostrarVelocidad();
cambiarVelocidad();
mostrarVelocidad();








