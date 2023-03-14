
// eliminar enlace

// const primerEnlace = document.querySelector('a')
// console.log(primerEnlace.remove())

// eliminar desde el padre

const navegacion = document.querySelector('.navegacion')
console.log(navegacion.children)

// remoce child y especificar el hijo q desees eliminar
navegacion.removeChild(navegacion.children[2])

const autenticado = true;

const primerEnlace = document.querySelector('a');

const ocultar = (()=>{
    // if (autenticado){
    //     console.log(primerEnlace)
    // }else{
    //     console.log(primerEnlace.remove());
        
    // }

   console.log (autenticado ? primerEnlace : primerEnlace.style.display = "none" ) 
})
ocultar();













