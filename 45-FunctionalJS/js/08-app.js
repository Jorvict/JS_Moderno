// Closures
/**
 * Hay ocasiones donde deseas utilizar una variable que se encuentra fuera 
 * del scope de la function actual, para lograr esto se pueden utilizar 
 * los Closures. 
 * Estos son creados cada vez que se crea una function y un Closure es 
 * una forma de acceder a una función o valor desde el exterior
 */
const cliente = 'Jorvict';

function mostrarCliente() {
    const cliente = 'Piña';

    // Esta impresión mostrará "Piña" ya que por el scope, para esta
    // impresión no existe el "Jorvict" 
    console.log(cliente); 
}

// Debido al scope, esta impresión mostrará Jorvict
console.log(cliente); 
mostrarCliente();

// ========== UTILIZANDO UN CLOSURE ========== 
const obtenerCliente = () =>{
    const nombre = "Enrique";

    function muestraNombre() {
        console.log(nombre);
    }

    return muestraNombre;
}

const cliente2 = obtenerCliente();
cliente2();