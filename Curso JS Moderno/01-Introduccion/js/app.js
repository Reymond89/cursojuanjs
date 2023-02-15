// pregunta el nombre del usuario
const nombre = prompt('¿Cual es tu nombre?')


// toma el nombre y lo muestra en pantalla
let perfil = document.querySelector('.contenido').innerHTML = `${nombre} esta aprendiendo JavaScript Moderno`
console.log(perfil)
