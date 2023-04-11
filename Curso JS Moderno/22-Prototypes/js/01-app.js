
// object literal no permite crear obj dinamicos
const cliente = {
    nombre: 'Jose',
    saldo: 500
}
console.log(cliente)


// dinamico y reutilizable
function Cliente(nombre, saldo){
    this.nombre = nombre,
    this.saldo = saldo
}
const juan = new Cliente('Juan', 600);
console.log(juan)