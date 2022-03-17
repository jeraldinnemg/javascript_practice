const prompt = require("prompt-sync")({ sigint: true });

//----------------------
//----EJERCICIO NRO.6---
//-----------------------
/*
Traductor condicional
Usando la estructura switch, crea un programa en el que si un usuario ingresa "casa",
"perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma
inglés.
En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le
informe que la palabra ingresada es incorrecta.
*/


//----------------------
//----SOLUCION NRO.6---
//-----------------------


let palabra = prompt(`Elige la palabras que deseas traducir:
1.casa
2.perro
3.pelota
4.árbol
5.genio: 
 `);

switch(palabra){
    case '1':
        console.log('home');
        break;
    case '2':
        console.log('dog');
        break;
    case '3':
        console.log('ball');
        break;
    case '4':
        console.log('tree');
        break;
    case '5':
        console.log('genius');
        break;
    default:
        console.log('Introduce la opción correcta');
        break;
}
