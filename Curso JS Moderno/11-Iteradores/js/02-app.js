
// for( let i = 0; i <= 10; i++ ){
//     if(i === 5){
//         console.log('CINCO')
//         continue;
//     }
//     console.log(`Numero: ${i}`)
// }

// break frena, continue continua y omite al q estemos espeficicando en el if


const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Televisor', precio: 200},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 100, descuento: true},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 1000},

]

// for( let i = 0; i < carrito.length; i++ ){
//     if(carrito[i].nombre === 'Tablet'){
//         console.log(carrito[i])
//         break;
//     }
//     console.log(carrito[i])
// }

for( let i = 0; i < carrito.length; i++ ){
    if(carrito[i].descuento){
        console.log(`el articulo: ${carrito[i].nombre} tiene descuento`)
        continue;
    }
    console.log(carrito[i])
}