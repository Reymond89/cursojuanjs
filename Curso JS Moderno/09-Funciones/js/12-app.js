const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Televisor', precio: 200},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 100},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 1000},

]

// no retorna nada

const resultado =  carrito.forEach(producto => console.log(`${producto.nombre} - ${producto.precio} `));

//map retorna nuevo arreglo

const resultado2 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);

console.log(resultado)
console.log(resultado2)
