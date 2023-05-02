const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const paginacionDiv = document.querySelector('#paginacion');

const registrosPorPagina = 40;
let totalPaginas;
let iterador;
let paginaActual = 1;

window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
}

function validarFormulario(e){

    e.preventDefault();
    paginaActual = 1;

    const terminoBusqueda = document.querySelector('#termino').value;

    if(terminoBusqueda === ''){
        mostrarAlerta('Agrega un término de búsqueda');
        return;
    }

    buscarImagenes();
}

function mostrarAlerta(mensaje){

    const existeAlerta = document.querySelector('.bg-red-100');

    if(!existeAlerta){

        const alerta = document.createElement('P');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
    
        alerta.innerHTML = `
            <strong class = "font-bold"> ¡Error! </strong>
            <span class = "block sm:inline"> ${mensaje} </span>
    
        `;
    
        formulario.appendChild(alerta);
    
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

function buscarImagenes(){

    const termino = document.querySelector('#termino').value;
    const terminoFormateado = termino.replace(/\s/g, '+');

    const key = '35974240-0b2baa761bbb863d347ec8453';
    const url = `https://pixabay.com/api/?key=${key}&q=${terminoFormateado}&per_page=${registrosPorPagina}&page=${paginaActual}`;

    console.log(url)
    fetch(url)
        .then( respuesta => respuesta.json() )
        .then( resultado =>{

            totalPaginas = calcularPaginas(resultado.totalHits);
            imprimirImagenes(resultado.hits);
        })
}

// Generador que va a registrar la cantidad de elementos de acuerdo a las páginas
function *crearPaginador(total){
    /*
        Algo a tener en consideración es que para que el generador
        se ejecute por lo menos una vez hay que activarlo llamando
        al generador y añadiendo el método .next, esto hará que el
        generador se ejecute, se detendrá en la próxima instrucción
        YIELD y retornará el valor que se le esté pasando al yield,
        al llamar a .next nuevamente proseguirá el recorrido desde
        el yield en el que se quedó y se detendrá en el siguiente
        yield retornando su valor, en caso en la función generadora
        no cuente con ningún yield establecido entonces ejecturará
        toda la función por completo y retornará un iterador vacío.

        Nota de desarrollador: Por eso es que al usar console.log
        dentro del bucle y al no tener ningún yield ejecutaba
        todas las iteraciones solamente teniendo un .next. (Debido
        a que no había ningún yield que detuviera la ejecución)
    */

    for(let i = 1; i <= total; i++){

        yield i;
    }
}

function imprimirImagenes(imagenes){
    console.log(imagenes);

    limpiarHTML(resultado);

    // Iterar sobre el arreglo de imágenes y construir el HTML
    imagenes.forEach( imagen => {
        
        const { previewURL, likes, views, largeImageURL, webformatURL } = imagen;

        resultado.innerHTML += `
            <div class = "w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
                <div class = "bg-white">
                    <img class = "w-full" src = "${webformatURL}" />

                    <div class = "p-4">
                        <p class = "font-bold"> ${likes}<span class = "font-light"> ❤Likes </span> </p>
                        <p class = "font-bold"> ${views}<span class = "font-light"> 👁Views </span> </p>

                        <a 
                            class = "block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1"
                            href = "${largeImageURL}" target = "_blank" rel = "noopener noreferrer"
                        >
                            Ver Imagen
                        </a>

                    </div>
                </div>
            </div>
        `
    });

    // Limpiar paginador previo
    limpiarHTML(paginacionDiv);

    // Llama e imprime el generador de páginación (Toma el total de páginas)
    imprimirPaginador()
}

function imprimirPaginador(){

    iterador = crearPaginador(totalPaginas);

    while(true){

        const { value, done } = iterador.next();
        if(done) return;

        // Caso contrario, genera un botón por cada elemento en el generador
        const boton = document.createElement('A');
        boton.href = '#';
        boton.dataset.pagina = value;
        boton.textContent = value;
        boton.classList.add('siguiente', 'bg-yellow-400', 'px-4', 'py-1', 'mr-2', 'font-bold', 'mb-3', 'uppercase', 'rounded');

        boton.onclick = () =>{

            paginaActual = value
            buscarImagenes();
        }

        paginacionDiv.appendChild(boton);
    }
}

function limpiarHTML(selector){

    while(selector.firstChild){
        selector.removeChild(selector.firstChild);
    }
}

function calcularPaginas(total){
    return parseInt( Math.ceil( total / registrosPorPagina ));
}