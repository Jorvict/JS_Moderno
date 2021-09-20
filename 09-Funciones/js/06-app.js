// Parametros por default

/* Algunas veces vas a llamar las funciones y no vas a tener todos los
parametros necesarios, en algunos casos son necesarios ciertos parametros,
como por ejemplo un número de cuenta bancario al realizar una
transferencia, pero en algunos otros casos hay parametros que no son
del todo necesarios u obligatorios a los cuales podremos establecerle
un valor por default en caso de que no sea ingresado dicho dato */

function saludar(nombre = 'Desconocido', apellido = '') {
    console.log(`Hola ${nombre} ${apellido}`);
}

/* Si se ingresan los argumentos respectivos para cada parametro, los
valores por dafult se sobrescribiran con los argumentos brindados*/
saludar('Jorvict', 'Piña');

saludar('Jorvict');
saludar();