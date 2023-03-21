
// creando variables 

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListener();
function cargarEventListener(){
    //cuando agregamos un curso presionando "agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso)

    //Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso)

    //vaciar carrito 

    vaciarCarrito.addEventListener( 'click', ()=>{

        articulosCarrito = [];
        
        limpiarHTML();

    })

}

//funciones

function agregarCurso(e){
    e.preventDefault()
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado)
    
}

function eliminarCurso(e){
 
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');
        
        // elimina del arreglo articulosCarrito por el data-id

        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);
        console.log(articulosCarrito)

        carritoHTML(); // iterar sobre el carrito y mostrar su html
    }
}

// lee el contenido del Html al que le dimos click, y extrae la informacion del curso

function leerDatosCurso(curso){
    // console.log(curso)

    // crear un objeto con el contenido del curso actual

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1 
    }

    // revisa si un elemento ya existe en el carrito
    // const existe = ;
    
    if (articulosCarrito.some(curso => curso.id === infoCurso.id)){
        // actualizamos la cantidad
        const cursoActualizado = articulosCarrito.map( curso => {
            if (curso.id === infoCurso.id){
                curso.cantidad++;
                return curso; // retorna el objeto actualizado
            }else{
                return curso; // retorna los obj que no son los duplicados
            }
        } );
        

        articulosCarrito = [...cursoActualizado];
    }else{
        // agrega elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }



    // console.log(infoCurso)

    console.log(articulosCarrito)

    carritoHTML();
}

//muestra el carrito de compras en el HTML

function carritoHTML(){

    // limpiar el Html
    limpiarHTML();

    // recorre el carrito y genera el Html
    articulosCarrito.forEach((curso)=>{

        const {imagen, titulo, precio, cantidad, id} = curso

        const row = document.createElement('tr');
        row.innerHTML = `

            <td><img src= "${imagen}" width="100"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
            <a href="#" class="borrar-curso" data-id="${id}">X
             <td>

        `;

        //agregar el html del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })
}

// elimina los cursos del tbody

function limpiarHTML(){
    //forma lenta
    // contenedorCarrito.innerHTML = "";


    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}