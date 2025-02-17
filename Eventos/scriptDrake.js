
let texto1 = document.getElementById("texto-1");
let texto2 = document.getElementById("texto-2");
let imagenDrake1 = document.getElementById("drake-img-1");
let imagenDrake2 = document.getElementById("drake-img-2");


let botonTexto = document.getElementById("cambiar-texto");
let botonImagen = document.getElementById("cambiar-imagen");


botonTexto.addEventListener("click", function() {
  texto1.innerText = "No quiero eso";
  texto2.innerText = "Esto sí me gusta";
});


botonImagen.addEventListener("click", function() {
  imagenDrake1.src = "imagenes/drake2.png"; 
  imagenDrake2.src = "imagenes/drake1.png"; 
});


