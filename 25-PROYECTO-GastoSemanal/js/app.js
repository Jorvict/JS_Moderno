// Variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');



// Eventos

eventListeners();
function eventListeners(){
    
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto );
}



// Classes
class Presupuesto{

    constructor( presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }
}

class UI{

    insertarPresupuesto(cantidad){
        const {presupuesto, restante} = cantidad;
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
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

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || preguntarPresupuesto <= 0 ){

        window.location.reload();
    }

    // Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto)

    ui.insertarPresupuesto(presupuesto);
}