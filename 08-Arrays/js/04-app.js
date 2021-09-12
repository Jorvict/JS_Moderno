// Agregar nuevos valores a un array
/* Al igual que los objetos, los arreglos también se pueden modificar
aunque estén declarados con const */

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

// Modifica el mes de Enero
meses[0] =  'Nuevo mes';
meses[7] = 'Ultimos mes'; // Se crea un nuevo valor dentro del array
meses[10] = 'Mes fuera de rango' 
/* Debido a que no se han definido los índices previos (entre 7 y 10), 
JS simplemente los omite y asigna el valor especificado en el índice
especificado, sin embargo hay que tener en consideración que existen
lenguajes que si crean los espacios en el array pero los dejan vacíos */ 
console.table(meses);

/* Algunas variables que hayan sido declaradas con const y se pueden
modificar son arreglos y objetos, salvo que el objeto sea congelado o
sellado */