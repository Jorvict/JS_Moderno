function iniciarApp(){

    const selectCategorias = document.querySelector('#categorias');
    const resultado = document.querySelector('#resultado');
    const modal = new bootstrap.Modal('#modal', {});

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

        fetch(url)
            .then( respuesta => respuesta.json())
            .then( resultado => mostrarRecetas(resultado.meals))
    }

    function mostrarRecetas(recetas = []){

        limpiarHTML(resultado);

        const heading = document.createElement('H2');
        heading.classList.add('text-center', 'text-black', 'my-5');
        heading.textContent = recetas.length ? 'Resultados' : 'No hay resultados';
        resultado.appendChild(heading);
        
        // Iterar en los resultados
        recetas.forEach( receta => {
            
            const {idMeal, strMeal, strMealThumb} = receta;

            const recetaContenedor = document.createElement('DIV');
            recetaContenedor.classList.add('col-md-4');

            const recetaCard = document.createElement('DIV');
            recetaCard.classList.add('card', 'mb-4');

            const recetaImagen = document.createElement('IMG');
            recetaImagen.classList.add('card-img-top');
            recetaImagen.alt = `Imagen de la receta ${strMeal}`;
            recetaImagen.src = strMealThumb;

            const recetaCardBody = document.createElement('DIV');
            recetaCardBody.classList.add('card-body');

            const recetaHeading = document.createElement('H3');
            recetaHeading.classList.add('card-title', 'mb-3');
            recetaHeading.textContent = strMeal;

            const recetaButton = document.createElement('BUTTON');
            recetaButton.classList.add('btn', 'btn-danger', 'w-100');
            recetaButton.textContent = 'Ver Receta';
            // recetaButton.dataset.bsTarget = "#modal";
            // recetaButton.dataset.bsToggle = "modal"; // Toogle manda a llamar las funciones de JS de Bootstrap
            recetaButton.onclick = function(){
                seleccionarReceta(idMeal);
            }

            // Inyectar en el código HTML
            recetaCardBody.appendChild(recetaHeading);
            recetaCardBody.appendChild(recetaButton);

            recetaCard.appendChild(recetaImagen);
            recetaCard.appendChild(recetaCardBody);
            
            recetaContenedor.appendChild(recetaCard);
            
            resultado.appendChild(recetaContenedor);
        })
    }

    function seleccionarReceta(id){
        
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

        fetch(url)
            .then( respuesta => respuesta.json())
            .then( resultado => mostrarRecetaModal(resultado.meals[0]))
    }

    function mostrarRecetaModal(receta){

        const { idMeal, strInstructions, strMeal, strMealThumb} = receta;

        // Añadir contenido al modal
        const modalTitle = document.querySelector('.modal .modal-title');
        const modalBody = document.querySelector('.modal .modal-body');

        modalTitle.textContent = strMeal;

        /* InnerHTML es seguro siempre y cuando sepas de donde vienen los datos
        Sí es un API que tu mismo creaste y sanitizaste los datos, es bastante
        seguro utilizar innerHTML, sin embargo sí el usuario va a ingresar datos
        a un formulario Y DE AHÍ MISMO (Formulario) se utilizará el innerHTML, 
        puede ser bastante inseguro*/
        modalBody.innerHTML = `
            <img class="img-fluid" src="${strMealThumb}" alt =" Receta de ${strMeal}" />
            <h3 class = "my-3"> Instrucciones </h3>
            <p> ${strInstructions} </p>
            <h3 class = "my-3"> Ingredientes y Cantidades </h3>

        `;


        const listGroup = document.createElement('UL');
        listGroup.classList.add('list-group');
        // Mostrar cantidades e ingredientes
        for( let i = 1; i<= 20; i++){

            // console.log(receta[`strIngredient${i}`]);

            if(receta[`strIngredient${i}`]){

                const ingrediente = receta[`strIngredient${i}`];
                const cantidad = receta[`strMeasure${i}`];

                const ingredienteLi = document.createElement('LI');
                ingredienteLi.classList.add('list-group-item');
                ingredienteLi.textContent = `${ingrediente} - ${cantidad}`;

                listGroup.appendChild(ingredienteLi);
            }
        }

        modalBody.appendChild(listGroup);

        const modalFooter = document.querySelector('.modal-footer');
        limpiarHTML(modalFooter);

        // Botones de cerrar y favorito
        const btnFavorito = document.createElement('BUTTON');
        btnFavorito.classList.add('btn', 'btn-danger', 'col');
        btnFavorito.textContent = existeStorage(idMeal) ? 'Eliminar Favorito' : 'Guardar Favorito';

        // LocalStorage
        btnFavorito.onclick = () =>{

            if(existeStorage(idMeal)){

                eliminarFavorito(idMeal);
                btnFavorito.textContent = 'Guardar Favorito';
                return;
            }

            agregarFavorito({
                id: idMeal,
                titulo: strMeal,
                img: strMealThumb
            });
            btnFavorito.textContent = 'Eliminar Favorito';
        }

        const btnCerrarModal = document.createElement('BUTTON');
        btnCerrarModal.classList.add('btn', 'btn-secondary', 'col');
        btnCerrarModal.textContent = 'Cerrar';
        btnCerrarModal.onclick = () =>{
            modal.hide();
        }

        modalFooter.appendChild(btnFavorito);
        modalFooter.appendChild(btnCerrarModal);

        // Muestra el modal
        modal.show();
    }

    function agregarFavorito(recetaObj){

        /* 
            ?? es el operador nullish coalescing, también conocido como 
            función nula, en caso de que la expresión o evaluación del
            lado izquierdo marque NULL, va a aplicar lo que esté del
            lado derecho, en este caso asignar por defecto un array vacío
        */
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        localStorage.setItem('favoritos', JSON.stringify([...favoritos, recetaObj]));

    }

    function eliminarFavorito(id){

        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        const nuevosFavoritos = favoritos.filter( favorito => favorito.id !== id);
        localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));

    }

    function existeStorage(id){

        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        return favoritos.some( favorito => favorito.id === id);
    }

    function limpiarHTML(selector){

        while(selector.firstChild){
            selector.removeChild(selector.firstChild);
        }
    }
}

document.addEventListener('DOMContentLoaded', iniciarApp);