const prompt = require("prompt-sync")({ sigint: true });

//----------------------
//----EJERCICIO NRO.7---
//-----------------------
/*
Valoración de películas
Usando la estructura switch, pedirle al usuario que valore la película que acaba de ver
según la siguiente escala:
● Muy mala.
● Mala.
● Mediocre.
● Buena.
● Muy buena.
Acompaña cada valoración con un mensaje que indique si te lamentás o te alegrás
por su valoración.
Por ejemplo: "Calificaste la película como Muy Mala. Lo lamentamos mucho.".
En caso de que ingresara un valor distinto, mostrarle el mensaje: "Ingresaste un valor
inválido".
Cuando el usuario haya valorado la película, agradecerle su visita.

*/

//----------------------
//----SOLUCION NRO.7---
//-----------------------

let puntuacion = prompt(`Introduce la puntuación:
1. Muy mala
2. Mala
3. Mediocre
4. Buena
5. Muy buena:`);

switch(puntuacion){
    case '1':
        console.log('Calificaste la película como Muy Mala. Lo lamentamos mucho 👎🏼')
        break;
    case '2':
        console.log('Calificaste la película como Mala. Tendremos que mejorar 🙌🏼')
        break;
    case '3':
        console.log('Calificaste la película como Mediocre. Tomaremos tus sugerencias en cuenta 👌🏼')
        break;
    case '4':
        console.log('Calificaste la película como Buena. Nos alegra que la disfrutaras🤞🏼')
        break;
    case '5':
        console.log('Calificaste la película como Muy Buena. Nos sentimos orgullosos 👏🏼')
        break;
    default:
        console.log('Ingresaste un valor inválido');
        break;
};