const telefono = {
    modelo: "iPhone 16 Pro Max",
    marca: "Apple",
    version: 11.6,
    propietario: "Mila",
    tonoDeLlamada: function () {
      console.log("¡Rin, rin! ¡Rin, rin! 📲")
    }
  }

  telefono.tonoDeLlamada();
  
  //otro ejemplo

  const telefono2 = {
    modelo: "Android",
    marca: "Samsung",
    version: 16.1,
    propietario: "Roberto",
    tonoDeLlamada () {
      console.log("¡Rin, rin! ¡Rin, rin! 📲")
    }
  }
  console.log(telefono2.propietario);
  telefono2.tonoDeLlamada();
  
  