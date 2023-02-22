// 'use strict' // uso estricto

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1km'
}

// unir dos objetos metodo .assign
const resultado = Object.assign(producto, medidas);
console.log(resultado)

// unir mediando el uso de Spread
const resultado2 = { ...producto, ...medidas };
console.log(resultado2)


// copiar el objeto
const copia1 = Object.assign({}, producto)
console.log(copia1)

producto.departamento = 'juguetes';
console.log(producto)