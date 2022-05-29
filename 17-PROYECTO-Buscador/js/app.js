// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year'); // Se nombró year ya que no es recomendable ponerle a las variables la letra Ñ ni acentos
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor para los resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

// Generar un objeto con la búsqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    
    // Muestra los autos al cargar
    mostrarAutos(autos);

    // Llena el Select de años
    llenarSelect();
})

// eventListener para los select de búsqueda
marca.addEventListener('change', e =>{
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
});

year.addEventListener('change', e =>{
    datosBusqueda.year = parseInt(e.target.value); // Se pasa a Int debido a que el value retornado por el select siempre sera tipo String

    filtrarAuto();
});

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;

    filtrarAuto();
});

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;

    filtrarAuto();
});

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value); // Se pasa a Int debido a que el value retornado por el select siempre sera tipo String

    filtrarAuto();
});

transmision.addEventListener('change', e =>{
    datosBusqueda.transmision = e.target.value;

    filtrarAuto();
});

color.addEventListener('change', e =>{
    datosBusqueda.color = e.target.value;

    filtrarAuto();
    // console.log(datosBusqueda)
});


// Funciones
function mostrarAutos(autos){

    limpiarHTML(); // Elimina el HTML previo

    autos.forEach( auto => {
        const autoHTML = document.createElement('p');
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puerta(s) - Transmisión ${transmision} - Precio: ${precio} - Color: ${color}
        `;

        // Insertar en el HTML
        resultado.appendChild(autoHTML);

    });
}

// Limpiar HTML
function limpiarHTML(){

    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

// Genera los años del select
function llenarSelect(){
    for(let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion) // Agrega las opciones de año al select
    }   
}


// Función que filtra en base a base a la búsqueda
// Una función de alto nivel (Higher order function) es una función que toma otra función como parámetro
/* En éste caso, se está pasando la función filtrarMarca al filter aplicado a autos, es decir, se ejecutará la función
filtrarMarca cada vez que el .filter itere sibre el array autos, por ende la función filtrarMarca recibirá como argumento
el objeto iterado por el .filter*/
function filtrarAuto(){
    const resultado = autos.filter( (filtrarMarca) ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo).filter( filtrarPuertas ).filter( filtrarTransmision ).filter ( filtrarColor );

    // console.log(resultado)

    if(resultado.length) {

        mostrarAutos(resultado); // Sí hay data de autos en el array resultado, entondes los imprime en el html
    }
    else{
        noResultado(); // Sí el array resultado está vacío, se ejecutará esta función
    }
}

function noResultado(){
    
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados, intenta con otros términos de búsqueda';
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto){

    // Se está validando que la key del objeto no esté vacía ántes de ejecutar el filtrado, para que de esta forma no se presente un error al intentar filtrar 
    // con otro select y éste se encuentre vacío
    if(datosBusqueda.marca){ 

        // Almacenaremos en array resultado aquellos autos de la db.js que tienen la misma marca almacenada en el objeto y key
        // datosBusqueda.marca (el cual fue almacenado al cambiar de option en el select)
        return auto.marca === datosBusqueda.marca;
    }

    return auto; // Si el usuario no ha seleccionado ningún option de marca, va a retornar el array autos completo
}

// Al haberse aplicado un filter previo con filtrarMarca debido al chaining, los valores que se pasan a filtrarYear van a ser los valored iterados previamente
// por filtrarMarca
function filtrarYear(auto){
    
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year;
    }
    return auto;
}

function filtrarMinimo(auto){

    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo; // Debido a que no es operador estricto, no es necesario pasar a entero (Int) el valor de datosBusqueda.minimo
    }
    return auto;
}

function filtrarMaximo(auto){

    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo;
    }
    return auto
}

function filtrarPuertas(auto){

    if(datosBusqueda.puertas){

        return auto.puertas === datosBusqueda.puertas;
    }
    return auto;
}

function filtrarTransmision(auto){

    if(datosBusqueda.transmision){

        return auto.transmision === datosBusqueda.transmision;
    }
    return auto;
}

function filtrarColor(auto){

    if(datosBusqueda.color){

        return auto.color === datosBusqueda.color;
    }
    return color;
}