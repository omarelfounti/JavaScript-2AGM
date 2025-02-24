const piedra = document.getElementById('piedra');

const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

if (numeroAleatorio === 1) {
  piedra.style.backgroundColor = "red"; 
} else if (numeroAleatorio === 2) {
  piedra.style.backgroundColor = "orange"; 
} else if (numeroAleatorio === 3) {
  piedra.style.backgroundColor = "yellow"; 
} else if (numeroAleatorio === 4) {
  piedra.style.backgroundColor = "green"; 
} else if (numeroAleatorio === 5) {
  piedra.style.backgroundColor = "blue"; 
} else if (numeroAleatorio === 6) {
  piedra.style.backgroundColor = "#4169e1"; // Azul real
} else if (numeroAleatorio === 7) {
  piedra.style.backgroundColor = "#00008b"; // Azul oscuro
} else if (numeroAleatorio === 8) {
  piedra.style.backgroundColor = "purple"; 
} else {
  piedra.style.backgroundColor = "black"; 
}
