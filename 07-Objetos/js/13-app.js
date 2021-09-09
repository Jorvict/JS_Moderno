// Object .keys, .values y .entries  -  Ultimos métodos para objetos

const producto = {
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true
}

// .keys -      Nos va a retornar un array con las keys del objeto
// Colocamos Object.keys y dentro del método colocamos el objeto del 
// cual queremos obtener las keys.
// Muchas veces se utiliza esto para saber si un objeto está vacío
console.log(Object.keys( producto ));


// .values -    Nos va a retornar un array con los valores que corresponden 
//              a las keys del objeto
console.log(Object.values( producto ));

// . entries -  Nos va a retornar un array con las keys y sus 
//              valores respectivos, esto valores serán retornados en pares
// Se puede utilizar para una hash table
console.log(Object.entries( producto )); 
