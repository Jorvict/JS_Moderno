// Importamos el model de Viaje para poder realizar consulta a DB
import { Viaje } from '../models/Viaje.js';

// Establecemos las funciones para renderizar las páginas que serán enrutadas
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

const paginaViajes = async (req, res) =>{

    // Consultar a la DB los viajes
    const viajes = await Viaje.findAll();

    console.log(viajes)


    res.render('viajes', {
        pagina: 'Próximos viajes',
        viajes // Es igual a viajes:viajes
    });
}

const paginaTestimoniales = (req, res) =>{
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    });
}

// Exportamos funciones de renderización para que sean usadas por el router
export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales
}