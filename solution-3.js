const prompt = require("prompt-sync")({ sigint: true });

//----------------------
//----EJERCICIO NRO.3---
//-----------------------
/*
Local de sándwiches
Necesitamos armar el sistema para un local de venta de sándwiches. Los clientes
eligen el sándwich base que tiene un precio y, por cada selección siguiente, se le suma
el valor de su selección al precio. Por ejemplo, partiendo de un sándwich base
vegetariano con un precio x, después se selecciona pan negro con un precio y, por lo
que el total a pagar sería x+y, y así sucesivamente con el resto de los ingredientes.
Como es un local que ya tenía un sistema previo, ellos ya tienen toda la interfaz
donde el usuario elige cada ingrediente, lo que nos facilita el trabajo, ya que nosotros
recibiremos los datos de la siguiente manera.
Nos llega un string indicando el tipo de sándwich base. Estos tienen un valor base
diferente por cada selección:
● Pollo = $150 (“pollo”)
● Carne = $200 (“carne”)
● Vegetariano (verduras asadas) = $100 (“veggie”)
Luego, el sistema pregunta al cliente qué tipo de pan quiere. Tienen para elegir entre
otras tres opciones, por lo que recibiremos también otro string con el tipo de pan
deseado:
● Blanco c/orégano y parmesano = $50 (“blanco”)
● Negro c/avena = $60 (“negro”)
● Sin gluten = $75 (“s/gluten”)
Para finalizar, el sistema avanza preguntando al cliente si quiere los siguientes
adicionales:
● Queso = $20
● Tomate = $15
● Lechuga = $10
● Cebolla = $15
● Mayonesa = $5
● Mostaza = $5
Cada uno de estos adicionales están representados por booleanos —es decir, true o
false—, dependiendo de si aceptan o no cada uno de los adicionales —nos llegan un
total de seis valores booleanos, uno por cada adicional—.
Nuestro trabajo es crear una función que reciba estos ocho parámetros —un string
para el sándwich base, uno para el pan y los seis booleanos de los adicionales—. La
función deberá consultar primero qué tipo de sándwich base se seleccionó, luego el
tipo de pan, y por último deberá verificar qué adicionales se seleccionaron.
Finalmente, deberá retornar el valor numérico del total a pagar del cliente.
*/

//----------------------
//----SOLUCION NRO.3---
//-----------------------

tipoDeBase = prompt('Ingresa el tipo de base de pan que deseas:');

tipoDePan = prompt('Ingresa el tipo de pan que deseas: ');


function precioSandwich (
    tipoSandwich,
    tipoPan,
    queso,
    tomate,
    lechuga,
    cebolla,
    mayonesa,
    mostaza) {
        let precioTotal;
        if (tipoSandwich=='pollo'){
            precioTotal =150;
        } else if (tipoSandwich== 'carne') {
            precioTotal =200;
        } else if (tipoSandwich == 'vegetariano') {
            precioTotal =100;
        } else {
            console.log('No tenemos ese tipo de pan');
        }
        if(tipoPan == 'blanco') {
            precioTotal = precioTotal + 50;
        } else if (tipoPan == 'negro') {
            precioTotal = 60;
        } else if (tipoPan == 's/gluten') {
            precioTotal = precioTotal + 75;
        }
        if (queso == true) {
            precioTotal = precioTotal +20
        } else if (tomate ==true) {
            precioTotal = precioTotal + 15;
        } else if (lechuga ==true){
            precioTotal = precioTotal + 10;
        } else if (cebolla ==true) {
            precioTotal = precioTotal +15;blanco
        } else if (mayonesa==true) {
            precioTotal= precioTotal + 5;
        } else if (mostaza==true) {
            precioTotal = precioTotal + 5;
        } else {
            console.log ('Ingrese un adicional válido');
        }
        console.log(`El total a abonar es: ${precioTotal}`);
        return precioTotal;
}

precioSandwich('carne', 'negro', true, false, true, false, true, false);
