const prompt = require("prompt-sync")({ sigint: true });

//----------------------
//----EJERCICIO NRO.5---
//-----------------------
/*
abrirParacaidas()
Crea una función llamada abrirParacaidas() que recibe dos parámetros: velocidad y
altura. La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta lo
siguiente:
● La velocidad debe ser menor a 1000 km/h.
● La altura debe ser mayor o igual a 2000 m y menor a 3000 m.
*/

//----------------------
//----SOLUCION NRO.5---
//-----------------------

//Modo if

function abrirParacaidas(velocidad,altura) {
    if (velocidad < 1000 && altura >= 2000 && altura < 3000) {
        console.log('Abrir el paracaidas');
    } else {
        console.log ('Cerrar paracaidas')
    }
}

abrirParacaidas(1200, 1000);

// Ternario 
/*
function abrirParacaidas(velocidad,altura) {
    (velocidad < 1000 && altura >= 2000 && altura < 3000) ? console.log('Abrir el paracaidas') : console.log('Cerrar paracaidas');
}
abrirParacaidas(3000, 100);
*/