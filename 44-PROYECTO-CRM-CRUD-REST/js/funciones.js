export function mostrarAlerta(mensaje){

    const alerta = document.querySelector('.bg-red-100');

    if(!alerta){

        const alerta = document.createElement('P');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
        alerta.innerHTML = `
            <strong class = "font-bold">¡Error!</strong>
            <span class = "block sm:inline">${mensaje}</span>
        `;

        const formulario = document.querySelector('#formulario');
        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

export function validarCamposVacios(objValidado){

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
        ya que la expresión evalúa si el valor de los inputs es diferente a 
        una cadena vacía. Por lo tanto, si todos los campos están llenos, 
        el resultado será true ya que se confirma que TODOS LOS ELEMENTOS 
        son DIFERENTES de un string vacío.
    */
    /*
        Al negar la expresión 
        !Object.values(objValidado).every(input => input !== ''); 
        Significa que si todos los valores del array son diferentes 
        a la cadena vacía (o sea que tienen información), el resultado será false, 
        ya que todos los campos están llenos y no hay ninguno vacío. 
        En cambio, si al menos un valor es la cadena vacía, entonces el resultado 
        será true. 
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

    // console.log( !Object.values(objValidado).every(input => input !== '') );
    return !Object.values(objValidado).every(input => input !== '');
}