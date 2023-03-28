
// localStorage.removeItem('nombre');


// const mesesArray = JSON.parse (localStorage.getItem('meses'));
// console.log(mesesArray);
// mesesArray.push('nuevo mes');
// console.log(mesesArray);
// localStorage.setItem('meses', JSON.stringify(mesesArray));

// const productoJson = JSON.parse (localStorage.getItem('producto'));
// console.log(productoJson)
// productoJson.nombre = 'Teclado';
// productoJson.precio = 300;
// localStorage.setItem('producto', JSON.stringify(productoJson));

// localStorage.clear();


// prueba repaso

localStorage.removeItem('nombre');

// actulizar un mes 

// const mesesJson = localStorage.getItem('meses');
const mesesJson = JSON.parse (localStorage.getItem('meses'));
console.log(mesesJson);
mesesJson.push('nuevo mes');
console.log(mesesJson);
localStorage.setItem( 'meses' ,JSON.stringify (mesesJson));

// actulizar objeto

const productoJson = JSON.parse (localStorage.getItem('producto'));
console.log(productoJson);
productoJson.nombre = 'teclado',
productoJson.precio = 400
console.log(productoJson);
localStorage.setItem('producto', JSON.stringify (productoJson));

//limpiar todo el localStorage
localStorage.clear()

