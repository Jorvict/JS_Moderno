// Variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');



// Eventos

eventListeners();
function eventListeners(){
    
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto );
    formulario.addEventListener('submit', agregarGasto);
}



// Classes
class Presupuesto{

    constructor( presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto){
        
        this.gastos = [...this.gastos, gasto];
        console.log(this.gastos);
    }
}

class UI{

    insertarPresupuesto(cantidad){
        // Extrayendo los valores
        const {presupuesto, restante} = cantidad;

        // Agregar al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo){

        // Crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert'); // Clases de Bootstrap
    
        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar en el HTML
        document.querySelector('.primario').insertBefore(divMensaje, formulario);
    
        // Quitar mensaje del HTML
        setTimeout(() => {
            divMensaje.remove();
        }, 2000);
    
    }
}

/*  No se puede instanciar el objeto de manera global ya que de ser así, al
    momento de instanciarlo aún no tendríamos el valor que estaría solicitando
    el constructor del objeto, ya que el valor solicitado lo obtenemos en la ejecución
    de la función "preguntarPresupuesto". Sin embargo, no se puede instanciar el
    objeto dentro de la función ya que éste objeto tendrá que ser utilizado por
    varias funciones y debido al scope imposibilitaría su uso, por lo cual lo que
    se realiza es declarar e inicializar una variable global vacía, a la cual
    recien dentro de la función "preguntarPresupuesto" se le instanciará el objeto,
    esto permite poder pasar al constructor el dato obtenido en la ejecución de la
    función y a su vez, el objeto pueda ser utilizado globalmente ya que la variable
    se inicializó en el scope global.
*/

// Instanciar
const ui = new UI();
let presupuesto;

// Funciones
function preguntarPresupuesto(){

    const presupuestoUsuario = prompt('¿Cuál es tu presupuesto?');

    // console.log(parseInt(presupuestoUsuario));
    // console.log(parseFloat(presupuestoUsuario));
    // console.log( Number(presupuestoUsuario) );

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0 ){

        window.location.reload();
    }

    // Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto)

    ui.insertarPresupuesto(presupuesto);
}

// Añade gastos
function agregarGasto(e){

    e.preventDefault();

    // Leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    // Validar
    if(nombre === '' || cantidad === ''){
        
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    } else if( cantidad <= 0 || isNaN(cantidad)){

        ui.imprimirAlerta('Cantidad no válida', 'error');
        return;
    }

    // Generar un objeto con el gasto
    // Esto es lo contrario a un destructuring, esto une o comprime
    // nombre y cantidad fusionandolos ahora en el objeto "gasto"
    // Este proceso se conoce como Object Literal Enhacement
    const gasto = {nombre, cantidad, id: Date.now()};

    // Añade un nuevo gasto
    presupuesto.nuevoGasto( gasto );

    // Mensaje de éxito
    ui.imprimirAlerta('Gasto agregado correctamente', 'correcto');

    // Reinicia el formulario
    formulario.reset();
}