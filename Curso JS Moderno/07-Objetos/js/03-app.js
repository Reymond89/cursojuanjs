
const userAuthenticated = false;


const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    imagen: 'image.jpg',
}

// producto.imagen = 'imagen.jpg';

// delete producto.precio;

// if (userAuthenticated){
//     console.log(producto)
// }else{
//     console.log(delete producto.precio);
//     console.log(producto)
// }

userAuthenticated ? console.log(producto):(console.log(delete producto.precio),console.log(producto));

// console.log(producto)
