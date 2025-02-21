const vehiculo = {
    marca: "ford",
    modelo: "mustang masch e",
    velocidadActual: "0kmh",
    mostarVelocidad: function(){
        console.log(velocidadActual);
        }   
}

vehiculo.mostarVelocidad();


const cambiarVelocidad = vehiculo.velocidadActual ("80kmh");
console.log(cambiarVelocidad);