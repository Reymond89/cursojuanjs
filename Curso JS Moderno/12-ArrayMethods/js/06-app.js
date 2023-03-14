const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 100 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


// se deben de cumplir todos 
const resultado = carrito.every( producto => producto.precio < 1000 )
console.log(resultado)

//que al menos uno cumpla la condicion
const resultado2 = carrito.some( producto => producto.precio < 500)
console.log(resultado2)