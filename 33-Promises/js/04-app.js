// De callback hell a Promises
const paises = [];


/* 
    Tiene una sola línea porque es una arrow function expression por lo cual el
    return es implicito, en caso de que se deseara trasladar a function declaration
    se debe agregar la sintaxis de function y al instanciar el Promise dentro de las
    llaves se debe colocar un "return" al inicio 
*/
const nuevoPais = (pais) => new Promise ( resolve => {

    setTimeout(() => {
        
        paises.push(pais);

        // Lo que se coloque en el resolve es lo que se pasara en
        // el .then, se sugiere que sean resultados o respuestas
        resolve(`Agregado: ${pais}`);
    }, 3000);
});


nuevoPais('Alemania')
    .then( resultado => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Francia');
    })
    .then( resultado => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Inglaterra');
    })
    .then( resultado =>{
        console.log(resultado);
        console.log(paises);
    })



/////////////////////////////////////////////////////////
// Practica

const paises2 = [];

function mostrarPaises2(){

    console.log(paises2);
}


const nuevoPais2 = (pais) => new Promise( (resolve, reject) =>{

    setTimeout(() => {
        
        paises2.push(pais);
    
        resolve(`Agregado país ${pais}`);
    }, 1500);

});

nuevoPais2('Perú')
    .then( resultado => {
        console.log(resultado);
        mostrarPaises2(resultado);
        return(nuevoPais2('Colombia'));
    })
    .then( resultado =>{
        mostrarPaises2(resultado);
        return(nuevoPais2('Ecuador'));
    })
    .then( resultado =>{
        mostrarPaises2(resultado);
    })