// Implicit Binding
/**
 * Se da por implícito donde encontrar el valor, al usar el this se le
 * indica que el elemento al que hace referencia está dentro del mismo
 * objeto/llaves, al usar varios this en conjunto con varios objetos solamente
 * obtendran la información de las llaves o del bloque de código dentro
 * del cual se encuentran, por ejemplo en el siguiente caso el this de usuario
 * es muy distinto del this de mascota por lo cual la información no debería
 * cruzarse
 */
const usuario = {
    nombre: 'Jorvict',
    edad: 24,
    información(){
        console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`)
    },
    mascota: {
        nombre: 'Hook',
        edad: 1,
        información(){
            console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`)
        }
    }
}

usuario.información();
usuario.mascota.información();