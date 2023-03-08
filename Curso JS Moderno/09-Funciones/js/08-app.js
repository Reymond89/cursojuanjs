
function sumar(a, b){
    return a + b;
}
sumar();

const resultado = sumar(2, 4);
console.log(resultado)

// ejemplo avanzado

let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

// se le asignan productos al carrito y se suman al contador: total
total = agregarCarrito(300)
total = agregarCarrito(500)
total = agregarCarrito(900)

// se les calcula el iva o impuesto 
function calcularImpuesto(total){
    return total * 1.15;
}

// se retorna el impuesto
const impuestoProductos = calcularImpuesto(total)
console.log(`El total a pagar es ${impuestoProductos}`);
console.log(total)

