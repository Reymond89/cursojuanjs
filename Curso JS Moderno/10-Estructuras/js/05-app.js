
// switch case

const metodoPago = "tarjeta";

switch(metodoPago){
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`)
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}` )
        break;
    case 'tarjeta':
        console.log(`Pagate con ${metodoPago}`)
        break;
    default:
        console.log("Metodo de pago no soportado")
        break;
}