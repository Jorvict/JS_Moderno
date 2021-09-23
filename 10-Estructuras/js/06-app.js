// El Operador && para revisar que se cumplan 2 o más condiciones

/* El operador && (AND) revisa que se cumplan 2 o más condiciones que se
encuentre dentro del IF, por ejemplo al comprar en Amazon, debes
tener una cuenta Y tener saldo disponible Y el producto debe estar 
disponible. Sí alguna de todas las condiciones no se cumple, 
automaticamente pasa al siguiente if o al else*/

const usuario = true;
const puedePagar = true;

if(usuario && puedePagar){

    console.log('Si puedes comprar');

} else if(!puedePagar && !usuario){

    console.log('No, no puedes comprar');
    
} else if(!usuario){

    console.log('Inicia sesión o regístrate');

} else if(!puedePagar){

    console.log('Fondos insuficientes');

}