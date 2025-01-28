function helloWorld() {
    console.log("Hello, World!");
  }
  
  helloWorld();

  function saludos() {
    const numeroAleatorio = Math.floor(Math.random() * 4) + 1;
  
    if (numeroAleatorio == 1) {
      console.log("¡Hola!");
    } else if (numeroAleatorio == 2) {
      console.log("¡Qué tal!");
    } else if (numeroAleatorio == 3) {
      console.log("¡Hey, qué haces!");
    } else if (numeroAleatorio == 4) {
      console.log("¡Buenas!");
    } else {
      console.log("¡Hola, qué onda!");
    }
  }
  
  saludos();
  saludos();
  saludos();
  