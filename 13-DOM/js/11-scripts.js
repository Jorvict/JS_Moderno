// Ejemplo más avanzado de lo que podemos hacer con JS
const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');


// El primer argumento es el tipo de evento que debe detectar, el segundo argumento es la función que ejecutará al ejecutarse el evento (No es necesario que lleve los paréntesis)
btnFlotante.addEventListener('click', mostrarOcultarFooter); 

function mostrarOcultarFooter(){
    if(footer.classList.contains('activo')){ // Permite verificar sí un elemento contiene o no una clase
        footer.classList.remove('activo');
        this.classList.remove('activo'); // This hace referencia a lo que mandó a llamar a esa función, en éste caso quien mando a llamar a la funcion mostrarOcultarFooter fue el elemento btnFlotante
        this.textContent = 'Idioma y moneda';
    } else{
        footer.classList.add('activo');
        this.classList.add('activo'); // Debido a que btnFlotante es quien mando a llamar la función, se puede cambiar por this dentro del codigo de la funcion a la cual llamó
        this.textContent = 'X Cerrar';
    }
}