const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

// destructuring


const { nombre, precio, disponible  } = producto;
// console.log(nombre);
// console.log(precio);
// console.log(disponible);

// destrcturing array

const numeros = [10, 20, 30, 40, 50];

// const [ , , , , quinto] = numeros;
// console.log(quinto);

// imprime del tercero en adelante con el spred ...
const [primero, segundo, ...tercero ] = numeros; 
console.log(tercero)




