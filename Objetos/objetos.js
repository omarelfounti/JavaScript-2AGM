
const pokemon = {
    nombre: "Pikachu",
    tipo: "Eléctrico ⚡️",
    nivel: 25,
  };
  
  pokemon.estAtrapado = false;
  
  console.log(pokemon);
  
  pokemon.estAtrapado = true;
  pokemon.nombre = "Pikapal";
  
  console.log(pokemon);

// otro ejemplo
 
 const montoya = {
    nombre: "Montoya",
    estado: "En pareja 💑",
    nivelDeConfianza: 100, 
  };
  
  console.log(montoya);
  
  
  montoya.nivelDeConfianza -= 40; 
  montoya.estado = "Dudas 🤔";
  
  console.log(montoya);
  
  
  montoya.nivelDeConfianza -= 50; 
  montoya.estado = "Soltero 🥳";
  
  console.log(montoya);
  