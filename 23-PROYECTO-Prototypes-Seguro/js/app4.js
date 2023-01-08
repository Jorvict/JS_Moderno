// Variables globales


// Constructores objetos
function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

function UI (){}

// ======   Prototypes Seguro   =====
Seguro.prototype.cotizarSeguro = function(){
    /*
        1 = Americano 1.15
        2 = Asiatico 1.05
        3 = Europeo 1.35
    */

    let acumulado;
    const base = 2000;

    switch(this.marca){

        case '1':
            acumulado = base * 1.15;
            break;
        case '2':
            acumulado = base * 1.05;
            break;
        case '3':
            acumulado = base * 1.35;
            break;
        default:
            break;
    }

    // Calcular variación según antiguedad
    const diferencia = new Date().getFullYear() - this.year;
    acumulado -= ((diferencia * 3) * acumulado / 100);  

    // Calcular póliza
    switch(this.tipo){

        case 'basico':
            acumulado *= 1.30;
            break;

        case 'completo':
            acumulado *= 1.50;
            break;
    }

    return acumulado;
}

// ======   Prototypes UI   =====
UI.prototype.cargarSelectYear = () => {

    const   yearMax = new Date().getFullYear(),
            yearMin = yearMax - 20;
    
    for(i = yearMax; i >= yearMin; i--){
        const selectYear = document.querySelector('#year');
        const option = document.createElement('option');

        option.textContent = i;
        option.value = i;

        selectYear.appendChild(option);
    }    
}

UI.prototype.imprimirMensaje = (mensaje, tipo) =>{
    
    const formulario = document.querySelector('#cotizar-seguro');
    const notification = document.createElement('div');

    if(tipo === 'error'){
        notification.classList.add('error');
    } else{
        notification.classList.add('correcto');
    }

    notification.classList.add('mensaje', 'mt-10');
    notification.textContent = mensaje;

    formulario.insertBefore(notification, document.querySelector('#resultado'));

    setTimeout(() => {
        notification.remove();
    }, 2000);
}

UI.prototype.imprimirCotizacion = (total, seguro) =>{

    const {marca, year, tipo} = seguro;
    const resultado = document.querySelector('#resultado');
    let marcaTexto;

    switch(marca){

        case '1':
            marcaTexto = 'Americano';
            break;
        case '2':
            marcaTexto = 'Asiatico';
            break;
        case '3':
            marcaTexto = 'Europeo';
            break;
        default:
            break;
    }

    const contenedorPoliza = document.createElement('div');
    contenedorPoliza.classList.add('mt-10');
    contenedorPoliza.innerHTML = `
        <p class = "header"> Tu resumen </p>
        <p class='font-bold'> Marca: <span class='font-normal'> ${marcaTexto} </span></p>
        <p class='font-bold'> Año: <span class='font-normal'> ${year} </span></p>
        <p class='font-bold capitalize'> Póliza: <span class='font-normal'> ${tipo} </span></p>
        <p class='font-bold'> Total: <span class='font-normal'> $${total} </span></p>
    `;

    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none';
        resultado.appendChild(contenedorPoliza);
    }, 2000);
}

const ui = new UI();


// Eventos
inicializarEventListeners();

function inicializarEventListeners(){

    const formulario = document.querySelector('#cotizar-seguro')

    document.addEventListener('DOMContentLoaded', () =>{
        ui.cargarSelectYear();
    });

    formulario.addEventListener('submit', cotizarSeguro);
}


// Funciones
function cotizarSeguro(e){

    e.preventDefault();

    const loading = document.querySelector('#cotizar-seguro .mensaje');
    if(loading == null){

        // Obtener valor de marca
        const marca = document.querySelector('#marca').value;
        
        // Obtener valor de year
        const year = document.querySelector('#year').value;
        
        // Obtener valor de tipo
        const tipo = document.querySelector('input[name=tipo]:checked').value;

        if(marca === '' || year === '' || tipo === ''){
            
            ui.imprimirMensaje('Todos los camos son obligatorios', 'error');
            return;
        }

        ui.imprimirMensaje('Cotizando...', 'correcto');

        const resultadoImpreso = document.querySelector('#resultado .mt-10');
        if(resultadoImpreso != null){
            resultadoImpreso.remove();
        }

        const seguro = new Seguro(marca, year, tipo);
        const total = seguro.cotizarSeguro();

        ui.imprimirCotizacion(total, seguro);
    }
}