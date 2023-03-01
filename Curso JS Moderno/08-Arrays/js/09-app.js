const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Televisor', precio: 200},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 100},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 1000},

]

for (let i=0 ; i < carrito.length; i++){
    console.table(`${carrito[i].nombre} ${carrito[i].precio}`)
}

carrito.forEach(function(producto){
    console.table(`${producto.nombre} - ${producto.precio} `)
})

