// Obtener datos de LocalStorage

//  Simplemente se coloca el nombre de la llave que deseamos obtener
const nombre = localStorage.getItem('nombre');
console.log(nombre);

// Sí intentamos obtener una llave que no existe retornará null
const nombre2 = localStorage.getItem('nombre2');
console.log(nombre2);

// const productoJSON = localStorage.getItem('producto');
// console.log(productoJSON); // Retorna el objeto como un string

// Método para transformar string en objeto/array cuando tenga forma adecuada
const productoJSON = localStorage.getItem('producto');
console.log(JSON.parse( productoJSON ));

const meses = localStorage.getItem('meses');
console.log(JSON.parse( meses ));

// const meses2 = localStorage.getItem('meses2');
// const meses2Array = JSON.parse( meses2 );
// console.log(meses2Array);

const meses2Array = JSON.parse( localStorage.getItem('meses2') );
console.log(meses2Array);