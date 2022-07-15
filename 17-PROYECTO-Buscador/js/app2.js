// Variables
const selectMarca = document.querySelector('#marca');
const selectYear = document.querySelector('#year');
const selectMin = document.querySelector('#minimo');
const selectMax = document.querySelector('#maximo');
const selectPuertas = document.querySelector('#puertas');
const selectTransmision = document.querySelector('#transmision');
const selectColor = document.querySelector('#color');

const listaAutos = document.querySelector('#resultado');
const autoFiltrado = {
    marca : '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}


// Event listeners
document.addEventListener('DOMContentLoaded', mostrarAutos(autos));
document.addEventListener('DOMContentLoaded', cargarSelectFecha);

selectMarca.addEventListener('change', e =>{
    autoFiltrado.marca = `${e.target.value}`;

    filtrarAuto();
});
selectYear.addEventListener('change', e =>{
    autoFiltrado.year = parseInt(`${e.target.value}`);

    filtrarAuto();
});
selectMin.addEventListener('change', e =>{
    autoFiltrado.minimo = parseInt(`${e.target.value}`);

    filtrarAuto();
});
selectMax.addEventListener('change', e =>{
    autoFiltrado.maximo = parseInt(`${e.target.value}`);

    filtrarAuto();
});
selectPuertas.addEventListener('change', e =>{
    autoFiltrado.puertas = parseInt(`${e.target.value}`);

    filtrarAuto();
});
selectTransmision.addEventListener('change', e =>{
    autoFiltrado.transmision = `${e.target.value}`;

    filtrarAuto();
});
selectColor.addEventListener('change', e =>{
    autoFiltrado.color = `${e.target.value}`;

    filtrarAuto();
})


// Funciones
function limpiarListaAutos(){

    while(listaAutos.firstElementChild){
        listaAutos.removeChild(listaAutos.firstChild);
    }
}

function cargarSelectFecha(){

    const fechaActual = new Date().getFullYear();
    const fechaMinima = fechaActual - 10;

    for(let i = fechaActual; i >= fechaMinima; i--){
        opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;

        selectYear.appendChild(opcion);
    }
}

function mostrarAutos(autos){

    limpiarListaAutos();

    if(autos.length > 0){
        autos.forEach( auto => {
            const {marca, modelo, year, precio, puertas, transmision, color} = auto
    
            itemAuto = document.createElement('p');
            itemAuto.textContent = `${marca} ${modelo} - Año ${year} - Precio: $${precio} - ${puertas} Puerta(s) - Transmision: ${transmision} - Color: ${color}`;
            
            listaAutos.appendChild(itemAuto);
        });
    }
    else{
        noResultado();
    }
}

function noResultado(){
    const noResultado = document.createElement('p');
    noResultado.classList.add('error', 'alerta');
    noResultado.textContent = 'No hay resultados, intenta filtrar con otros términos'

    listaAutos.appendChild(noResultado);
}

function filtrarAuto(){

    resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    mostrarAutos(resultado)
}
function filtrarMarca(auto){

    if(autoFiltrado.marca){

        return auto.marca === autoFiltrado.marca;
    }
    return auto
}
function filtrarYear(auto){

    if(autoFiltrado.year){

        return auto.year === autoFiltrado.year;
    }
    return auto;
}
function filtrarMinimo(auto){

    if(autoFiltrado.minimo){

        return auto.precio >= autoFiltrado.minimo;
    }
    return auto;
}
function filtrarMaximo(auto){

    if(autoFiltrado.maximo){

        return auto.precio <= autoFiltrado.maximo;
    }
    return auto;
}
function filtrarPuertas(auto){

    if(autoFiltrado.puertas){

        return auto.puertas === autoFiltrado.puertas;
    }
    return auto;
}
function filtrarTransmision(auto){

    if(autoFiltrado.transmision){

        return auto.transmision === autoFiltrado.transmision;
    }
    return auto;
}
function filtrarColor(auto){

    if(autoFiltrado.color){

        return auto.color === autoFiltrado.color;
    }
    return auto;
}