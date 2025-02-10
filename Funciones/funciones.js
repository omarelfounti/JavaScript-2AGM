//Funciones
function holaMundo() {
    console.log("Hola, Mundo!");
  }
  
  holaMundo();

//Ejemplo
function saludos() {
    const numeroAleatorio = Math.floor(Math.random() * 4) + 1;
  
    if (numeroAleatorio == 1){
      console.log("¡Hola!");
    } else if (numeroAleatorio == 2) {
      console.log("¡Buenas!");
    } else if (numeroAleatorio == 3) {
      console.log("¿Qué tal?");
    } else if (numeroAleatorio == 4) {
      console.log("¡Saludos!");
    } else {
      console.log("¡Hey!");
    }
  }
  
  saludos();
  saludos();
  saludos();

//Otro ejemplo
function saludos() {
    for (let i = 1; i <= 3; i++) {
      console.log(i);
    }
    console.log("¡Hola a todos!");
  }
  
  saludos();

//return
function holaMundo() {
    return "¡Hola, Mundo! 🌎";
  }
  
  holaMundo();

// Ejemplo
function cuentAtras() {
    for (let i = 10; i > 0; i--) {
      console.log(i);
    }
    
    return "¡Despegue! 🚀";
  }
  
  console.log(cuentAtras());


