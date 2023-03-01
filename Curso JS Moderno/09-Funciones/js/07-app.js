
// como se comunican las funciones
inicianApp()
function inicianApp(){
    console.log('Iniciando app')
    segundaFuncion()
}

function segundaFuncion (){
    console.log('Desde la segunda funcion')
    usuarioAutenticado('reymond')
}

function usuarioAutenticado (usuario){
    console.log('Autenticando usuario, espere!!!')
    console.log(`usuario autenticado exitosamente: ${usuario}`)
}