//presiono una tecla
const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('keydown',()=>{
    console.log('escribiendo');
})


// suelto tecla
const busqueda2 = document.querySelector('.busqueda');

busqueda2.addEventListener('keyup',()=>{
    console.log('escribiendo 222');
})

//presiono fuerda del formulario
const busqueda3 = document.querySelector('.busqueda');

busqueda3.addEventListener('blur',()=>{
    console.log('escribiendo 3333');
})

// copiando 
const busqueda4 = document.querySelector('.busqueda');

busqueda3.addEventListener('copy',()=>{
    console.log('escribiendo copy');
})

// pegando texto

const busqueda6 = document.querySelector('.busqueda');

busqueda6.addEventListener('paste',()=>{
    console.log('escribiendo paste');
})

// cortando texto

const busqueda7 = document.querySelector('.busqueda');

busqueda7.addEventListener('cut',()=>{
    console.log('escribiendo cut');
})

// input igual los demas menos el blur // "e" de evento

const busqueda8 = document.querySelector('.busqueda');
// valida sino se envia nada en el formulario
busqueda8.addEventListener('input',(e)=>{
    if(e.target.value === ""){
        console.log('fallo la validacion')
    }
    
})
