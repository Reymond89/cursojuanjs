

const navBar = document.querySelector('.navegacion');

// navBar.addEventListener('click', ()=>{
//     console.log('click en la navegacion');
// })

// // al pasar por encima 
// navBar.addEventListener('mouseenter', ()=>{
//     console.log('entrando en la navegacion')
// })

// //registra al salir
// navBar.addEventListener('mouseout', ()=>{
//     console.log('saliendo de la navegacion')
// })

//igual al click
navBar.addEventListener('mousedown', ()=>{
    console.log('entrando a la nav')
})

// doble click
navBar.addEventListener('dblclick', ()=>{
    console.log('doble click')
})
// 