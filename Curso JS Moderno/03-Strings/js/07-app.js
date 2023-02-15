const producto = 'Monitor 20 pulgadas';
// convierte todo a mayuscula
console.log(producto.toLocaleUpperCase());
// convierte todo el texto a minuscula
console.log(producto.toLocaleLowerCase());


const texto = 'Estoy Aprendiendo javascript';
console.log(texto.toLocaleUpperCase())

console.log('---------------------------------------')

const registroEmail = 'REYMOND1909@GMIAL.COM';
// pasar el correo de mayuscula a minuscula
if (registroEmail == registroEmail.toLocaleUpperCase()){
    console.log(registroEmail.toLocaleLowerCase())
}

// pasar de numero a string
const precioTicket = 300;
console.log(precioTicket)
console.log(precioTicket.toString())
