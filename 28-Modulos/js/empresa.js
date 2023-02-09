// Cuando se importa sin dependencias/webpack/bundler, recordar colocar la extension .js
import { Cliente } from './cliente.js';

// La clase Empresa heredará la clase Cliente importada
// Y la clase Empresa será exportada para ser utilizada en otro archivo .js
export class Empresa extends Cliente{

    constructor(nombre, ahorro, categoria){
        super(nombre, ahorro);
        this.categoria = categoria;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro} - Categoria: ${this.categoria}`;
    }
}

export default function nuevaFuncion2(){
    console.log('Este es el export default de empresa');
}