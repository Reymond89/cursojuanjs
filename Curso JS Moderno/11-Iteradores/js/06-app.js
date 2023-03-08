
// ForEach

const pendientes = [ 'Tarea', 'Comer', 'Proyecto', 'Estudiar Js' ];


// pendientes.forEach((pendiente, index) =>{
//     console.log(`${index} : ${pendiente}`)
// })

const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Televisor', precio: 200},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 100, descuento: true},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 1000},

]

// carrito.forEach((producto, index)=>{
//     console.log(`${index} : ${producto.nombre} : ${producto.precio}`)
// })

// el forEach no retorna 
const nuevoArreglo = carrito.forEach(producto => producto.nombre );

// el map retorno nuevo array
// const nuevoArreglo2 = carrito.map(producto => producto.nombre)

carrito.map((producto, index)=>{
    console.log(`${index} ${producto.nombre} : ${producto.precio}`)
})

console.log(nuevoArreglo)
// console.log(nuevoArreglo2)



