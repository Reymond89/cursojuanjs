
const reporductor = {
    reproducir: id => console.log(`reproduciendo cancion numero: ${id} `)
    ,
    pausar: id => console.log(`pausando la cancion numero: ${id} `)
    ,
    playlist: cancion => console.log(`reproduciendo la cancion ${cancion}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Reproduciendo la cancion ${cancion}`)
    },

    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }
    
}

reporductor.nuevaCancion = 'Aerosmith';
reporductor.obtenerCancion;



reporductor.reproducir(30);
reporductor.pausar(20);

reporductor.borrar = id => console.log(`borrando la cancion numero: ${id}`)


reporductor.borrar(20);
reporductor.playlist('Hoobastank: The Reason');