let indiceLuz = 0;

function cambiarLuz() {
  const luzRoja = document.getElementById("rojo");
  const luzAmarilla = document.getElementById("amarillo");
  const luzVerde = document.getElementById("verde");

  if (indiceLuz === 0) {
    luzRoja.style.backgroundColor = "#ff0000";
    luzAmarilla.style.backgroundColor = "";
    luzVerde.style.backgroundColor = "";
  } else if (indiceLuz === 1) {
    luzAmarilla.style.backgroundColor = "#ffff00";
    luzRoja.style.backgroundColor = "";
    luzVerde.style.backgroundColor = "";
  } else {
    luzVerde.style.backgroundColor = "#00ff00";
    luzRoja.style.backgroundColor = "";
    luzAmarilla.style.backgroundColor = "";
  }

  indiceLuz = (indiceLuz + 1) % 3;
}
