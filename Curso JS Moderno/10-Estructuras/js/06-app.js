

const usuario = true
const puedePagar = false

// && las dos condiciones sean true

if (usuario && puedePagar){
    console.log('si puedes comprar')
}else if(!usuario && !puedePagar){
    console.log("No no puedes comprar")
}else if(!usuario){
    console.log("Inicia seccion o crea una cuenta")
}else if(!puedePagar){
    console.log('No tienes suficientes fondos')
}