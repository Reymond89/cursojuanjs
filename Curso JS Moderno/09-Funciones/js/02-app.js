
// Declaracion de funcion { funcion Declaration }

sumar() // si imprime 
function sumar () {
    console.log( 2 + 2 );
}


// expresion de Funcion { Fuction Expression }

sumar2(); //Cannot access 'sumar2' before initialization
const sumar2 = function() {
    console.log( 3 + 3 );
}