
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

// const nombre = producto.nombre
// console.log(nombre)



// destructuring

// const {nombre} = producto;
// console.log(nombre);

// const { precio } = producto;
// console.log(precio)

// const { disponible } = producto;

const { nombre, precio, disponible  } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);
