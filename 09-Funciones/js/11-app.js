// Las Ventajas de los Arrow Functions

// Pasar parametros en function
const aprendiendo = function (tecnologia, tecnologia2) {
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}
aprendiendo('Javascript', 'Node.js');

// Pasar parametros en arrow function
/*
    Cuando le pasas solamente un parametro a un arrow function, los
        parentesis de los parametros son opcionales.
        const aprendiendo2 = tecnologia => `Aprendiendo ${tecnologia}`;
    En un arrow function cuando le pasas 2 parametros, ahí si sería
        necesario encerrar los parametros en un paréntesis.
*/
const aprendiendo2 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;
console.log(aprendiendo2('JS', 'Node.JS'));