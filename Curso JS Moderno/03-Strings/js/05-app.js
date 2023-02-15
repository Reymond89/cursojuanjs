const producto = 'Monitor 20 pulgadas';

// .replace para reemplazar pasandole el primer valor el string y el segundo valor a lo q queremos modificar
console.log(producto)
console.log(producto.replace('pulgadas','"'))
console.log(producto.replace('Monitor','Monitor Curve'))

//.slice para cortar un string 
console.log(producto.slice(0,10))
console.log(producto.slice(8)) // corta de ese lenght en adelante se posiciona despues del 8 y imprime el resto

// alternativaa slice 
console.log(producto.substring(0,10)) // lo mismo que slice
console.log(producto.substring(2,1)) // este si retorna slice no, primer numero es mayor q el segundo el lo interpreta al reves

const usuario = 'reymond';
// corta la primera letra del string
console.log(usuario.substring(0,1));
// igual a sub pero le pasa solo el 0 y obtienes el mismo resultado
console.log(usuario.charAt(0))

