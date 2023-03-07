const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// meses.forEach((mes, index)=>{
//     if(mes === 'Abril'){
//         console.log(`Mes encontrado en el indice: ${index}`)
//     }
// })

const indice = meses.findIndex( mes => mes === 'Febrero');
console.log(indice)

// buscar indice de array
const indice2 = meses.findIndex( mes => mes === 'Mayo');
console.log(indice2)

// buscar indice de objeto
const productoIndice = carrito.findIndex( producto => producto.nombre === 'Teclado');
console.log(productoIndice)