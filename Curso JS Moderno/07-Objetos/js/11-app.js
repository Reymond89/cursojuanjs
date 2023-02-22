
// object literal

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    mostrarInfo:function(){
        console.log(`el producto : ${this.nombre}, tiene un valor de: ${this.precio}`)
    }
}

const producto2 = {
    nombre: 'Tablet',
    precio: 8000,
    disponible: false,
    mostrarInfo:function(){
        console.log(`el producto : ${this.nombre}, tiene un valor de: ${this.precio}`)
    }
}
producto.mostrarInfo();
producto2.mostrarInfo();