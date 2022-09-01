// Eventos al dar scroll en el mouse
// window.addEventListener('scroll', () =>{
//     console.log('scrolling');
// })


window.addEventListener('scroll', () => {
    // const scrollPX = window.scrollY;
    // console.log(scrollPX);

    const premium = document.querySelector('.premium');
    // const ubicacion = premium.getBoundingClientRect(); // Nos muestra a que distancia se encuentra el elemento (tanto del top como del bottom) - (Mientras mayor sea el valor de TOP, mas abajo esta el elemento en comparacion a nuestro scroll actual)
    console.log(ubicacion); // Enviar la ubicación a la consola para ir debuggeando

    if(ubicacion.top < 885){
        console.log('El elemento ya está visible');
    }else{
        console.log('Aún no, da más scroll');
    }
})