
// como se comunican las funciones

inciandoApp()
function inciandoApp(){
    console.log('inciando la aplicacion');
    segundaFuncion()
}

function segundaFuncion(){
    console.log('Iniciando desde la segunda funcion')
    autenticarUsuario('Reymond')
}

function autenticarUsuario(usuario){
    console.log('Autenticando Usuario por favor espere!!')
    console.log(`Usuario ${usuario} registgardo exitosamente!!`)
}