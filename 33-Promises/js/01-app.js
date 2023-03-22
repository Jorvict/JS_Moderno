// Ejemplo de Callbacks
// Un callback es útil sí se agregó un nuevo registro mientras descargabamos
// la data ya existente, ya que ese ultimo registro no lo vamos a tener

const paises = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra'];

// Como primer argumento se le pasa un valor
// Como segundo argumento se le pasa un callback
function nuevoPais( pais, callback){
    
    setTimeout(() => {
        
        paises.push(pais);
        callback();
    }, 2000);
}

function mostrarPaises(){

    setTimeout(() => {
        
        paises.forEach( pais =>{
            console.log(pais);
        })
    }, 1000);
}

mostrarPaises();

// Vuelve a llamar a la función monstrarPaises la cual estará actualizada
nuevoPais('Alemania', mostrarPaises);