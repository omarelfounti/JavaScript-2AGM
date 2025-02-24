
const listaFrases = [
    "Algunas puertas solo se abren desde adentro. La respiración es una forma de acceder a esa puerta.",
    "Lo que debe enseñarse primero es la respiración.",
    "Recuerda el cielo azul. A veces puede estar cubierto de nubes, pero siempre está ahí.",
    "En medio del movimiento y el caos, mantén la calma en tu interior.",
    "No podemos controlar el mar, pero podemos aprender a surfear las olas.",
    "Los sentimientos van y vienen como nubes en un cielo ventoso. La respiración consciente es mi ancla.",
    "Para comprender lo inconmensurable, la mente debe estar extraordinariamente tranquila y en calma."
  ];
  
  const colores = ["#e81416", "#ffa500", "#faeb36", "#79c314", "#487de7", "#4b369d", "#70369d"];
  
  let contenedorDiv = document.getElementById("contenedor");
  let fraseTexto = document.getElementById("frase-texto");
  let botonFrase = document.getElementById("boton-frase");
  
  botonFrase.addEventListener("click", function() {
    const indiceAleatorio = Math.floor(Math.random() * listaFrases.length);
    const fraseAleatoria = listaFrases[indiceAleatorio];
  
    fraseTexto.innerText = fraseAleatoria;
    contenedorDiv.style.backgroundColor = colores[indiceAleatorio];
  });
  