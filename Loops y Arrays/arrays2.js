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
  