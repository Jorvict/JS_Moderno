// Funciones en Objetos y acceder a sus valores  -  This

const nombre = "Hola";
const precio = 20;

const producto = {
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true,
    mostrarInfo : function(){
        console.log(`El producto:${this.nombre} tiene un precio de: ${this.precio}`);
        // Al colocar "this", va a buscar la propiedad dentro del mismo objeto
        // De esta forma evitamos que use la variable nombre que esta en el scope global
    }
}

const producto2 = {
    nombre: 'Tablet',
    precio: 3000,
    disponible: true,
    mostrarInfo : function(){
        console.log(`El producto:${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

/* La palabra This se refiere a los valores que existen en el mismo objeto */
/* This es una forma de referirse al objeto en sí mismo */
producto.mostrarInfo();
producto2.mostrarInfo();