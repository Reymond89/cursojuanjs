function Cliente(nombre, saldo){
    this.nombre = nombre,
    this.saldo = saldo
}
// Cliente.prototype.tipoCliente = function(){
//     console.log('Desde mi nuevo proto!!!')
// }

Cliente.prototype.tipoCliente = function () {
    let tipo;

    if (this.saldo > 10000){
        tipo = 'Miembro Platinum';
    }else if(this.saldo > 5000 ){
        tipo = 'Miembro Gold';
    }else{
        tipo = 'Miembro Normal';
    }
    return tipo;
}

Cliente.prototype.nombreClientesaldo = function(){
    return `El nombre del cliente es: ${this.nombre}, su saldo es: ${this.saldo}, y es un ${this.tipoCliente()}`
}

Cliente.prototype.retirarSaldo = function(retirar){
    this.saldo -= retirar;
}
// instanciarlo 

const pedro = new Cliente('Rey', 10000);
console.log(pedro.tipoCliente());
console.log(pedro.nombreClientesaldo());
console.log(pedro.retirarSaldo(2000))
console.log(pedro.nombreClientesaldo());

console.log(pedro)