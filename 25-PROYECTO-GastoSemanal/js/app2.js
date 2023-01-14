// Variables globales
const formulario = document.querySelector('#agregar-gasto');

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
        console.log(this.gastos);
    }

    calcularRestante(){

        const gastado = this.gastos.reduce( (total, gasto) => total + gasto.precio, 0);
        this.restante = this.presupuesto - gastado;
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
    const gastadObj = {nombre, precio, id: Date.now()};

    presupuesto.agregarGasto(gastadObj);
    formulario.reset();

    const {restante, gastos} = presupuesto;
    ui.actualizarRestante(restante)
}