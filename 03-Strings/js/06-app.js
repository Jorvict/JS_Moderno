// String Methods - Repeat y Split
const producto = 'Monitor de 20 Pulgadas';

// Repeat te va a permitir repetir una cadena de texto
const texto = ' en Promoción'.repeat(2.6); // Si pones decimal, lo trunca
console.log(texto);
console.log(`${producto} ${texto} !!!`);


// Split te permite dividir un string y lo convierte en un array.
// Debes pasarle como argumento el carácter que será el separador de palabras
const actividad = 'Estoy aprendiendo JavaScript moderno';
console.log(actividad.split(" "));

const hobbie = 'Leer, caminar, escuchar música, escribir, aprender a programar';
console.log(hobbie.split(", "));

const tweet = "Aprendiendo JavaScript #JSModernoConJuan";
console.log(tweet.split('#'));