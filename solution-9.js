//Jugando Javascript

const prompt = require("prompt-sync")({ sigint: true });

//Ejercicio 1

/*let textJavascript = prompt ('Escriba javascript ');

if (textJavascript === 'javascript') {
    console.log('Lo escribiste bien 🎉');
} else {
    console.log('Lo escribiste mal 🙁');
}*/

// Ejercicio 2

/*
let numUsuario = parseInt(prompt('Ingresa un número del 1 al 10: '));

if (numUsuario <= 10) {
    console.log('Genial!!');
} else {
    console.log("Supermal");
}
*/

// Ejercicio 3

let optionUser = prompt(`
Elija una opción:
1 Libros
2 Películas
3 Juegos
`);

switch (optionUser) {
    case '1':
        console.log('Principito');
        break;
    case '2':
        console.log('Matrix');
        break;
    case '3':
        console.log('NFS');
        break;
    default:
        console.log('Opción no válida');
    break;     
}

/*
let numero =1 ;

while (numero <= 10) {
    console.log(numero);
    numero++; //numero = numero +1;
}

console.log('Fin: ' + numero);

*/