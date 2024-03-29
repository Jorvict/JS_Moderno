// Variables globales
const formulario = document.querySelector('#agregar-gasto');
const listaGastos = document.querySelector('#gastos ul');


// Clases
class Presupuesto{

    constructor(presupuesto){

        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    agregarGasto(gasto){

        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }

    calcularRestante(){

        const gastado = this.gastos.reduce( (total, gasto) => total + gasto.precio, 0);
        this.restante = this.presupuesto - gastado;
    }

    eliminarGasto(id){

        this.gastos = this.gastos.filter(gasto => gasto.id !== id);
        this.calcularRestante();
    }
}

class UI{

    constructor(){}

    imprimirMensaje(mensaje, tipo){

        const primarioContainer = document.querySelector('.primario')
        const divMensaje = document.createElement('div');

        divMensaje.textContent = mensaje;
        divMensaje.classList.add('text-center', 'alert');

        if( tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        primarioContainer.insertBefore(divMensaje, formulario);

        setTimeout(() => {
            divMensaje.remove();
        }, 2000);
    }

    imprimirPresupuesto(presupuestObj){

        const { presupuesto, restante } = presupuestObj;
        
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    actualizarRestante(restante){

        document.querySelector('#restante').textContent = restante;
    }

    imprimirGastosHTML(gastos){

        ui.limpiarGastosHTML();

        gastos.forEach( gastoIt =>{

            const { gasto, precio, id } = gastoIt;

            const divGasto = document.createElement('div');
            divGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            divGasto.innerHTML = `${gasto} <span class = "badge badge-primary badge-pill"> $ ${precio} </span>`;
            divGasto.dataset.id = id;

            const btnBorrarGasto = document.createElement('button');
            btnBorrarGasto.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrarGasto.innerHTML = 'Borrar &times';
            btnBorrarGasto.onclick = () =>{
                eliminarGasto(id);
            }

            divGasto.appendChild(btnBorrarGasto);
            listaGastos.appendChild(divGasto);
        });
    }

    limpiarGastosHTML(){

        while(listaGastos.firstChild){
            listaGastos.removeChild(listaGastos.firstChild);
        }
    }

    comprobarRestante(presupuestObj){

        const {presupuesto, restante} = presupuestObj;
        const divRestante = document.querySelector('.restante')

        if( (presupuesto / 4) > restante){
            
            divRestante.classList.remove('alert-success', 'alert-warning');
            divRestante.classList.add('alert-danger');

        }else if( (presupuesto / 2) >= restante){
            
            divRestante.classList.remove('alert-success', 'alert-danger');
            divRestante.classList.add('alert-warning');
        } else{

            divRestante.classList.remove('alert-warning', 'alert-danger');
            divRestante.classList.add('alert-success');
        }

        if( restante <= 0){
            
            formulario.querySelector('button[type="submit"]').disabled = true;
        } else{

            formulario.querySelector('button[type="submit"]').disabled = false;
        }
    }
}


// Instancia de clases
let presupuesto;
const ui = new UI();

// Eventos
inicializarEventListeners();

function inicializarEventListeners(){

    document.addEventListener('DOMContentLoaded', ingresarPresupuesto);
    formulario.addEventListener('submit', agregarGasto);
}

// Funciones
function ingresarPresupuesto(){

    const presupuestoIngresado = prompt('Ingrese presupuesto:');

    if( presupuestoIngresado === '' || presupuestoIngresado === null || isNaN(presupuestoIngresado) || presupuestoIngresado <= 0 ){
        
        alert('Inserte un presupuesto válido.')
        window.location.reload();
    }

    presupuesto = new Presupuesto(presupuestoIngresado);
    ui.imprimirPresupuesto(presupuesto);
}

function agregarGasto(e){

    e.preventDefault();

    const gasto = document.querySelector('#gasto').value;
    const precio = Number(document.querySelector('#cantidad').value);
    
    if( gasto === '' || precio === '' ){
        
        ui.imprimirMensaje('Llene ambos campos.', 'error');
        return;
    } else if ( precio <= 0 || isNaN(precio)){

        ui.imprimirMensaje('Ingrese un precio válido.', 'error');
        return;
    }
    
    const gastoObj = {gasto, precio, id: Date.now()};
    presupuesto.agregarGasto(gastoObj);

    ui.imprimirMensaje('Gasto registrado.', 'exito');
    formulario.reset();

    const { restante, gastos } = presupuesto

    ui.actualizarRestante(restante);
    ui.imprimirGastosHTML(gastos);
    ui.comprobarRestante(presupuesto);
}

function eliminarGasto(id){

    presupuesto.eliminarGasto(id);
    const {gastos, restante} = presupuesto

    ui.imprimirGastosHTML(gastos);
    ui.actualizarRestante(restante);
    ui.comprobarRestante(presupuesto);
}