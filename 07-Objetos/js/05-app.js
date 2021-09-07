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