const { Console } = require("console");
const readline = require("readline");

const salario = 3500000;
const comision = 1500000;
const porcImp = 0.05;
let valorAPagar = 0;


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//TRADICIONAL

function calcularEmpleado(){
	rl = readline.createInterface({
	    input: process.stdin,
	    output: process.stdout
	});
	rl.question('¿Cuantas licencias vendió el empleado?\n', function(numLicencias) {
	    
	    console.log(`Entendido, vendió ${numLicencias}`);
	    valorComisiones = comision * numLicencias;
	    descuentoImpuesto = valorComisiones * porcImp;
	    valorAPagar = salario + (valorComisiones - descuentoImpuesto);
	    console.log(`Por eso el valor a pagar al empleado es de: ${valorAPagar}\n\n`);
	    
	    rl.question('¿Desea ingresar otro empleado?   1=Si    0=No\n', function(otroEmpleado) {
			rl.close();
	        if (otroEmpleado == 1)
	            calcularEmpleado();
	        else
	            console.log('Adios,Muchas gracias');	               
	    });
	});
}
calcularEmpleado();




//FLECHA

let calcularEmpleado=()=>{
	rl = readline.createInterface({
	    input: process.stdin,
	    output: process.stdout
	});
	rl.question('¿Cuantas licencias vendió el empleado?\n', function(numLicencias) {
	    
	    console.log(`Entendido, vendió ${numLicencias}`);
	    valorComisiones = comision * numLicencias;
	    descuentoImpuesto = valorComisiones * porcImp;
	    valorAPagar = salario + (valorComisiones - descuentoImpuesto);
	    console.log(`Por eso el valor a pagar al empleado es de: ${valorAPagar}\n\n`);
	    
	    rl.question('¿Desea ingresar otro empleado?   1=Si    0=No\n', function(otroEmpleado) {
			rl.close();
	        if (otroEmpleado == 1)
	            calcularEmpleado();
	        else
	            console.log('Adios,Muchas gracias');	               
	    });
	});
}
calcularEmpleado();
