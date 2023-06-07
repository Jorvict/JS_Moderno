/**
 * Pasos para poder utilizar jest: 
 *      ~ Abrir la terminal e ingresar a la ruta principal del proyecto.
 *      ~ Generamos un archivo "package.json" utilizando el comando "npm init".
 *      ~ Debemos inicializar una carpeta de node_modules como dependencia de desarrollo
 *          usando el comando "npm i --save-dev jest", esto también instalará jest en la ruta
 *          especificada en la terminal, recordar que la ruta debe estar en la carpte principal del
 *          proyecto.
 *      ~ Dentro del archivo package.json modificamos la propiedad "test" dentro de "script", 
 *          eliminamos la ruta y como valor colocamos "jest".
 *      ~ En la carpeta raíz del proyecto creamos una carpeta con el nombre "__tests__".
 *      ~ Dentro de dicha carpeta creamos los archivos JS referente a los tests a realizar.
 *      ~ En la terminal, estando en la ruta del proyecto, escribir los siguientes comandos
 *          para iniciar una ejecución de tests:
 *              # npm run test
 *              # npm test
 *              # npm t
 */ 
/**
 * NOTA: Puedes agrupar los tests dentro de la carpeta "js" (fuera de la carpeta "__tests__") pero
 *          tener en cuenta que el nombre del archivo debe seguir la siguiente estructura
 *          "(nombre_archivo).test.js", por ejemplo para este mismo archivo se tendría que
 *          nombrar de la siguiente manera "holamundo.test.js", pero no se recomienda esta estructura
 *          porque es confusa.
 */

/**
 * Cada prueba utiliza la función llamada "test", se le pasan 2 valores, 1 mensaje y 1 callback.
 * Puedes agrupar varios tests dentro de un describe, se recomienda agrupar pruebas que están
 * relacionadas.
 */
describe('Grupo de tests', () =>{

    test('Hola Mundo en Jest', () => {});

    test('Otro hola mundo', () => {});
})