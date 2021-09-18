//entradas
let coordenadax1=0;
let coordenadax2=50;
let coordenaday1=0;
let coordenaday2=-70;
//proceso
let restax=coordenadax2-coordenadax1;
let restay=coordenaday2-coordenaday1;

let potenciax=Math.pow(restax,2);
let potenciay=Math.pow(restay,2);

let sumaPotencias=potenciax+potenciay;

let distancia=Math.sqrt(sumaPotencias);
//salida
//console.log(`la distancia del planeta Naboo es de: ${distancia} UA `);  
//console.log(`la distancia del planeta Naboo es de: ${Math.sqrt(sumaPotencias)} UA` );   

console.log(`la distancia del planeta Naboo es de: ${Math.sqrt(Math.pow(coordenadax2-coordenadax1,2)+Math.pow(coordenaday2-coordenaday1,2))} UA` );   
 


// FLECHA

let calcularDistancia= calcularDistancia=>calcularDistancia

console.log(calcularDistancia(`la distancia del planeta Naboo es de: ${Math.sqrt(Math.pow(coordenadax2-coordenadax1,2(0,50,0,-70))+Math.pow(coordenaday2-coordenaday1,2(0,20,0,-30)))} UA`));

