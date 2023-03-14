

const editarTitulo = document.querySelector('.contenido-hero h1');

console.log(editarTitulo.innerText) // si en el css - visibility: hidden; no lo va a encontrar 
console.log(editarTitulo.textContent) // si lo va a encontrar
console.log(editarTitulo.innerHTML) // se trae el HTML

// modificar texto
editarTitulo.textContent = 'Bienvenidos';

const cambiarImagen = document.querySelector('.card img');

// Modificar imagen
cambiarImagen.src = "img/hacer2.jpg";




