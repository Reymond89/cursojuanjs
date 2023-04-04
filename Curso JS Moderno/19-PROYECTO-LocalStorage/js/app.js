// variables 

const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');

let tweets = [];


// Event Listeners
eventListener();

function eventListener(){
    //cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet)

    //cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', ()=>{
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        console.log(tweets);

        crearHtml();
    });
}


//funciones

function agregarTweet(e){
    e.preventDefault();

    // text area donde el usuario escribe

    const tweet = document.querySelector('#tweet').value;
    
    // validacion

    if (tweet === '' || tweet === ' '){
        mostrarError('Un mensaje no puede ir vacio')
        return; // evita que se ejecuten mas lineas de codigo
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    //añadir al arreglo de tweets

    tweets = [...tweets, tweetObj];

    // una vez agregado vamos a crear el Html

    crearHtml();

    //reiniciar el formulario

    formulario.reset();

}


// mostrar mensaje de error

function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError)

    // elimina la alarte despues de 3 seg
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);

}

// muestra ul listado de los tweets

function crearHtml(){

    limpiarHtml();

    if (tweets.length > 0){
        tweets.forEach( tweet => {
            //agregar un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            //añadir la funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            //crear el Html
            const li = document.createElement('li');

           
            // añadir el texto
            li.innerText = tweet.tweet;

             //asignar el boton
             li.appendChild(btnEliminar);

            // insertarlo en el html

            listaTweets.appendChild(li);
        } )
    }
    sincronizarStorage();
}

// agregar los tweet actuales a localStorage

function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets))
}

//elimina un tweet
function borrarTweet(id){
    tweets = tweets.filter( tweet => tweet.id !== id );
    crearHtml();
}


// lipiar el Html 

function limpiarHtml(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}