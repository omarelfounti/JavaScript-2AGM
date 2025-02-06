// Popularidad

const vistasRecientesTikTok = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const vistasRecientesInstagram = [936, 2576, 453, 7013, 5489, 7402, 3921];
const vistasRecientesYouTube = [2300, 453, 5222, 989, 6733, 7402, 2789];

function media(arrayVistas) {
  let totalVistas = 0;

  for (let i = 0; i < arrayVistas.length; i++) {
    totalVistas += arrayVistas[i];
  }

  return totalVistas / arrayVistas.length;
}

function mediana(arrayVistas) {
  const estadisticasOrdenadas = arrayVistas.sort(function(a, b) { return a - b; });
  const indiceMedio = Math.floor(arrayVistas.length / 2);
  
  return estadisticasOrdenadas[indiceMedio];
}

// TikTok
console.log("TikTok");
console.log("Media:", media(vistasRecientesTikTok));
console.log("Mediana:", mediana(vistasRecientesTikTok));
console.log();

// Instagram
console.log("Instagram");
console.log("Media:", media(vistasRecientesInstagram));
console.log("Mediana:", mediana(vistasRecientesInstagram));
console.log();

// YouTube
console.log("YouTube");
console.log("Media:", media(vistasRecientesYouTube));
console.log("Mediana:", mediana(vistasRecientesYouTube));
console.log();
