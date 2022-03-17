const prompt = require("prompt-sync")({ sigint: true });

//----------------------
//----EJERCICIO NRO.4---
//-----------------------
/*
¿Cuál es el número secreto?
Creá una función que reciba un parámetro numérico y verifique si el mismo es el
número secreto. El número secreto deberá ser seleccionado de manera random de
entre 1 y 10 —investigá qué hace la función Math.random()—. En caso de ser correcto,
retorna un mensaje felicitando al usuario y, en caso de que no acierte, retorna un
mensaje de aliento junto con el número ingresado y el secreto.
*/

//----------------------
//----SOLUCION NRO.4---
//-----------------------

numeroMaquina = parseInt(Math.random() * (10 - 1) + 1);;
console.log (numeroMaquina);
let vidas = 3;

let numeroUsuario = parseInt(prompt('Adivina el número del 1 al 10: '));
while(numeroMaquina !== numeroUsuario && vidas>1) {
    let mensaje = 
    (numeroMaquina>numeroUsuario) ?  'El numeroMaquina es mayor' : 'El numeroMaquina es menor';

    console.log (`Te equivocaste! ${mensaje}`);
    numeroUsuario = parseInt(prompt('numero del 1 al 10 '));
    vidas--;
}

if(numeroMaquina === numeroUsuario ){
    console.log (`Felicidades adivinaste el número: ${numeroUsuario} 🎉`)
} else {
    console.log (`No te ridas sigue intentando 🙌🏼`) 
}
