
const reporductor = {
    reproducir: function(id){
        console.log(`reproduciendo cancion numero: ${id} `)
    },
    pausar: function(id){
        console.log(`pausando la cancion numero: ${id} `)
    },
    playlist: function(cancion){
        console.log(`reproduciendo la cancion ${cancion}`)
    }
}

reporductor.reproducir(30);
reporductor.pausar(20);

reporductor.borrar = function(id){
    console.log(`borrando la cancion numero: ${id}`)
}

reporductor.borrar(20);
reporductor.playlist('Hoobastank: The Reason');