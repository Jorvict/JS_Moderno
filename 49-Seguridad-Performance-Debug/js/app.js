const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const objBusqueda = {
    moneda: '',
    criptomoneda: ''
};

// Promises
const obtenerCriptomonedas = criptomonedas => new Promise( resolve => {
    resolve(criptomonedas);
});


document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();

    formulario.addEventListener('submit', submitFormulario);
    criptomonedasSelect.addEventListener('change', leerValor);
    monedaSelect.addEventListener('change', leerValor);
});

// Consulta la API par aobtener un listado de Criptomonedas
function consultarCriptomonedas() {

    // Ir  AtoPLISTS Y Despues market capp 
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    fetch(url)
        .then( respuesta => respuesta.json()) // Consulta exitosa...
        .then( resultado => obtenerCriptomonedas(resultado.Data)) // 
        .then( criptomonedas  =>  selectCriptomonedas(criptomonedas) )
        .catch( error => console.log(error));
}
// llena el select 
function selectCriptomonedas(criptomonedas) {

    // Conocer el tiempo de ejecución
    /**
     * La función performance.now es un contador de tiempo de alta
     * precisión que comienza a contabilizar desde el momento en el que
     * la página comenzó a cargarse, este contador de tiempo retorna
     * milisegundos para una mayor precisión, la forma en la que
     * se utiliza es ejecutar la función y almacenar el valor retornado
     * en una variable de inicio, ejecutar el bloque de código a verificar
     * y ejecutar nuevamente la función de performance.now() y almacenarlo
     * ahora en una variable de fin, para luego restar ambas variables
     * y así obtener el tiempo transcurrido durante la ejecución del bloque
     * de código.
     * 
     * Para validar el tiempo que tarda en ejecutar la consulta a una API
     * se puede verificar también desde la pestaña "network" en el debugger 
     * del navegador
     */
    const startTime = performance.now();

    // criptomonedas.forEach( cripto => {
    //     const { FullName, Name } = cripto.CoinInfo;
    //     const option = document.createElement('option');
    //     option.value = Name;
    //     option.textContent = FullName;
    //     // insertar el HTML
    //     criptomonedasSelect.appendChild(option);
    // });

    // Usualmente los for son más rápidos que los forEach
    for(let i = 0; i < criptomonedas.length; i++){

        const { FullName, Name } = criptomonedas[i].CoinInfo;
        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;
        // insertar el HTML
        criptomonedasSelect.appendChild(option);

    }

    const endTime = performance.now();

    console.log(`El Select de Criptomonedas se ejecutó en ${endTime - startTime}ms)`);
}


function leerValor(e)  {
    objBusqueda[e.target.name] = e.target.value;
}

function submitFormulario(e) {
    e.preventDefault();

    // Extraer los valores
    const { moneda, criptomoneda} = objBusqueda;

    if(moneda === '' || criptomoneda === '') {
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }


    consultarAPI();
}


function mostrarAlerta(mensaje) {
        // Crea el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error');
        
        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar en el DOM
       formulario.appendChild(divMensaje);

        // Quitar el alert despues de 3 segundos
        setTimeout( () => {
            divMensaje.remove();
        }, 3000);
}


function consultarAPI() {

    const startTime = performance.now();

    const { moneda, criptomoneda} = objBusqueda;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    mostrarSpinner();

    fetch(url)  
        .then(respuesta => respuesta.json())
        .then(cotizacion => {
            mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
        });

    const endTime = performance.now();

    console.log(`El tiempo de respuesta de la API es de ${endTime - startTime}ms`);
}

function mostrarCotizacionHTML(cotizacion) {

    limpiarHTML();

    console.log(cotizacion);
    const  { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;


    /**
     *  Con "debugger" podemos detener la ejecución del JS en cierto
     *   punto en especifico para poder validar las variables y funciones
     *   que se tienen hasta el punto marcado, podemos proseguir con la
     *   ejecución a través del navegador
     */

    debugger;

    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `El Precio es: <span> ${PRICE} </span>`;

    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `<p>Precio más alto del día: <span>${HIGHDAY}</span> </p>`;

    const precioBajo = document.createElement('p');
    precioBajo.innerHTML = `<p>Precio más bajo del día: <span>${LOWDAY}</span> </p>`;

    const ultimasHoras = document.createElement('p');
    ultimasHoras.innerHTML = `<p>Variación últimas 24 horas: <span>${CHANGEPCT24HOUR}%</span></p>`;

    const ultimaActualizacion = document.createElement('p');
    ultimaActualizacion.innerHTML = `<p>Última Actualización: <span>${LASTUPDATE}</span></p>`;

    debugger;

    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimasHoras);
    resultado.appendChild(ultimaActualizacion);

    formulario.appendChild(resultado);
}

function mostrarSpinner() {
    limpiarHTML();

    const spinner = document.createElement('div');
    spinner.classList.add('spinner');

    spinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>    
    `;

    resultado.appendChild(spinner);
}

function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
  }