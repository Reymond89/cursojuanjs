'use strict' // uso estricto

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

Object.freeze(producto)

// producto.disponible = false; no deja modificar el objeto

console.log(producto)

// indica si el objeto esta congelado
console.log(Object.isFrozen(producto))