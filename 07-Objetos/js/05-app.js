// Objetos dentro de Objetos
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

console.log(producto);

console.log(producto.informacion.fabricacion.pais);


// Objeto dentro de objeto 2
const localizacion = {
    continente : 'América',
    pais : 'Perú',
    region : {
        departamento : 'Lima',
        distrito: 'Lima'
    },
    clima: {
        humedad: '80%',
        altura: '100m'
    }
}
console.log(localizacion.region.distrito);


// Objeto dentro de objeto 3
const mobiliaria = {
    inmueble : 'Casa',
    habitaciones : 3,
    baños: 2,
    direccionLocal: {
        direccion : 'Jr Alonso 817',
        distrito : 'San Juan',
        departamento : 'Lima'
    },
    direccionInternacional : {
        pais: 'Lima',
        continente: 'América del sur'
    }
}
console.log(mobiliaria.direccionLocal.distrito);