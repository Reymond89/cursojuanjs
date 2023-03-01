
const carrito = [];

// definir un producto

const producto = {
    nombre: 'Monitor de 32 Pulgadas',
    precio: 300
}

const producto2 = {
    nombre: 'Celular Xiaomi 10 Pro',
    precio: 4000
}

const producto3 = {
    nombre: 'Teclado Mecanico',
    precio: 100
}

// FORMA DECLARATIVA PROGRAMACION FUNCIONAL

let resultado = [...carrito, producto];
console.table(resultado)

resultado = [...resultado, producto2];
console.log(resultado)

resultado = [producto3, ...resultado]
console.table(resultado)

// mostrar el objeto agregado
// console.table(carrito)s
