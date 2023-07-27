const guardarTestimonial = (req, res) => {

    // req.body será lo que se está mandando en el formulario
    // En un inicio puede que se mande vacío al servidor
    // Esto sucede porque debemos habilitar el body parser en el index principal
    // El name de los campos del formulario es con lo que se identificarán las
    // keys en el objeto


    // Validar campos del formulario
    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    if(nombre.trim() === ''){
        errores.push({mensaje: 'El nombre está vacío'}); 
    }

    if(correo.trim() === ''){
        errores.push({mensaje: 'El correo está vacío'}); 
    }

    if(mensaje.trim() === ''){
        errores.push({mensaje: 'El mensaje está vacío'}); 
    }

    console.log(errores);

}


export{

    guardarTestimonial
}