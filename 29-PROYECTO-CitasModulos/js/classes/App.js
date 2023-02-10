import { datosCita, nuevaCita } from '../funciones.js'
import { 
    mascotaInput, 
    propietarioInput, 
    telefonoInput, 
    fechaInput, 
    horaInput, 
    sintomasInput, 
    formulario
} from '../selectores.js';


class App{

    /*  Al intanciar la clase se ejecutará el contructor automaticamente
    y con el se ejecutaran todas las instancias que se encuentren
    dentro de dicho constructor (incluye todo tipo de funciones o 
    métodos), sí dentro del constructor se encuentra el método 
    initApp, entonces dicho método se ejecutará y a su vez 
    ejecutará todo el código que se le haya asignado */
    constructor(){
        this.initApp();
    }

    // Esta función se va a ejecutar cuando
    initApp(){
        mascotaInput.addEventListener('change', datosCita);
        propietarioInput.addEventListener('change', datosCita);
        telefonoInput.addEventListener('change', datosCita);
        fechaInput.addEventListener('change', datosCita);
        horaInput.addEventListener('change', datosCita);
        sintomasInput.addEventListener('change', datosCita);

        // Formulario para nuevas citas
        formulario.addEventListener('submit', nuevaCita);
    }
}

export default App;