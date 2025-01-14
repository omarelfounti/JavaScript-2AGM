let isLooking = false; // Variable para saber si la muñeca está mirando
let isGameStarted = false;
let gameInterval;

// Función que cambia si la muñeca está mirando o no
function toggleLooking() {
  isLooking = Math.random() < 0.5; // 50% de probabilidad
  if (isLooking) {
    document.getElementById('gameMessage').innerText = "¡La muñeca está mirando! ¡Detente!";
  } else {
    document.getElementById('gameMessage').innerText = "¡Muévete rápido, la muñeca no está mirando!";
  }
}

// Función para iniciar el juego
function startGame() {
  isGameStarted = true;
  document.getElementById('startButton').disabled = true;
  document.getElementById('moveButton').disabled = false;
  document.getElementById('gameMessage').innerText = "¡Cuando la muñeca no está mirando, muévete!";
  
  // Cambiar la posición de la muñeca cada 2 segundos
  gameInterval = setInterval(toggleLooking, 2000);
}

// Función para mover al jugador
function movePlayer() {
  if (isLooking) {
    document.getElementById('gameMessage').innerText = "¡Perdiste! La muñeca te atrapó.";
    clearInterval(gameInterval);
    document.getElementById('moveButton').disabled = true;
    return;
  }
  
  document.getElementById('gameMessage').innerText = "¡Te moviste correctamente! ¡Sigue jugando!";
}

// Asignar eventos a los botones
document.getElementById('startButton').addEventListener('click', startGame);
document.getElementById('moveButton').addEventListener('click', movePlayer);
