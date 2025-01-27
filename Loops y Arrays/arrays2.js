const listaPeliculas = [
    "El Origen",
    "La Vida es Bella",
    "El Padrino",
    "El Caballero Oscuro",
    "Forrest Gump",
    "Pulp Fiction",
    "El Club de la Pelea",
    "Interestelar",
    "Gladiador",
    "Sueño de Fuga"
  ];
  
listaPeliculas.shift();
listaPeliculas.pop();
listaPeliculas.push("El Gran Hotel Budapest");
listaPeliculas.unshift("Parásitos", "El Viaje de Chihiro");
  
console.log(listaPeliculas);

//Más
const diosesGriegos = ["Zeus", "Hera", "Poseidón", "Apolo", "Hermes", "Dionisio", "Hades"];
const elementoEliminadoInicio = diosesGriegos.shift();
const elementoEliminadoFinal = diosesGriegos.pop();
  
console.log(elementoEliminadoInicio); 
console.log(elementoEliminadoFinal); 
console.log(diosesGriegos); 
 
//Ejemplo
const diosesGriegos1 = ["Zeus", "Hera", "Poseidón", "Apolo", "Hermes", "Dionisio", "Hades"];


const elementoEliminadoInicio1 = diosesGriegos1.shift();

const elementoEliminadoFina1 = diosesGriegos1.pop();

diosesGriegos1.unshift("Afrodita", "Ares");

diosesGriegos1.push("Artemisa", "Hefesto");

const elementoEliminadoMedio = diosesGriegos.splice(2, 1)[0];

diosesGriegos[3] = "Deméter";

const mensajeEliminados = `Dioses eliminados: ${elementoEliminadoInicio1}, ${elementoEliminadoFinal1}, ${elementoEliminadoMedio}`;


const mensajeRestantes = `Dioses restantes: ${diosesGriegos1.join(", ")}`;

console.log(mensajeEliminados);
console.log(mensajeRestantes);



  
  