let sables = [5,-6.9,9,-8];
let numSables = sables.length;



//TRADICIONAL

function calcularEnergia(energia,cantidad){

  for(var i = 0; i<cantidad ; i++){

    if(energia[i] > 0){
      console.log('el sable tiene una energia '+energia[i]+'  positiva');
    }
  
    else if(energia[i] < 0){
  
      console.log('el sable tiene una energia '+energia[i]+'  negativa');
  
    }
      
  }

  return("ganaras la batalla");
}
console.log(calcularEnergia(sables,numSables));





//FLECHA

let calcularEnergia=(energia,cantidad)=>{

  for(var i = 0; i<cantidad ; i++){

    if(energia[i] > 0){
      console.log('el sable tiene una energia '+energia[i]+'  positiva');
    }
  
    else if(energia[i] < 0){
  
      console.log('el sable tiene una energia '+energia[i]+'  negativa');
  
    }
      
  }

  return("ganaras la batalla");
}
console.log(calcularEnergia(sables,numSables));








