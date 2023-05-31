// Namespace Pattern - Categoría: De estructuración
/**
 * Ayuda a evitar colisión con nombres en el scope global de JS. La
 * idea del namespace es crear un objeto global alrededor de tu
 * aplicación y agregar todas las funciones dentro, en lugar de crear
 * múltiples funciones y objetos que se puedan acceder de forma global.
 * 
 * Siempre inicia como un objeto y poco a poco se irán almacenando
 * los datos y funciones dentro de dicho objeto, para así evitar el
 * choque de nombres de funciones en el scope global.
 * 
 * Este Dessign Pattern es bastante común.
 */

// Se le dice namespace porque sobre este objeto vamos a ir colocando todo
// (Datos, funciones, operaciones, etc)
const restaurantApp = {};

// Agregamos un array de objetos y almacenamos DENTRO del objeto global
restaurantApp.platillos = [
    {
        platillo:   'Pizza',
        precio:     25
    },
    {
        platillo:   'Hamburguesa',
        precio:     20
    },
    {
        platillo:   'Hot Dog',
        precio:     20
    }
];

// Agregamos un objeto de funciones y almacenamos DENTRO del objeto global
restaurantApp.funciones = {

    mostrarMenu: platillos => {
        console.log('Bienvenidos a nuestro menú');

        platillos.forEach( (platillo, index) => {

            console.log(`${index} : ${platillo.platillo} $${platillo.precio}`);
        });
    },

    ordenar: id => {
        console.log(`Tu platillo: ${restaurantApp.platillos[id].platillo} se está preparando`);
    },

    agregarPlatillo: (platillo, precio) =>{

        const nuevo = {
            platillo,
            precio
        };

        restaurantApp.platillos.push(nuevo);
    }
}

// Destructuring del array
const { platillos } = restaurantApp;


// Sintaxis para ejecutar la función, debido a su especificidad se reduce
// la probabilidad de que choque con alguna otra función del mismo nombre,
// algo similar a la especificidad de CSS
restaurantApp.funciones.mostrarMenu( platillos );

restaurantApp.funciones.ordenar(1);

restaurantApp.funciones.agregarPlatillo('Taco', 20);

restaurantApp.funciones.mostrarMenu( platillos );
