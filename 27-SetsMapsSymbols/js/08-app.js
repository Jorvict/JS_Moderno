// Iteradores en javascript
const ciudades = ['Londres', 'New York', 'Madrid', 'Paris']; // Array
const ordenes = new Set([123, 231, 131, 102]); // Set
const datos = new Map(); // Map

datos.set('nombre', 'Juan');
datos.set('profesión', 'Desarrollador Web');

// ===== Entries Iterator ===== 
// Imprime llave-valor. Sí no existe llave la creará
for(let entry of ciudades.entries() ){
    // Imprime llave-valor del array ciudades
    // console.log(entry); 
}

for(let entry of ordenes.entries() ){
    // Imprime valor-valor del Set ordenes 
    // (Debido a que los Set no tienen keys pero entries 
    // le genera una key con el valor del valor)
    // console.log(entry); 
}

for(let entry of datos.entries() ){
    // Imprime llave-valor del Map datos 
    // console.log(entry); 
}


// ===== Values Iterator =====
// Imprime valor
for( let value of ciudades.values()){
    // Imprime valores del array ciudades
    // console.log(value)
}

for( let value of ordenes.values()){
    // Imprime valores del Set ordenes
    // console.log(value)
}

for( let value of datos.values()){
    // Imprime valores del Map datos
    // console.log(value)
}


// ===== Keys Iterator =====
// Imprime las llaves del array (El index de las posiciones)
for( let keys of ciudades.keys()){
    // console.log(keys);
}

for( let keys of ordenes.keys()){
    // Imprime las keys del Set, pero el Set al no tener llaves
    // se generan nuevas keys iguales al valor iterado
    // console.log(keys);
}

for( let keys of datos.keys()){
    // Imprime las llaves del Map
    // console.log(keys);
}

// ===== Default =====
/* NOTA: Cada uno de los tipo de datos mostrados anteriormente,
ya sea un array, un Set o un Map, tienen un iterador por Default */
for(let ciudad of ciudades){
    // En array el iterador por Default es por valores (Value Iterator)
    console.log(ciudad);
}


for(let orden of ordenes){
    // En Set el iterador por Default es por valores (Value Iterator)
    console.log(orden);
}


for(let dato of datos){
    // En Map el iterador por Default es llave-valor (Entries Iterator)
    console.log(dato);
}