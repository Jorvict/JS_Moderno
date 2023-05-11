const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const objBusqueda = {
    moneda: '',
    criptomoneda: ''
}

// Crear un Promise con function expression
const obtenerCriptomonedas = criptomonedas => new Promise( resolve =>{

    resolve(criptomonedas);
});

document.addEventListener('DOMContentLoaded', () =>{

    consultarCriptomonedas();
    formulario.addEventListener('submit', submitFormulario);
    criptomonedasSelect.addEventListener('change', leerValor);
    monedaSelect.addEventListener('change', leerValor);
});

async function consultarCriptomonedas(){

    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
    
    // fetch(url)
    //     .then( respuesta => respuesta.json())
    //     .then( resultado => obtenerCriptomonedas(resultado.Data))
    //     .then( criptomonedas => selectCriptomonedas(criptomonedas))

    // En éste caso se requieren 3 awaits ya que cada uno depende del anterior
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        const criptomonedas = await obtenerCriptomonedas(resultado.Data);
        selectCriptomonedas(criptomonedas);
    } catch (error) {
        console.log(error)
    }
}

function selectCriptomonedas(criptomonedas){

    criptomonedas.forEach( cripto => {
        
        const { FullName, Name } = cripto.CoinInfo;

        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;

        criptomonedasSelect.appendChild(option);
    });
}

function leerValor(e){

    objBusqueda[e.target.name] = e.target.value;
    // console.log(objBusqueda);
}

function submitFormulario(e){

    e.preventDefault();

    // Validar
    const { moneda, criptomoneda} = objBusqueda;

    if( moneda === '' || criptomoneda === '' ){

        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }

    // Consultar la API con los resultados
    consultarAPI();

}

function mostrarAlerta(msg){

    const existeError = document.querySelector('.error');

    // Sí no existe error en pantalla, se ejecuta el código de impresión
    if(!existeError){

        const divMensaje = document.createElement('DIV');
        divMensaje.classList.add('error');
    
        // Mensaje de error
        divMensaje.textContent = msg;
    
        formulario.appendChild(divMensaje);
    
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
}

async function consultarAPI(){

    const { moneda, criptomoneda } = objBusqueda;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    mostrarSpinner();

    // fetch(url)
    //     .then( respuesta => respuesta.json())
    //     .then( cotizacion => {
    //         imprimirCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
    //     })

    // En éste caso se requieren 2 awaits ya que cada uno depende del anterior
    try {
        const respuesta = await fetch(url);
        const cotizacion = await respuesta.json();

        imprimirCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
    } catch (error) {
        console.log(error);
    }
}

function imprimirCotizacionHTML(cotizacion){

    limpiarHTML(resultado);

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;

    const precio = document.createElement('P');
    precio.classList.add('precio');
    precio.innerHTML = `El precio actual es: <span> ${PRICE} </span>`;

    const precioAlto = document.createElement('P');
    precioAlto.innerHTML = `<p>Precio más alto del día: <span>${HIGHDAY}</span>`;
    
    const precioBajo = document.createElement('P');
    precioBajo.innerHTML = `<p>Precio más bajo del día: <span>${LOWDAY}</span>`;

    const ultimasHoras = document.createElement('P');
    ultimasHoras.innerHTML = `<p>Variacion últimas 24 horas: <span>${CHANGEPCT24HOUR}%</span>`;
    
    const ultimaActualizacion = document.createElement('P');
    ultimaActualizacion.innerHTML = `<p>Última actualización: <span>${LASTUPDATE}</span>`;


    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimasHoras);
    resultado.appendChild(ultimaActualizacion);
}

function limpiarHTML(selector){

    while(selector.firstChild){

        selector.removeChild(selector.firstChild);
    }
}

function mostrarSpinner(){

    limpiarHTML(resultado);
    const spinner = document.createElement('DIV');
    spinner.classList.add('sk-cube-grid');

    spinner.innerHTML = `
        <div class="sk-cube sk-cube1"></div>
        <div class="sk-cube sk-cube2"></div>
        <div class="sk-cube sk-cube3"></div>
        <div class="sk-cube sk-cube4"></div>
        <div class="sk-cube sk-cube5"></div>
        <div class="sk-cube sk-cube6"></div>
        <div class="sk-cube sk-cube7"></div>
        <div class="sk-cube sk-cube8"></div>
        <div class="sk-cube sk-cube9"></div>
    `;

    resultado.appendChild(spinner);
}