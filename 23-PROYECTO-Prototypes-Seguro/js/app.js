// Constructores
function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

// Realiza la cotización con los datos
Seguro.prototype.cotizarSeguro = function(){

    /*
        1 = Americano 1.15
        2 = Asiatico 1.05
        3 = Europeo 1.35
    */

    let cantidad;
    const base = 2000;

    switch(this.marca){

        case '1':
            cantidad = base * 1.15;
            break;

        case '2':
            cantidad = base * 1.05;
            break;

        case '3':
            cantidad = base * 1.35;
            break;

        default:
            break;
    }

    // Leer el año
    const diferencia = new Date().getFullYear() - this.year;

    // Cada año que la diferencia es mayor, el costo del seguro va a reducirse un 3%
    cantidad -= ( ( diferencia * 3) * cantidad ) / 100;

    /*
        Sí el seguro es básico se multiplica por 30% mas
        Sí el seguro es completo se multiplica por 50% mas
    */
    if(this.tipo === 'basico'){
        cantidad *= 1.30;
    } else{
        cantidad *= 1.50;
    }

    return cantidad;
}

/* Está vacio y no tiene ninguna propiedad ya que no requiere datos
   Sin embargo a pesar de que no requiera datos y que no se le pasarán argumentos
   igualmente se debe generar el constructor ya que sobre éste es donde se
   asignarán los prototypes de UI
*/
function UI() {} 

// Llena las opciones de los años
// Se puede usar arrow function ya que no se hará uso del this
UI.prototype.llenarOpciones = () =>{
    const   max = new Date().getFullYear(), // Obtiene año actual
            min = max - 20;                 // Obtiene año actual - 20
    
    const selectYear = document.querySelector('#year');

    for(let i = max; i > min; i-- ){
        
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;

        selectYear.appendChild(option);
    }
}

// Muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {

    const div = document.createElement('div');

    if(tipo === 'error'){
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    // Insertar en HTML
    /*  No tiene nada de malo en tener variables que se llamen igual
        y que seleccionen lo mismo pero que estén en distintas funciones
    */
    const formulario = document.querySelector('#cotizar-seguro'); 
    
    // En el insertBefore, el primer argumento es el elemento/nodo a ingresar
    // El segundo argumento es la referencia de en dónde se insertará el elemento/nodo
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 2000);
}

UI.prototype.mostrarResultado = (total, seguro) => {

    const {marca, year, tipo} = seguro
    let textoMarca;

    switch(marca){

        case '1':
            textoMarca = 'Americano';
            break

        case '2':
            textoMarca = 'Asiatico';
            break

        case '3':
            textoMarca = 'Europeo';
            break

        default:
            break;
    }

    // Crear el resultado
    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
        <p class = "header"> Tu Resumen </p>
        <P class = "font-bold"> Marca: <span class = "font-normal"> ${textoMarca} </span> </p>
        <P class = "font-bold"> Año: <span class = "font-normal"> ${year} </span> </p>
        <P class = "font-bold"> Tipo de póliza: <span class = "font-normal capitalize"> ${tipo} </span> </p>
        <P class = "font-bold"> Total: <span class = "font-normal"> $${total} </span> </p>
    `;

    const resultadoDiv = document.querySelector('#resultado');

    // Mostrar el spinner y resultado
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none';  // Se borra el spinner del html
        resultadoDiv.appendChild(div);  // Se imprime resultado luego de borrarse el spinner
    }, 2000);
}

// Instanciar UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {

    ui.llenarOpciones(); // Llena el select con los años...
})

eventListeners();
function eventListeners(){
    
    // No se recomienda declarar selectores dentro de los prototypes
    const formulario = document.querySelector('#cotizar-seguro'); 
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e){

    e.preventDefault();

    // Leer la marca seleccionada
    const marca = document.querySelector('#marca').value;

    // Leer el año seleccionado
    const year = document.querySelector('#year').value;

    // Leer el tipo de cobertura
    /* 
        Una característica de los Radio-buttons es que el name es el mismo
        pero el value es diferente, para saber cual es el valor del
        radio-button usamos querySelector con selector de CSS en el cual
        buscamos el "input" que tenga un atributo llamado "name", que este
        tenga el valor de "tipo" asignado y por ultimo que este se encuentre
        con el check marcado
    */ 
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    
    if(marca === '' || year === '' || tipo === ''){

        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
    }

    ui.mostrarMensaje('Cotizando...', 'exito');

    // Ocultar las cotizaciones previas
    const resultados = document.querySelector('#resultado div');
    if(resultados != null){
        resultados.remove();
    }
    
    // Instanciar el seguro
    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.cotizarSeguro();

    // Utilizar el prototype que va a cotizar
    ui.mostrarResultado(total, seguro);
}


//NOTAS: 
/*  class = "capitalize". 
    Al utilizar tailwind con esta clase, la primera letra de la primera palabra 
    del texto será mayuscula.
*/