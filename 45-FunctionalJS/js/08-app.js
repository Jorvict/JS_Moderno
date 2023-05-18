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

// Otro ejemplo de closures, funciona similar a las Clases
const coche = ( () => {
    let _marca, _velocidad = 0, _puertas;

    function setMarca(marca) {
        _marca = marca;
        return _marca;
    }

    function getMarca(){
        return _marca;
    }

    function acelerar() {
        _velocidad++;
    }

    function frenar() {
        _velocidad--;
    }

    function getVelocidad() {
        return _velocidad
    }

    // Para poder utilizar los métodos fuera del closure realizar un return
    // Se recomienda que no se retornen variables sino métodos o funciones
    // que realicen el get de esa variable
    return{
        setMarca,
        getMarca,
        acelerar,
        frenar,
        getVelocidad
    }

}) ();

coche.setMarca('Ferrari');
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.acelerar();


console.log("Marca:", coche.getMarca(), "Velocidad:", coche.getVelocidad());