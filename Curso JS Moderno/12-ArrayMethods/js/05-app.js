const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 100 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Foreach
let resultado2 = '';

carrito.forEach((producto, index)=>{
    if(producto.nombre === 'Tablet'){
        resultado2 = carrito[index]
    }
})
console.log(resultado2)




// retorna el primero q consigue
const resultado = carrito.find( producto => producto.precio === 100)
console.log(resultado)

// filtra el primero que coincida
const encontrarProducto = carrito.find( producto => producto.nombre === 'Teclado');
console.log(encontrarProducto)