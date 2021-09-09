// Copiar 2 objetos  -  Unir 2 objetos

const producto = {
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true,
}

const medidas = {
    peso : '1kg',
    medida : '1m'
}

console.log(producto);
console.log(medidas);

// Utilizando el método assign
const resultado = Object.assign(producto, medidas);
console.log(resultado);

// Spread Operator o Rest Operator
const resultado2 = {...producto, ...medidas}
console.log(resultado2);

/*Nota: Los 3 puntos del Rest significan que tomen una copia, es decir,
toma una copia del objeto producto y la asigna dentro del objeto resultado2,
luego topa una copia del objeto medidas y la asigna dentro del objeto
resultado2 de igual manera */