// Mediator Pattern - Categoría: De estructuración
/**
 * Es un patrón de diseño que se comunica con diferentes objetos a la vez,
 * el mediador define objetos ya localizados para objetivos específicos
 */

// Vendedor y Comprador se van a comunicar por medio del objeto Subasta

// ===== Vendedor =====
function Vendedor(nombre) {
    
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {

    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente artículo ${articulo}, iniciamos con un precio de ${precio}`);
    },
    vendido: comprador => {
        console.log(`Vendido a ${comprador}`);
    }
}

// ===== Comprador =====
function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre} : ${cantidad}`)
    }
}


// ===== Subasta =====
function Subasta() {
    
    let compradores = {};

    return{
        registrar: usuario => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}


// Crear Objetos
const jorvict = new Comprador('Jorvict');
const enrique = new Comprador('Enrique');
const vendedor = new Vendedor('Vendedor de Autos');
const subasta = new Subasta();


// Registrar compradores y vendedor en la subasta (Subasta es el mediador)
subasta.registrar(jorvict);
subasta.registrar(enrique);
subasta.registrar(vendedor);



// Ofertas
vendedor.oferta('Mustang 66', 300);

jorvict.oferta(350, jorvict);
enrique.oferta(450, enrique);
jorvict.oferta(500, jorvict);
enrique.oferta(700, enrique);

vendedor.vendido('Enrique');
console.log(jorvict)