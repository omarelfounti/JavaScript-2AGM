const pregunta = "Preguntame algo";

const numeroRandom = Math.floor(Math.random() * 9) + 1;

let respuesta = "";

if (numeroRandom === 1){
    respuesta = 'Si - definitivamente';
} else if (numeroRandom === 2) {
    respuesta = 'It is decidedly so';
} else if (numeroRandom === 3) {
    respuesta = 'Sin ninguna duda';
} else if (numeroRandom === 4) {
    respuesta = 'Respuesta confusa, intenta de nuevo';
} else if (numeroRandom === 5) {
    respuesta = 'Pregunta de nuevo más tarde';
} else if (numeroRandom === 6) {
    respuesta = 'Mejor no te lo digo ahora';
} else if (numeroRandom === 7) {
    respuesta = 'Mis fuentes dicen que no';
} else if (numeroRandom === 8) {
    respuesta = 'las perspectivas no son buenas';
} else if (numeroRandom === 9) {
    respuesta = 'Muy dudoso';
} else {
    respuesta = 'Error';
}

console.log("Pregunta: ", pregunta);
console.log("Respuesta:   ", respuesta);

