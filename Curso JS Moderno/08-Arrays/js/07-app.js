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

const producto4 = {
    nombre: 'Celular LG',
    precio: 3000
}

// FORMA IMPERATIVA 

// agregar producto al carrito
// carrito.push(producto);
// carrito.push(producto2);

// agrega el producto al inicio del array
carrito.unshift(producto, producto2, producto3, producto4);


// mostrar el objeto agregado
console.table(carrito)

// eliminar ultimo elemento de un arreglo

// carrito.pop();
// console.table(carrito)

// eliminar el primer array shift

// carrito.shift();

// elimina una parte del array que le pasemos, el primer valor el indice, segundo la cantidad a eliminar en este caso 1 solo, despues de 1 eliminar el siguiente q le sigue
carrito.splice(2, 1)
console.table(carrito)
