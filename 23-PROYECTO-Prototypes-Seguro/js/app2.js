// Constructores
function UI(){}
function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

// ==========   Prototype UI   ==========

UI.prototype.llenarSelectYears = () =>{

    const selectYear = document.querySelector('#year');
    const   yearMax = new Date().getFullYear(),
            yearMin = yearMax - 20;

    for(i = yearMax; i >= yearMin; i--){

        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;

        selectYear.appendChild(option);
    }
}

UI.prototype.imprimirMensaje = (tipo, mensaje) =>{

    const formulario = document.querySelector('#cotizar-seguro');
    const divMensaje = document.createElement('div');
    divMensaje.textContent = mensaje;

    if(tipo === 'error'){

        divMensaje.classList.add('error');
    } else{

        divMensaje.classList.add('correcto');
    }

    divMensaje.classList.add('mensaje', 'mt-10');
    formulario.insertBefore(divMensaje, document.querySelector('#resultado'));

    setTimeout(() => {
        divMensaje.remove();
    }, 2000);
}

UI.prototype.imprimirResultado = (seguro, total) =>{

    const {marca, year, tipo} = seguro
    let txtMarca;
    switch(marca){
        case '1':
            txtMarca = 'Americano'
            break;

        case '2':
            txtMarca = 'Asiático'
            break;

        case '3':
            txtMarca = 'Europeo'
            break;

        default:
            break;
    }

    const divResumen = document.createElement('div');
    const divResultado = document.querySelector('#resultado');
    const spinner = document.querySelector('#cargando');

    divResumen.classList.add('mt-10');
    divResumen.innerHTML = `
        <p class = "header"> Tu Resumen </p>
        <p class="font-bold"> Marca: <span class = "font-normal"> ${txtMarca} </span></p>
        <p class="font-bold"> Año: <span class = "font-normal"> ${year} </span></p>
        <p class="font-bold"> Tipo de Póliza: <span class = "font-normal capitalize"> ${tipo} </span></p>
        <p class="font-bold"> Total: <span class = "font-normal"> $${total} </span></p>
    `;

    spinner.style.display = 'block';
    setTimeout(() => {
        spinner.style.display = 'none';
        divResultado.appendChild(divResumen);
    }, 2000);
}

// ==========   Prototype Seguro   ==========

Seguro.prototype.cotizarSeguro = function(){

     /*
        1 = Americano 1.15
        2 = Asiatico 1.05
        3 = Europeo 1.35
    */

    const base = 2000;
    let total;

    switch(this.marca){

        case '1':
            total = base * 1.15;
            break;

        case '2':
            total = base * 1.05;
            break;

        case '3':
            total = base * 1.35;
            break;

        default:
            break;
    }

    // Leer el año
    const diferencia = new Date().getFullYear() - this.year;

    // Cada año que la diferencia es mayor, el costo del seguro va a reducirse un 3%
    total -= ( ( diferencia * 3) * total ) / 100;

    /*
        Sí el seguro es básico se multiplica por 30% mas
        Sí el seguro es completo se multiplica por 50% mas
    */

    if(this.tipo === 'basico'){
        total *= 1.30;
    } else{
        total *= 1.50;
    }

    return total;
}


const ui = new UI();


// Events Listeners
inicializarEventsListeners();
function inicializarEventsListeners(){

    document.addEventListener('DOMContentLoaded', ui.llenarSelectYears);

    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}


// Funciones
function cotizarSeguro(e){
    e.preventDefault();

    const cargando = document.querySelector('#cotizar-seguro .mensaje');
    if(cargando == null){
        const marca = document.querySelector('#marca').value;
        const year = document.querySelector('#year').value;
        const tipo = document.querySelector('input[name="tipo"]:checked').value;
        const resumenPrevio = document.querySelector('#resultado .mt-10');
    
        if(marca === '' || year === '' || tipo === ''){
            
            ui.imprimirMensaje('error', 'Campos incompletos, por favor llenar todos los campos');
            return;
        }
    
        if(resumenPrevio != null){
            resumenPrevio.remove();
        }
    
        ui.imprimirMensaje('correcto', 'Cotizando...');
    
        const seguro = new Seguro(marca, year, tipo);
        const total = seguro.cotizarSeguro();
    
        ui.imprimirResultado(seguro, total);
    }
}