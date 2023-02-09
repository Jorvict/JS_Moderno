// Import permite traer la variable a este archivo
// NOTA: Se recomienda colocar todos los imports en la parte superior del archivo

// NOTA 2:  Los export default se importan fuera de las llaves {}, sino marcara error
//          Mientras que los export normales van dentro de las llaves {}

// NOTA 3: Se pueden asignar alias al realizar un import utilizando un "as"

// NOTA 4:  Como solo habrá un export default por archivo entonces fuera de las
//          llaves siempre habrá un único valor importado, el cual puede llamarse
//          distinto de la función ya que automaticamente se le aplicará un alias,
//          sin embargo se recomienda que se digite el mismo nombre para facilitar
//          la lectura del código y evitar confusiones

import alias, {nombreCliente as nameCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente} from './cliente.js'
import alias2, { Empresa } from './empresa.js';

// Imprimir variables importadas
console.log(nameCliente);
console.log(ahorro);
console.log(mostrarInformacion(nameCliente, ahorro));

// Ejecutar función importada
tieneSaldo(ahorro);

// Imprimir Clase importada
const cliente = new Cliente(nameCliente, ahorro);
console.log(cliente.mostrarInformacion());

// Importar empresa
const empresa = new Empresa('Código con Jorvict', 100, 'Aprendizaje en Línea');
console.log(empresa.mostrarInformacion());

// Llamar función del export default
alias();
alias2();