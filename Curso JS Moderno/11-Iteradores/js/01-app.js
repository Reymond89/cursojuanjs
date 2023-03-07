
// for( let i = 0; i < 10; i++ ){
//     console.log(`iterando en: ${i}`)
// }


// for( let i = 1; i <= 20; i++ ){
//     if(i % 2 === 0){
//         console.log(`es Par: ${i}`)
//     }else{
//         console.log(`es Impar: ${i}`)
//     }

// }

const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Televisor', precio: 200},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 100},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 1000},

]

console.log(carrito.length)

// iterar un array con un for loop
for( let i = 0; i < carrito.length; i++){
    console.log(carrito[i])
}