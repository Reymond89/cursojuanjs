
// scrool en eje Y indica cuantos pixeles baja o sube
// window.addEventListener('scroll', ()=>{
//     const scrollpx = window.scrollY;
//     console.log(scrollpx)
// })


// saber ubicacion de seccion
window.addEventListener('scroll', ()=>{

    const premium = document.querySelector('.premium');
    
//getBoundingClientRect detectar elemento
    const ubicacion = premium.getBoundingClientRect();
    // console.log(ubicacion)

    // el top este a 110 la seccion ya esta visible
    if (ubicacion.top < 110){
        console.log('seccion ya esta visible')
    }else{
        console.log('Aun no, da mas scroll')
    }
})
  
