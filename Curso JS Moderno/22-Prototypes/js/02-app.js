function Cliente(nombre, saldo){
    this.nombre = nombre,
    this.saldo = saldo
}
const juan = new Cliente('Juan', 600);

function formatearCliente(cliente){
    const { nombre, saldo } = cliente;

    return `El cliente ${nombre}, tiene un saldo de: ${saldo}`;
}

console.log(formatearCliente(juan));

function Empresa(nombre, saldo, categoria){
    this.nombre = nombre,
    this.saldo = saldo,
    this.categoria = categoria
}

const Logitech = new Empresa ('Logitech', 4000, 'Gaming');
console.log(Logitech)

function formatearEmpresa(Empresa){
    const {nombre, saldo, categoria} = Empresa;

    return `La empresa ${nombre}, tiene una saldo de: ${saldo}, esta dedicada a la venta de productos: ${categoria}`
}

console.log(formatearEmpresa(Logitech));
