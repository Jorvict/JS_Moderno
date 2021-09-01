const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// Revisar si 2 números son iguales
console.log(numero1 == numero3);
console.log(numero1 == numero2);

// Comparador estricto (No realiza conversión de dato)
console.log(numero1 === numero2);
console.log(numero1 === parseInt(numero2));
console.log(typeof numero1);
console.log(typeof numero2);

// Diferente
const password1 = 'admin';
const password2 = 'Admin';

console.log(password1 != password2);
console.log(numero1 != numero2);
console.log(numero1 !== parseInt(numero2));
// ECMAScript 2015 permitió que la funcion parseInt y las demas sean 
// globales y no tener que usar la clase Number previamente