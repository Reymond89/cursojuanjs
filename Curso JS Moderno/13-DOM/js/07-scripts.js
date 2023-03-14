
// editar Css desd Js

const editarTitulo = document.querySelector('h1');

editarTitulo.style.fontSize = "5rem"
editarTitulo.style.backgroundColor = "Red"
editarTitulo.style.textTransform = "uppercase"



const agregarClase = document.querySelector('.card');

// agregar clase nueva
agregarClase.classList.add('nueva__clase', 'segunda__clase');

//Remover clase
agregarClase.classList.remove('segunda__clase');