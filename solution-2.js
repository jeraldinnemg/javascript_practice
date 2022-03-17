const prompt = require("prompt-sync")({ sigint: true });

//----------------------
//----EJERCICIO NRO.2---
//-----------------------

/* 
Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y
litrosConsumidos. A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en
cuenta las siguientes consideraciones:
● Si el vehículo es “coche”, el precio por litro es de $86.
● Si es “moto”, ha de ser $70.
● Si es “autobús”, ha de ser $55.
● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar. 
*/

//----------------------
//----SOLUCION NRO.2---
//-----------------------


function totalAPagar(vehiculo, litrosConsumidos){
let litros;
let litrosFinales;
switch (vehiculo) {
    case 'coche':
        litros = litrosConsumidos * 86;
        break;
    case 'moto':
        litros=litrosConsumidos * 70;
    case 'autobus':
        litros= litrosConsumidos * 55;
        break;
    default:
        console.log('El vehiculo no esta registrado.');
        break
}

if (litrosConsumidos>0 && litrosConsumidos <= 25) {
    litrosFinales= litros + 50;
}

else {
    litrosFinales = litros + 25;
}
console.log (`Precio final: ${litrosFinales}`);
return litrosFinales;

}
totalAPagar ('autobus', 25); 
