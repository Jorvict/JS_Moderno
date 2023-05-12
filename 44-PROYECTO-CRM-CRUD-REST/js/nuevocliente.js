import { mostrarAlerta } from './funciones.js';

( function(){

    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

    function validarCliente(e){

        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        // Object Literal Enhancement
        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

        if(validarCamposVacios(cliente)){

            // Mostrar mensaje, 
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        console.log('Si se pasó la validación');
        console.log(cliente);
    }

    function validarCamposVacios(objValidado){

        // Validar que los campos estén llenos usando object methods
        /*
            Object.values(objValidado) devuelve un array con los valores 
            de las propiedades del objeto objValidado
        */
        /* 
            Every lo que hace es revisar una condición planteada en la función
            y si se cumple o no en todos los elementos del array, devolverá 
            TRUE SÍ TODOS LOS ELEMENTOS CUMPLEN CON LA CONDICIÓN y 
            false si al menos uno de ellos no la cumple.
        */
       /*   
            Sí no negaramos la expresión
            Object.values(objValidado).every(input => input !== '');
            El resultado será false si alguno de los campos está vacío, 
            ya que la expresión evalúa si el valor de input es diferente a 
            una cadena vacía. Por lo tanto, si todos los campos están llenos, 
            el resultado será true ya que se confirma que TODOS LOS ELEMENTOS 
            son DIFERENTES de un string vacío.
        */
        /*
            Al negar la expresión 
            !Object.values(objValidado).every(input => input !== ''); 
            Significa que si todos los valores del objeto son diferentes 
            a la cadena vacía, el resultado será false, lo que equivale a decir 
            que al menos uno de los valores no está vacío, o sea que todos los
            campos están llenos y no hay ninguno vacío. En cambio, si al menos 
            un valor es la cadena vacía, entonces el resultado será true. 
            Es importante destacar que esta negación no es lo mismo que la 
            afirmación original (sin negaciones), ya que una sola propiedad vacía 
            sería suficiente para que el objeto no cumpla con la condición.
        */
        /*
            Ahora, ¿entonces por qué utilizamos el return negando la
            expresión en vez de establecerla directamente?, esto se debe
            a que según se visualizó en la sección de estructuras condicionales
            primero debemos evaluar la condición que más nos importe o con mayor
            prioridad, en este caso, validar sí hay algún error para detener
            la ejecución inmediatamente, es decir, al negar la expresión,
            mientras exista un campo vacío retornará true, bajo esta confirmación
            podemos ejecutar un IF y validar el positivo del campo vacío, el cual
            si es confirmado, entraremos en la primera condición para imprimir
            el error e inmediatamente usar un return para detener la ejecución
            de la función, de esta manera no tendremos la necesidad de usar un else
        */
        /*
            Y la razón por la que no usamos
            Object.values(objValidado).every(input => input === '');
            Básicamente es porque no valida lo que deseamos (que todos los
            campos esten llenos o ninguno vacío), lo que hace esta condicional
            es evaluar que todos los campos estén vacíos y sí es así retorna
            un true, si es un resultado distinto (como que uno o todos los
            campos estén llenos) retorna un false, es por ello que no nos
            sirve para validar con esa condición
        */


        return !Object.values(objValidado).every(input => input !== '');
    }


}) ();