// Variables
const selectMarca = document.querySelector('#marca');
const selectYear = document.querySelector('#year');
const selectMinimo = document.querySelector('#minimo');
const selectMaximo = document.querySelector('#maximo');
const selectPuertas = document.querySelector('#puertas');
const selectTransmision = document.querySelector('#transmision');
const selectColor = document.querySelector('#color');


const resultado = document.querySelector('#resultado');

const dataBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    color: '',
    transmision: '',
}

const yearActual = new Date().getFullYear();
const yearMin = yearActual - 10;


// Eventos
document.addEventListener('DOMContentLoaded', () => {

    cargarDataAutos(autos);
    cargarSelectYear();
});

selectMarca.addEventListener('change', e =>{

    dataBusqueda.marca = e.target.value;
    filtrarAutos();
});
selectYear.addEventListener('change', e =>{

    dataBusqueda.year = parseInt(e.target.value);
    filtrarAutos();
});
selectMinimo.addEventListener('change', e =>{

    dataBusqueda.minimo = parseInt(e.target.value);
    filtrarAutos();
})
selectMaximo.addEventListener('change', e =>{

    dataBusqueda.maximo = parseInt(e.target.value);
    filtrarAutos();
});
selectPuertas.addEventListener('change', e =>{

    dataBusqueda.puertas = parseInt(e.target.value);
    filtrarAutos();
});
selectTransmision.addEventListener('change', e =>{

    dataBusqueda.transmision = e.target.value;
    filtrarAutos();
})
selectColor.addEventListener('change', e =>{

    dataBusqueda.color = e.target.value;
    filtrarAutos();
})


// Funciones
function cargarDataAutos(autos){

    limpiarHTML();

    autos.forEach( auto => {

        const autoHTML = document.createElement('p');
        const {marca, modelo, year, precio, puertas, transmision, color} = auto;

        autoHTML.textContent = `${marca} ${modelo} Año: ${year} - Precio: $${precio} ${puertas} Puertas - Transmisión: ${transmision} Color: ${color}`;
        resultado.appendChild(autoHTML);
    });

}

function cargarSelectYear(){
    
    for(i = yearActual; i >= yearMin; i--){
        const dataOption = document.createElement('option');
        dataOption.textContent = i;
        dataOption.value = i;
        
        selectYear.appendChild(dataOption);
    }
}

function limpiarHTML(){

    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function noResultado(){

    limpiarHTML();
    const error = document.createElement('p');
    error.textContent = 'Sin resultados, por favor selecciona otros términos de búsqueda.';
    error.classList.add('error', 'alerta');
    resultado.appendChild(error);
}

function filtrarAutos(){
    
    const autosFiltrados = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuertas ).filter( filtrarTransmision ).filter( filtrarColor );
    
    if (autosFiltrados.length){
        cargarDataAutos(autosFiltrados);
    } else {
        noResultado();
    }
}

function filtrarMarca(auto){

    const { marca } = dataBusqueda;
    if(marca){
        return marca === auto.marca
    } else{
        return auto
    }
}
function filtrarYear(auto){

    const { year } = dataBusqueda;
    if(year){
        return year === auto.year
    } else{
        return auto
    }
}
function filtrarMinimo(auto){

    const { minimo } = dataBusqueda;
    if(minimo){
        return minimo <= auto.precio
    } else{
        return auto
    }
}
function filtrarMaximo(auto){

    const { maximo } = dataBusqueda;
    if(maximo){
        return maximo >= auto.precio
    } else{
        return auto
    }
}
function filtrarPuertas(auto){

    const { puertas } = dataBusqueda;
    if(puertas){
        return puertas === auto.puertas
    } else{
        return auto
    }
}
function filtrarTransmision(auto){

    const { transmision } = dataBusqueda;
    if(transmision){
        return transmision === auto.transmision
    } else{
        return auto
    }
}
function filtrarColor(auto){

    const { color } = dataBusqueda;
    if(color){
        return color === auto.color
    } else{
        return auto
    }
}