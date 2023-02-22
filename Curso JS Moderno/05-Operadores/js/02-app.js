const numero1 = 20;
const numero2 = '20';
const numero3 = 30;

// revisar si dos numeros son iguales ==

console.log(numero1 == numero3); // false
console.log(numero1 == numero2) // true/ fija en el valor

// comparador extricto valor y tipo de dato

console.log(numero1 === numero2); // false numero y string 

console.log(numero1 === parseInt(numero2)); // convertir a int o entero

// diferente

const password1 = 'admin';
const password2 = 'Admin';

console.log(password1 != password2);

console.log(numero1 != numero2);

// estrictamente diferente
console.log(numero1 !== numero2); // true son diferente

console.log(numero1 !== parseInt(numero2)); // lo convierto en int y ahora son iguales entonces es false







