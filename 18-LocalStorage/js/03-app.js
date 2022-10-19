// Eliminar y actualizar elementos de localStorage


// Eliminar la llave edad
localStorage.removeItem('edad');

/*  Actualizar un registro, debido a que localStorage no cuenta con un update
    lo que se realiza es obtener la data de una llave previamente creada, se
    modifica y se vuelve a agregar a localStorage con el mismo nombre
*/
const mesesArray = JSON.parse( localStorage.getItem('meses') );
console.log(mesesArray);
mesesArray.push('Nuevo mes');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify( mesesArray ));

// localStorage.clear(); limpia toda la data almacenada en el local storage