
const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

// Event Bubbling = click en secciones especificas y no selecciona todas
cardDiv.addEventListener('click', (e)=>{
    e.stopPropagation()
    console.log('click en la card')
})

infoDiv.addEventListener('click', (e)=>{
    e.stopPropagation()
    console.log('click en la info')
})

titulo.addEventListener('click', (e)=>{
    e.stopPropagation()
    console.log('click en el titulo')
})




