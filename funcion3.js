let temperatura1=-20;
let temperatura2=50;
let temperatura3=-45;
let temperatura4=30;

let temperaturaMax;






//TRADICIONAL
function calcularTemperaturaMaxima(temperatura1,temperatura2,temperatura3,temperatura4,){
  return(Math.max(temperatura1,temperatura2,temperatura3,temperatura4,))
  
  
  }
  
  function calcularTemperaturaMinima(temperatura1,temperatura2,temperatura3,temperatura4,){
      return(Math.min(temperatura1,temperatura2,temperatura3,temperatura4,))
      
      
      }
  
      let calcularTemperaturaMaxima=calcularTemperaturaMaxima(-20,50,-45,30);
      let calcularTemperaturaMinima=calcularTemperaturaMinima(-20,50,-45,30);
  
      console.log(`el promedio de temperatura es:${(calcularTemperaturaMaxima+calcularTemperaturaMinima)/2}°C`);





    //FLECHA

    let calcularTemperaturaMaxima=temperaturaMaxima=>temperaturaMaxima
    let calcularTemperaturaMinima=temperaturaMinima=>temperaturaMinima

    console.log(`el promedio de temperatura es:${(calcularTemperaturaMaxima(-20,50,-45,30) + calcularTemperaturaMinima(-20,50,-45,30))/2}°C`);