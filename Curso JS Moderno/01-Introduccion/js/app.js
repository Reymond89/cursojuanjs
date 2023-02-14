const nombre = prompt('¿Cual es tu nombre?')

let perfil = document.querySelector('.contenido').innerHTML = `${nombre} esta aprendiendo JavaScript Moderno`
console.log(perfil)