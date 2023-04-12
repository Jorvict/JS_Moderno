function iniciarApp(){

    const selectCategorias = document.querySelector('#categorias');

    // En este caso si funciona el evento porque el Select ya existe en el index.html
    // a diferencia de casos anteriores donde el Select se generó con scripting (al vuelo)
    // para esos casos se utilizan los event handler, es decir el .onclick
    selectCategorias.addEventListener('change', seleccionarCategoria);

    obtenerCategorias();

    function obtenerCategorias(){

        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        fetch(url)
            .then( respuesta => respuesta.json())
            .then( resultado => mostrarCategorias(resultado.categories))
    }

    // Se establece un array vacio por defecto, sí la función no recibe ningun argumento para categorias, este tomara el valor de un array vacío
    function mostrarCategorias( categorias = []){ 

        categorias.forEach( categoria =>{

            const {strCategory} = categoria;

            // Se recomienda que al usar createElement el elemento se escriba en mayusculas
            const option = document.createElement('OPTION');
            option.value = strCategory;
            option.textContent = strCategory;

            selectCategorias.appendChild(option);
        });
    }

    function seleccionarCategoria(e){

        // Pasamos el evento porque ahí estará presente la seleción del usuario en el Select
        const categoria = e.target.value;
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;

        console.log(url)
    }
}

document.addEventListener('DOMContentLoaded', iniciarApp);