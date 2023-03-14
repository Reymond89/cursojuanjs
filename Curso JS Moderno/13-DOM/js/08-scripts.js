
const navegacion = document.querySelector('nav')

console.log(navegacion.firstElementChild) // selecciona el primero
console.log(navegacion.lastElementChild) // selecciona el ultimo

// console.log(navegacion.childNodes) // toma en cuenta los espacion en blanco
// console.log(navegacion.children) // tomo en cuenta solo los elementos "a"

// console.log(navegacion.children[1].nodeName)
// console.log(navegacion.children[1].nodeType)


const modificarCard = document.querySelector('.card');

// ir recorriendo los nodos hasta llegar al titulo
console.log(modificarCard.children[1].children[1].textContent)

modificarCard.children[1].children[1].textContent = 'Editando titulo de card'

console.log(modificarCard.children[0])

// navegando por los nodos, modifica la imagen
modificarCard.children[0].src = "img/hacer2.jpg";


// traversing del hijo al padre, va subiendo a las etiquetas padre

// console.log(modificarCard.parentElement.parentElement)

console.log(modificarCard.nextElementSibling)

// ultimo card

const ultimoCard = document.querySelector('.card:nth-child(4)')

// selecciona el ante-penultimo card 
console.log(ultimoCard.previousElementSibling)