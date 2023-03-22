// De callback hell a Promises
const paises = [];

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