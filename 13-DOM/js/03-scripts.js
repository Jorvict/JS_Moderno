// getElementById
// Selecciona un elemento en base a su ID, recordar que en el código HTML no se debe repetir un ID por documento

const formulario = document.getElementById('formulario');
console.log(formulario);

// Cuando elemento no existe
//      En el caso de seleccionar por ID, retorna null cuando el elemento no existe a diferencia de classname 
//      que retorna un html collection vacio
const noExiste = document.getElementById('no-existe');
console.log(noExiste);

/* Es buena práctica utilizar solo un ID por documento en el HTML, en caso de que no se respete
esta sugerencia, el HTML no te mostrará un error, tampoco afectará a la ejecución del documento ni nada por el
estilo, sin embargo afectará cuando se intente buscar un elemento por su ID ya que el buscador por ID
solo mostrará el primer elemento que valide con el ID indicado, en caso de tener 2 elementos con el mismo ID,
no se mostrara el segundo */

/* Existen validadores de HTML que te podrán ayudar a verificar si un ID se repite */