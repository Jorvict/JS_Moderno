// Pero primero, ¿qué es Try Catch?
/* 
    Lo que hace Try Catch es intentar ejecutar una pieza de código
    y sí no se puede, obtenemos una excepción que podría ser un mensaje
    de error para poderlo debuggear y prosigue con la ejecución del 
    código JS, recordemos que si JS detecta un error detendrá la ejecución
    del código justamente en el punto donde presentó el error, para
    estos casos es util trycatch ya que no se quedará "pasmado" en el 
    error sino que seguirá con la ejecución. Un ejemplo sería al intentar
    descargar un listado de alumnos, podemos escribir una función que
    consuma una API pero que en caso no se pueda (por ejemplo porque
    la API esté caída o saturada) lo que sucederá es que al usar el
    try catch podemos imprimir un mensaje de error que notificará al
    usuario que no se pudo descargar la data y tenga conocimiento del 
    incidente presentado y a su vez se podrá seguir ejecutando el
    código JS consecuente 
*/
console.log(1 + 1);


try {
    autenticarUsuario();    
} catch (error) {

    /*
        En caso de presentar error, caerá en catch y seguirá ejecutandose
        el código, llegando a imprimir el 4 de la última suma, un ejemplo
        de los errores que se pueden presentar son debido a falla de 
        credenciales como su usuario o contraseña, aunque se presenten 
        errores con ello la aplicación debe seguir funcionando 
        correctamente
    */
    console.log(error);
}


console.log(2 + 2);

/*
    El trycatch no se puede aplicar a todo el código en general, se 
    recomienda que solamente se utilice en las partes más críticas,
    como lo pueden ser: 
    ~ Conectar una base de datos
    ~ Consultar una API
    ~ Autenticar un usuario en un Login
    ~ Acciones que nos permitan que en caso de que falle nuestra app
        aún pueda seguir funcionando y recibir un feedback del error
*/