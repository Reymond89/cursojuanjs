// parametros y argumentos

function saludar( nombre = 'no tiene nombre', apellido = 'no tiene apellido' ) {
    console.log (`Hola ${nombre} ${apellido} sean bienvenidos`);
}
// sino se le paso el argumento lo podemos controlar asi

saludar();