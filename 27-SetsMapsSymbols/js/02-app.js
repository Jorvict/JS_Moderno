// Que es un WeakSet y en que se diferencia de un Set
// En el Set se puede pasar todo tipo de datos (objetos, arrays, números, booleans, etc)
// En el WeakSet solo se pueden pasar objetos, no acepta ningún otro tipo de valor

const weakSet = new WeakSet();

const cliente = {
    nombre: 'Jorvict',
    saldo:100
}

const nombre = 'Jorvict'; // Es un string, no un objeto

// WeakSet y Set comparten algunos metodos

// Agregar dato
weakSet.add(cliente);
// weakSet.add(nombre); // Mostrará error ya que se le está pasando un string

// Comprobar si existe valor
console.log(weakSet.has(cliente)); // Retorna true porque si existe la variable dentro del WeakSet

// Eliminar el valor del WeakSet
weakSet.delete(cliente);

// No existe ya que weakSet no comparte este method
// NOTA: Los WeakSet no son iterables, por lo cual no se puede usar forEach
console.log(cliente.size)


console.log(weakSet)