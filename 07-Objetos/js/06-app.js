// Destructuring de Objetos Anidados

const producto = {
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true,
    informacion: {
        medidas : {
            peso : '1kg',
            medida: '1m'
        },
        fabricacion : {
            pais : 'China'
        }
    }
}

const {nombre, informacion, informacion: {fabricacion, fabricacion: {pais}}} = producto;
console.log(nombre);
// Informacion No existe debido a que solo extrae fabricacion y no crea variable de 
// información, a no ser que creeemos una variable en el destructuring
// especificamente para informacion
console.log(informacion); 
console.log(fabricacion); 
console.log(pais);

// Destructuring de objetos anidados 2
const localizacion = {
    continente : 'América',
    pais : 'Perú',
    region : {
        departamento : 'Lima',
        distrito: 'San Juan'
    },
    clima: {
        humedad: '80%',
        altura: '100m'
    }
}
const {
        continente,
        pais : nacion, // Añadiendo alias es destructuring
        region : {departamento, distrito}, 
        clima : {humedad, altura}
    } = localizacion;

console.log(continente);
console.log(nacion);
console.log(departamento);
console.log(distrito);
console.log(humedad);
console.log(altura);

// Destructuring de objetos anidados 3, añadiendo alias a todas las keys
console.log('Objeto 3');

const mobiliaria = {
    inmueble : 'Casa',
    habitaciones : 3,
    baños: 2,
    direccionLocal: {
        direccion : 'Jr Alonso 817',
        distrito : 'San Juan',
        departamento : 'Lima',
        sector: {
            Tier: 'Medio'
        }
    },
    direccionInternacional : {
        pais: 'Lima',
        continente: 'América del sur'
    }
}
const {
    inmueble : property, 
    habitaciones : rooms, 
    baños : bathrooms, 
    direccionLocal : {direccion : address, distrito : district, departamento : department, sector : {Tier}},
    direccionInternacional : {pais : country, continente : continent}
    } = mobiliaria;

console.log(property);
console.log(rooms);
console.log(bathrooms);
console.log(address);
console.log(district);
console.log(department);
console.log(Tier);
console.log(country);
console.log(continent);