// const meses = ['Enero', 'Febrero', 'Marzo'];

// // meses[3] = 'April';

// // Agregar mes al final  del Arreglo
// console.log(meses.push('Abril'))
// console.log(meses.push('Mayo'))


// console.table(meses)

const carrito = [];

// definir un producto

const producto = {
    nombre: 'Monitor de 32 Pulgadas',
    precio: 300
}

const producto2 = {
    nombre: 'Celular Xiaomi 10 Pro',
    precio: 4000
}

const producto3 = {
    nombre: 'Teclado Mecanico',
    precio: 100
}
// FORMA IMPERATIVA 

// agregar producto al carrito
carrito.push(producto);
carrito.push(producto2);

// agrega el producto al inicio del array
carrito.unshift(producto3);


// mostrar el objeto agregado
console.table(carrito)
