/**
 * Para poder usar imports desde Jest es necesario usar Babel, Jest no permite usar imports nativamente
 * debido a que Jest funciona sobre Node, este soporta "CommonJS" o "Módulos de CommonJS", basícamente
 * la sintaxis de export es distinta ya que no es solamente "export" en la función, sino "module.exports"
 * y en lugar de "import{x} from 'y'" utilizamos variables de la siguiente manera 
 * "const suma = require('ruta o dependencia')", el inconveniente es que dichoas funciones no se podrán ejecutar
 * en el navegador.
 * 
 * En pocas palabras, "import from" no existe en Jest, y para poder utilizarlo se recomienda habilitar Babel,
 * esto lo que permitirá es escribir código JS nuevo y lo compilará para que Node pueda ejecutarlo, esto se conoce
 * como código transpilado, es decir, Babel interpretará el código JS moderno como si fuera codigo mas antiguo para 
 * que navegadores antiguos como Internet Explorer o algunos entornos como Node y Jest puedan entender el nuevo
 * código.
 * 
 * Para habilitar Babel debemos crear un archivo en la carpeta raíz del proyecto, el archivo se debe llamar
 * ".babelrc" e instalar una dependencia llamada "Babel Preset" la instalamos como dependencia de desarrollo, 
 * para ello la ruta de terminal debe estar en la url del proyecto y ejecutamos el comando "npm i --save-dev @babel/preset-env"
 * 
 * Luego de instalado vamos al archivo babelrc y especificamos la configuración que debe de tener, es decir es donde colocamos
 * a que versión de código vamos a transpilar nuetros JS en éste caso.
 * 
 * Debido a inconvenientes presentados durante el desarrollo del ejercicio, intentar instalar jest en su versión 26.3.0 modificando
 * el package .json o caso contrario ejecutar el comand "npm i --save-dev  @babel/preset-env jest jest-environment-jsdom" recordar
 * que antes de reinstalar Jest borrar la carpeta node_modules
 * 
 */
import { suma } from '../js/funciones.js';

describe('Suma de 2 números', () => {

    test('Sumas 10 y 20 debe dar como resultado 30', () => {
        expect( suma(10, 20) ).toBe(30);
    });

});