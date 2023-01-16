// Variables globales
const formulario = document.querySelector('#agregar-gasto');
const listaGastos = document.querySelector('#gastos');

// Clases
class Presupuesto{

    constructor(presupuesto){
        
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    agregarGasto(gastadObj){

        this.gastos = [...this.gastos, gastadObj];
        this.calcularRestante();
    }

    calcularRestante(){

        const gastado = this.gastos.reduce( (total, gasto) => total + gasto.precio, 0);
        this.restante = this.presupuesto - gastado;
    }

    eliminarGasto(id){

        this.gastos = this.gastos.filter( gasto => gasto.id !== id);
        this.calcularRestante(this.restante);
    }
}

class UI{

    insertarPresupuesto(presupuestObj){
        const{presupuesto, restante} = presupuestObj
        
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirNotificacion(mensaje, tipo){

        const primario = document.querySelector('.primario');
        const divMensaje = document.createElement('div');

        divMensaje.textContent = mensaje;
        divMensaje.classList.add('text-center', 'alert');

        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        } else{
            divMensaje.classList.add('alert-success');
        }

        primario.insertBefore(divMensaje, formulario);
        
        setTimeout(() => {
            divMensaje.remove();
        }, 2000);
    }

    actualizarRestante(restante){

        document.querySelector('#restante').textContent = restante;
    }

    imprimirGastosHTML(gastos){

        this.limpiarListaHTML();

        gastos.forEach( gasto => {

            const {nombre, precio, id} = gasto;

            const divGasto = document.createElement('div');
            divGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            divGasto.innerHTML = `${nombre} <span class = "badge badge-primary badge-pill"> $ ${precio} </span>`;
            divGasto.dataset.id = id;

            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = `Borrar &times`;

            btnBorrar.onclick = () =>{
                eliminarGasto(id);
            }

            divGasto.appendChild(btnBorrar);
            listaGastos.appendChild(divGasto);
        });
    }

    limpiarListaHTML(){

        while(listaGastos.firstChild){
            
            listaGastos.removeChild(listaGastos.firstChild);
        }
    }

    comprobarRestante(presupuestObj){

        const {presupuesto, restante} = presupuestObj;
        const divRestante = document.querySelector('.restante');

        if( (presupuesto / 4) > restante ){
            
            divRestante.classList.remove('alert-success','alert-warning');
            divRestante.classList.add('alert-danger');
        } else if( (presupuesto / 2) > restante ){

            divRestante.classList.remove('alert-success', 'alert-danger');
            divRestante.classList.add('alert-warning');
        } else{

            divRestante.classList.remove('alert-warning', 'alert-danger');
            divRestante.classList.add('alert-success');
        }

        if( restante <= 0 ){

            ui.imprimirNotificacion('¡Se acabó el presupuesto!', 'error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        } else{
            formulario.querySelector('button[type="submit"]').disabled = false;
        }
    }
}


// Instancia de clases
let presupuesto
const ui = new UI();

// Eventos
inicializarEventListeners();
function inicializarEventListeners(){

    document.addEventListener('DOMContentLoaded', ingresarPresupuesto);
    formulario.addEventListener('submit', registrarGasto);
}



// Funciones
function ingresarPresupuesto(){

    const presupuestoIngresado = prompt('Ingrese su presupuesto:');

    if(presupuestoIngresado === '' || presupuestoIngresado === null || presupuestoIngresado <= 0 || isNaN(presupuestoIngresado)){
        window.location.reload();
    }

    presupuesto = new Presupuesto(presupuestoIngresado)
    ui.insertarPresupuesto(presupuesto);
}

function registrarGasto(e){

    e.preventDefault();
    
    const nombre = document.querySelector('#gasto').value;
    const precio = Number(document.querySelector('#cantidad').value);
    
    if(nombre === '' || precio === ''){
        
        ui.imprimirNotificacion('Por favor llenar ambos campos', 'error');
        return;
    } else if (precio <= 0 || isNaN(precio)){
        
        ui.imprimirNotificacion('Por favor ingresar un precio válido', 'error');
        return;
    }
    
    ui.imprimirNotificacion('Gasto agregado correctamente', 'correcto');
    formulario.reset();

    const gastadObj = {nombre, precio, id: Date.now()};
    presupuesto.agregarGasto(gastadObj);
    
    const {restante, gastos} = presupuesto;
    
    ui.actualizarRestante(restante)
    ui.imprimirGastosHTML(gastos);
    ui.comprobarRestante(presupuesto);
}

function eliminarGasto(id){
    
    presupuesto.eliminarGasto(id);
    const {restante, gastos} = presupuesto;

    ui.imprimirGastosHTML(gastos);
    ui.actualizarRestante(restante);
    ui.comprobarRestante(presupuesto);
}