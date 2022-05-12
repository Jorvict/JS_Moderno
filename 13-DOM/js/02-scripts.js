// getElementsByClassName
// Seleccionas elementos (Plural) por su clase y los retorna en un HTML collection (Similar a un array)

// Imprimir header
const header = document.getElementsByClassName('header'); // Tener cuidado ya que al escribir el nombre la clase, es sensible a Mayúsculas, escribir clase tal cual está en el HTML
console.log(header);

// Imprimir Hero
const hero = document.getElementsByClassName('hero');
console.log(hero);


// Sí las clases existen más de 1 vez, retornará un HTML coleection con todos los elementos que tienen ese nombre de clase
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

// Sí una clase no existe al intentar buscarla con getElementsByClassName, el HTML collection retornado estará vacío
// (No mostará ningún error ni advertencia si la clase no existe, solo mostrará el Html collection vacío)
const noExiste = document.getElementsByClassName('noExiste');
console.log(noExiste); 


// NOTA: Recordar que los métodos son sensibles a mayusculas, sí se escribe getElementsByClassName sin respetar las mayusculas
// entonces el método no se podrá ejecutar, a pesar de que emmet facilita la escritura de la sintaxis, verificar que no se
// presenten error de tipeo en el código