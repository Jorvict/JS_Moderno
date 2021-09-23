// Comparador Estricto

const puntaje = 1000;
const puntaj2 = "1000";

// if(puntaje != 1000){ // != diferende de / == igual a
//     console.log('¡Si! es diferente...');
// }

if(puntaje !== "1000"){ // Al seer estricto revisa por el valor y por el tipo de dato
    console.log('¡Si! es diferente...');
} else{
    console.log("No es diferente");
}

// El operador == no es estricto
// El operador === si es estricto