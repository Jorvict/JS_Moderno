// El self
/**
 * Se refiere a la ventana global (window), sin embargo suele usarse mucho
 * en los services workers y en los web workers que trabajan con los
 * Progressive web application (PWA), y es que en un service worker no está
 * disponible la palabra "window, es por ello que se utiliza "self"
 */


//window === self; <- True
//window.self === self; <- True
// Sí cambiamos window por self igualmente se ejecutra el código
self.onload = () => {
    console.log('Ventana Lista');
}


const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 30,
    disponible: true,
    mostrarInfo: function () {
        return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
    }
}

console.log(producto.mostrarInfo());

// Puedes modificar el código para que en vez de usar this uses self
const producto2 = {
    nombre: 'Monitor 32 Pulgadas',
    precio: 60,
    disponible: true,
    mostrarInfo: function () {
        const self = this;
        return `El producto ${self.nombre} tiene un precio de ${self.precio}`;
    }
}
console.log(producto2.mostrarInfo());

// O tambien puedes colocar la variable en la ventana global de window
// Tener en cuenta que para ello se debe eliminar const self = this;

window.nombre3 = 'Tablet';
window.precio3 = 300;
const producto3 = {

    disponible: true,
    mostrarInfo: function () {
        
        
        return `El producto ${self.nombre3} tiene un precio de ${self.precio3}`;
    }
}

console.log(producto3.mostrarInfo());
