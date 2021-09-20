// Como se Comunican las funciones

/* Se recomienda que tu codigo se divida entre varia funciones que
realicen una operación especifica y luego manden a llamar a otra
función, de esta forma tendrás funciones que se comunican unas
con otras, es decir, las funciones se van encadenando y se van 
llamando */

iniciarApp();

function iniciarApp() {
    console.log('Iniciando App...')

    segundaFuncion(); 
    // Se coloca aquí y no cuando se llama a la función iniciarApp() 
    // en el scope global ya que la segundaFuncion debe iniciar 
    // a ejecutarse luego de que ya culminó de ejecutarse todo el 
    // código de iniciarApp  
}

function segundaFuncion() {
    console.log('Desde la segunda función');

    usuarioAutenticado('Jorvict');
}

function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario... espere...');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}