
localStorage.removeItem('nombre');


const mesesArray = JSON.parse (localStorage.getItem('meses'));
console.log(mesesArray);
mesesArray.push('nuevo mes');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray));

const productoJson = JSON.parse (localStorage.getItem('producto'));
console.log(productoJson)
productoJson.nombre = 'Teclado';
productoJson.precio = 300;
localStorage.setItem('producto', JSON.stringify(productoJson));

localStorage.clear();
