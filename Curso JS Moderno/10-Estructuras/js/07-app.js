
const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

if (efectivo > credito || disponible > totalPagar || credito > totalPagar){
    console.log("Puedes comprar")
}else{
    console.log("No puedes comprar")
}