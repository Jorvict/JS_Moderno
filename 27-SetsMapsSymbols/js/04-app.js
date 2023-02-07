// Que son los WeakMaps
/* Son los menos utilizados, pero son bastante útiles para 
mantener una serie de datos como privados, solamente 
aceptan objetos como keys */
const producto = {
    idProducto: 10
}

const weakmap = new WeakMap();
weakmap.set(producto, 'Monitor');

// Verificar sí existe el objeto "producto" dentro de nuestro WeakMap
console.log(weakmap.has(producto));

// Extraer la información
console.log(weakmap.get(producto));

// No puedes conocer la extensión de un WeakMap
console.log(weakmap.size); // Retorna undefines porque no se puede saber

// Eliminar un valor
console.log(weakmap.delete(producto));

console.log(weakmap);


// ===== Ejemplo adicional =====
/* Como nota adicional, los WeakMap también son útiles para asociar 
información con un objeto sin tener que preocuparse por su vida
útil o sin preocuparse porque tenga un impacto en la memoria ya
que la información solamente se mantiene mientras exista el objeto
pero una vez que el objeto se ha eliminado la información del
weakmap también desaparece */
let weakmap2 = new WeakMap();

let objeto1 = {
    valor: 1,
}

let objeto2 = {
    valor: 2,
}

weakmap2.set(objeto1, "Información relacionada con Objeto1");
weakmap2.set(objeto2, "Información relacionada con Objeto2");

console.log(weakmap2.get(objeto1));
console.log(weakmap2.get(objeto2));

objeto1 = null; // Eliminamos el objeto utilizado como key

console.log(weakmap2.has(objeto1)); // Retorna false