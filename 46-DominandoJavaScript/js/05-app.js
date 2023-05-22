// Explicit Binding
/**
 * Se pasa explícitamente las variables de donde va a obtener los valores.
 * Es útil debido a que no siempre vas a tener los datos dentro del mismo
 * objeto ni tampoco con al acceso al this. sino que se tendrán que
 * pasar de forma explícita
 * 
 * Se utilizan 3 funciones, .call, .apply y .bind
 * 
 * .call: Existe en todas las funciones de JS, incluyendo las que nosotros
 *      creamos, podemos pasarle un objeto o un arreglo dentro de esa
 *      función.
 * 
 * .apply: Al igual que .call,también existe en todas las funciones de JS,
 *      pero esta tiene la diferencia que en .call hay que pasar cada
 *      elemento individualmente mientras que en apply puede tomar todo
 *      el arreglo y recorrerlo automáticamente.
 * 
 * .bind: Es muy similar a call, pasandole los elementos de forma
 *      individual pero con la diferencia que crea una nueva FUNCIÓN.
 */

function persona (el1, el2) {
    
    console.log(`Mi nombre es ${this.nombre}, escucho ${el1} y ${el2}`)
}

const informacion = {
    nombre: 'Jorvict'
}
const musicaFavorita = ['Synthwave', 'Metal'];


// Ejemplo Call, sí le pasamos un array tenemos que pasarle cada elemento
//      de forma individual con su posición (índice) en el arreglo, es
//      como si pasaramos el objeto información y al array musicaFavorita
//      hacia dentro de la función persona
persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);


// Ejemplo Apply, puede tomar todo el arreglo y recorrerlo automáticamente.
persona.apply(informacion, musicaFavorita);


// Ejemplo Bind, funciona igual que Call pero este genera una nueva function
const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);
nuevaFn();


/**
 * Posible pregunta de entrevista: ¿Diferencias entre call y apply?
 * call tienes que pasarle cada elemento de forma individual mientras que
 * apply puedes pasarle todo un arreglo completo, y bind funciona igual que
 * call con la excepción que bind te genera una nueva función
 */