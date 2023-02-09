// Nos permite exportar esta variable y poder importarla en otros archivos
export const nombreCliente = 'Jorvict';
export const ahorro = 200;

// Exportar función
export function mostrarInformacion(nombre, ahorro){
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

export function tieneSaldo(ahorro){
    if(ahorro > 0){
        console.log('Si tiene saldo');
    } else{
        console.log('El cliente no tiene saldo');
    }
}

// Exportar una clase
export class Cliente{

    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}

// Export default, solamente puede haber uno por archivo
export default function nuevaFuncion(){
    console.log('Este es el export default');
}