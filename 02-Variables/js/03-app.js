// ======================================
// === Diferencias entre let y const ====
// ======================================

/*
    - const no puede ser reasignado
    - Las variables con const, obligatoriamiente deben 
        inicializar con un valor, no se le puede asignar el valor
        después. Sí por algún motivo el valor va a cambiar o sí
        aún no conoces el valor, entonces se debe utilizar let
*/

const producto = 'Tablet';
// producto = 'Monitor'; Si está descomentada, la consola mostrará error

const precio = 20;
// precio = 20; const siempre debe estar inicializada con un valor

// No es recomendable, se puede asignar el valor de un const a un let
let costo = precio;
console.log(costo);