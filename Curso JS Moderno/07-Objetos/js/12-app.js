
// objet literal
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

// objet constructor

function Producto2(nombre, precio){

    this.nombre = nombre,
    this.precio = precio

}

const producto3 = new Producto2('tv samsung', '9000$');
console.log(producto3);