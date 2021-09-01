// Crear y Comparar Booleans
// El tipo de dato Boolean solo puede tener 2 valores: true o false

const Boolean1 = true;
const Boolean2 = false;
const Boolean3 = 'true';

console.log(Boolean1);
console.log(Boolean2);

console.log(typeof Boolean1);

console.log(Boolean1 == Boolean3); // Retorna false
console.log(Boolean1 == eval(Boolean3)); // true

const Boolean4 = new Boolean(true);
console.log(typeof Boolean4); // Es un objeto, no un boolean