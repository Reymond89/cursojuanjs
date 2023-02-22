'use strict' // uso estricto

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

Object.seal(producto)

producto.disponible = false; // deja actulizar
producto.departamento = 'juguetes'; // no deja agregar
delete producto.precio;    // no deja eliminar

console.log(producto);

console.log(Object.isSealed(producto)); // true

