
//Queryselector selecciona el primero que encuentre solo 1 y ignora los demas

const card = document.querySelector('.card');
console.log(card)

// podemos tener selectores especificos como en css

const info = document.querySelector('.premium .info');
console.log(info)

// seleccionar el segundo card de hospedaje

const seundoCard = document.querySelector('.hospedaje .card:nth-child(2)')
console.log(seundoCard);

// seleccionar formulario

const formulario = document.querySelector('#formulario')
console.log(formulario)

//seleccionar elementos HTML

const navegacion = document.querySelector('.navegacion');
console.log(navegacion)