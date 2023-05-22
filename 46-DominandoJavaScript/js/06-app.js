// new Binding
/**
 * Principalmente se refiere a cuando se genera un nuevo objeto con el
 *      Object Constructor y vas a tener acceso a la palabra reservada
 *      .this vía un nuevo objeto con la palabra NEW
 */

function Auto(modelo, color){

    this.modelo = modelo; // <- Este es el Binding, pero tambien se conoce 
    this.color = color; //     como new Binding, cuando generamos un objeto
                        //      tenemos acceso a ese Binding y a sus valores
}

const auto = new Auto('Camaro', 'Negro');
console.log(auto);


// Window binding, puedes asignar una variable a la ventana global Window
window.color = 'negro';

function hola(){
    console.log(color);
}
hola();

/**
 * Recordar que JS primero buscará la variable en la estructura del código
 * sí no la consigue, la buscará en la ventana global, y sí tampoco la
 * consigue ahí recién mostrará el error de undefined
*/