const paginaInicio = (req, res) => {

    res.render('inicio', {
        pagina: 'Inicio'
    });

    /* res.json({
        id: 1 Express envía un JSON al usuario del site
    }); */

    // res.render(); // Se utiliza para mostrar una vista
}

const paginaNosotros = (req, res) => {

    const viajes = 'Cambiando el texto';

    // El .pug renderizado, dentro del objeto consecutivo van todos los
    //datos que requerimos enviar a dicha vista
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = (req, res) =>{




    
    res.render('viajes', {
        pagina: 'Viajes',
        // viajes // Es igual a viajes:viajes
    });
}

const paginaTestimoniales = (req, res) =>{
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    });
}


export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales
}