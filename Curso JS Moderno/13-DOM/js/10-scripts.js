
// crear elementos HTML
const enlace = document.createElement('a');

//agregar nombre al ancla
enlace.textContent = 'Nueva Enlace'

// agregar el href
enlace.href = '#';
console.log(enlace)

// para q no mostrar informacion y proteger
enlace.target = '_black';

//crearle otra clase
enlace.classList.add('clase__nueva');

//funcion
enlace.onclick = miFuncion;

function miFuncion() {
    alert('Diste click')
}

// agregar el ancla en la posicion que queramos usando children 
const navegacion = document.querySelector('.navegacion')

// insertar el enlace, el segundo parametro es el lugar donde lo vayamos a posicionar
navegacion.insertBefore(enlace, navegacion.children[1])

//crear un card

const parrafo = document.createElement('p');
parrafo.textContent = 'Concierto';
parrafo.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock al Rio';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

//crear div con la clase info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

console.log(info)

// crear imagen

const imagenes = document.createElement('img');
imagenes.src = 'img/hacer2.jpg';
imagenes.alt = 'personas';
console.log(imagenes)

//crear card

const card = document.createElement('div');
card.classList.add('card');

// asignar la imagen
card.appendChild(imagenes);

//asignar info
card.appendChild(info);

// insertar en el HTML

const contenedor = document.querySelector('.hacer .contenedor-cards');

//insertarlo al final
// contenedor.appendChild(card)

//insertarlo al inicio
contenedor.firstChild(card)


