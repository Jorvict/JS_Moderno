// querySelectorAll
// Es una variante de querySelector, la diferencia es que querySelector solo retorna el primer elemento y máximo retorna 1.
// A diferencia de querySelectorAll, este no se va a limitar a retornar solamente el primero de los elementos filtrados.

const card = document.querySelectorAll('.card');
console.log(card);

// Al mostrar el resultado en la consola, se mostrará un NodeList el cual tambien funciona como un array
// Nota: Un Nodo se refiere a elementos del HTML como parrafos, divs, etc


// Usando el querySelectorAll para filtrar por ID
// Como se mencionó anteriormente, por buenas prácticas un ID no se debe repetir en un documento de HTML, en el caso de éste selector
// Sí 2 o más elementos filtrados tienen el mismo ID asignado, JS no mostrará ningún mensaje de error o de advertencia
const formularios = document.querySelectorAll('#formulario');
console.log(formularios);

// Sí un elemento no existe
const noExiste = document.querySelectorAll('no-existe');
console.log(noExiste); // Retornará un NodeList vacío