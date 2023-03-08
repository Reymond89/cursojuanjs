

const dinero = 100;
const totalApagar = 300;
const cheque = false;
const tarjeta = false;

if (dinero >= totalApagar){
    console.log("Si puedes pagar")
}else if(cheque){
    console.log("Si tengo cheque")
}else if(tarjeta){
    console.log('si tengo tarjeta')
}else{
    console.log("Fondos insuficientes")
}
