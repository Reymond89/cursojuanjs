
const pendientes = [ 'Tarea', 'Comer', 'Proyecto', 'Estudiar Js' ];

const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Televisor', precio: 200},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 100, descuento: true},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 1000},

]

for ( pendiente of pendientes){
    console.log(pendiente)
}

for( producto of carrito ){
    console.log(producto)
}