// .concat
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];

// .concat
const resultado= meses.concat(meses2, meses3, 'Otro mes');

console.log(resultado);

// spread operator
const resultado2 = [...meses, ...meses2, ...meses3, 'Otro mes'];
console.log(resultado2);


/* NOTA: al usar el spread operator, el dato debe ser
un array ya que el spread operator separa y obtiene cada
elemento del array, es decir, sí deseas clonar un string,
simplemente coloca el string sin los ... ya que de lo
contrario el spread operator obtendrá cada carácter del
string y los asignará en índices diferentes */

/* Igualmente hay que tener en consideración que el orden
en el cual se ingresan los valores con el spread operator
SI INFLUIRA en el orden en el cual serán almacenados e 
impresos los datos */

const resultado = meses.concat(meses3, meses2, 'Otro mes');
console.log(resultado);

const resultado3 = [...meses3, ...meses, ...meses2, 'Otro mes'];
console.log(resultado3);