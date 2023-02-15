const producto = 'Monitor de 20 pulgadas';

// if (producto.length > 10){  // validacion si tiene mas de 10 letras mostrar error
//     console.error('No puedes ingresar mas de 10 letras')
// }

// metodos de los string, cantidad de letras en cadena de texto
console.log(producto.length);

// me muestra la posicion del index de la palabra buscada en este caso index 14.
console.log(producto.indexOf('pulgadas'));

// buscar palabra dentro y arrojar un true o false tiene key sensitive mayus, min ojo
console.log(producto.includes('pulgadas'));
console.log(producto.includes('tablet'));
console.log(producto.includes('Monitor'));




