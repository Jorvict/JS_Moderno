/*
    Intersection Observer, es una API nativa de JS
    Este nos va a permitir identificar cuando un elemento
    está visible en el viewport, se puede utilizar para el
    popular "Scroll infinito" que consiste en agregar más contenido
    según haces scroll (lo que usan las redes sociales), o también
    para el lazy loading de algunas imágenes, que consiste en
    retrasar la carga de imágenes en una página web hasta que el 
    usuario las necesite. En lugar de cargar todas las imágenes al
    mismo tiempo, lo que puede ralentizar la velocidad de carga 
    de la página, se cargan solo las imágenes que se muestran en 
    la pantalla del usuario y las que están a punto de aparecer 
    en la pantalla. Esta técnica puede mejorar significativamente 
    la velocidad de carga de una página, lo que a su vez mejora 
    la experiencia del usuario y aumenta la probabilidad de que 
    se quede en la página y la explore más a fondo.

*/
document.addEventListener('DOMContentLoaded', () =>{

    // Habilitamos el observer (Habilitar no significa que ya funciona )
    const observer = new IntersectionObserver( (entries) =>{

        // Escoger el 0 ya que de momento es lo que más nos importa
        /* El observer se ejecutará principalmente cuando isIntersecting
            o isVisible cambien */
        // Sí el isIntersecting es true el elemento está en pantalla
        /* console.log(entries[0]); */

        if(entries[0].isIntersecting){
            console.log('Ya está visible');
        }
    });

    // Indicar que elemento es el que se va a revisar
    observer.observe(document.querySelector('.premium'));

});