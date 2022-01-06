// .reduce
// Toma una gran cantidad de datos, los une y entrega el resultado

// Ejemplo de recorrer un array de datos e imprimir cuanto
// debe pagar el cliente
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Con un forEach
let total = 0;
carrito.forEach( producto => total += producto.precio)
console.log(total);


// Con un reduce
let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);
console.log(resultado);

/* En el reduce, se pasan 2 parámetros, el primero es 
el valor "anterior" y el segundo es el valor actual*/

/* En éste caso ya no amérita colocar el "+=" al 
almacenar los datos de la suma en el total ya que éste
viene almacenando el valor previo en cada iteración*/

/* Sí colocas una , y un número, estarás especificando en
que valor sobre el cual inicia el parametro "total"*/


// Reduce de manera explicita (la anterior es implicita)
const resultado2 = carrito.reduce((total, producto) => {           
    return total + producto.precio 
}, 0) 
console.log(resultado2);


// Un ejemplo más corto y simple:
const numeros = [30, 20, 45, 65];
const suma = numeros.reduce( (valor_anterior, valor_actual) => valor_anterior + valor_actual, 0);
console.log(suma); // Imprime 160

// Depuración del reduce
/*  Primera iteración:  valor_anterior = 0 (Debido a la inicialización en 0, caso contrario inicializaría con "")
                        valor_actual = 30
                        0 + 30 = 30

    Segunda iteración:  valor_anterior = 30
                        valor_actual = 20
                        30 + 20 = 50
                        
    Tercera iteración:  valor_anterior = 50
                        valor_actual = 45
                        50 + 45 = 95
                        
    Cuarta iteración:   valor_anterior = 95
                        valor_actual = 65
                        95 + 65 = 160 */

// Es como si el parametro fuera un contador y el segundo
// parametro fuera el objeto en sí