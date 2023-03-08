const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach((mes)=>{
    if (mes === 'Febrero'){
        console.log(`Febrero si existe`);
    }
   
})

// funciona solo para arrays
const encontrarMes = meses.includes('Abril'); // retorna true o false
console.log(encontrarMes);


// en un arreglo de objetos se utiliza .some
const existe = carrito.some((producto)=>{
    return producto.nombre === 'Teclado';
})

console.log(existe)

// some tambien funciona con array retorna true o false
const existe2 = meses.some(mes => mes === 'Marzo' )
console.log(existe2)