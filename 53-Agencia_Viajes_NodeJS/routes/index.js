// Importamos express
import express from 'express';

// Importamos los controllers
import { paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales } from '../controllers/paginasController.js';

// Definimos el router
const router = express.Router();

/**
 * app.get es para cuando accedemos al site, en este caso el get se ejecuta
 * cuando accedemos a la ruta raíz, adicionalmente como segundo parametro
 * se establece una función callback en el cual contará con 2 parametros
 * que serán el REQUEST y el RESPONSE.
 * El REQUEST es lo que se envía al site o la petición que estamos realizando
 *      (P.ej: Un formulario llenado, solicitar acceso a una URL del site)
 * El RESPONSE es lo que Express te envía o responde (P.ej: Un error por datos 
 *      incorrectos, un error porque la página no existe, error porque falló
 *      la autenticación del usuario, etc.)
 * Cabe mencionar que puedes establecer tu propia respuesta con "res.send"
 * dentro del callback de .get, tener en cuenta que de momento solo utilizar
 * 1 res.send ya que solo se ejecuta el primero.
 * 
 * RECORDAR QUE GET ES CUANDO VISITAS UNA URL
 */
router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/testimoniales', paginaTestimoniales);

export default router;