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
        this.calcularRestante();
    }

    calcularRestante(){
        // Acumula y suma el valor de cantidad en cada iteración hasta recorrer todo el array 
        const gastado = this.gastos.reduce( (total, gasto) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;
    }

    eliminarGasto(id){
        this.gastos = this.gastos.filter( gasto => gasto.id !== id);
        console.log(this.gastos);
        this.calcularRestante();
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

    imprimirGastos(gastos){

        // Elimina el HTML previo
        this.limpiarGastosListadosHTML();

        // Iterar sobre los gastos
        gastos.forEach( gasto => {
            
            const {cantidad, nombre, id } = gasto

            // Crear un LI
            const nuevoGasto = document.createElement('li');
            /* La diferencia con classList es que classList maneja
            estilos en un array mientras que className los
            almacena en una cadena de texto plana. Adicionalmente
            classList permite agregar y eliminar estilos uno por uno
            mientras que className sobreescribirá todas las clases
            previas por las nuevas establecidas*/
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            
            /* Al colocar dataset es equivalente a generar un nuevo
            atributo HTML que llevará por nombre "data-", usando la
            sintaxis de punto podemos colocar un elemento final que
            será el identificador del data que estamos generando.
            Ej: nuevoGasto.dataset.nombre Equivale a "data-nombre"*/
            nuevoGasto.dataset.id = id; // Equivale a data-id = (id)

            // Agregar el HTML del gasto
            nuevoGasto.innerHTML = ` ${nombre} <span class = "badge badge-primary badge-pill"> $ ${cantidad} </span>`;

            // Botón para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            
            // Esto ultimo es una entidad HTML, y solo se puede usar al 
            // utilizar innerHTML pero tener en cuenta que innerHTML
            // se considera inseguro
            btnBorrar.innerHTML = 'Borrar &times' 

            // Sí lo ejecutamos de ésta forma llamará a la función
            // directamente (Sin haberle hecho click)
            // btnBorrar.onclick = eliminarGasto(id); INCORRECTO

            btnBorrar.onclick = () =>{
                eliminarGasto(id);
            }
            nuevoGasto.appendChild(btnBorrar);

            // Agregar al HTML
            gastoListado.appendChild(nuevoGasto);
        })
    }

    limpiarGastosListadosHTML(){

        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    actualizarRestante(restante){

        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(presupuestObj){
        
        const { presupuesto, restante } = presupuestObj;
        const restanteDiv = document.querySelector('.restante');

        // Comprobar 25% - Sí restante es menor que el 25% 
        // del presupuesto total, significa que se ha gastado más
        // del 75% del presupuesto inicial
        if( (presupuesto / 4)  > restante){
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        } else if( (presupuesto / 2) > restante){ // Comprobar 50%
            restanteDiv.classList.remove('alert-success', 'alert-danger');
            restanteDiv.classList.add('alert-warning');
        } else {
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');
        }

        // Si el total es 0 o menor
        if( restante <= 0 ){
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error');
        
            formulario.querySelector('button[type="submit"]').disabled = true;
        }
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

    // Imprimir los gastos
    /* Algo que podemos realizar es el destructuring para no enviar 
    el objeto completo sino solamente los gastos que es lo único
    que se requiere para dicha función */
    // Sí requerimos la key presupuesto del objeto presupuesto
    // no se va a poder extraer mediante destructuring debido a que
    // ambos elementos tienen el mismo nombre
    const { gastos, restante } = presupuesto;
    ui.imprimirGastos(gastos);

    // Actualizar restante
    ui.actualizarRestante(restante);

    // Generamos un nuevo método para extraer la key presupuesto
    // y le pasamos el objeto presupuesto completo debido a que
    // requerimos el presupuesto inicial y el restante
    ui.comprobarPresupuesto(presupuesto);

    // Reinicia el formulario
    formulario.reset();
}

function eliminarGasto(id){
    // Elimina los gastos del objeto
    presupuesto.eliminarGasto(id);

    // Elimina los gastos del HTML
    const { gastos, restante } = presupuesto;
    ui.imprimirGastos(gastos);

    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);
}