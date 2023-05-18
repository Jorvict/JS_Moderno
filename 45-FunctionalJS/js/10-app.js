// Composition
/**
 * Basicamente viene a ser una alternativa a las clases, es escribir
 * varias funciones e ir utilizando en tus objetos lo que creas que
 * vas a necesitar, en otras palabras, composition se utiliza cuando
 * tienes funciones que se pueden compartir entre objetos
 * 
 */

const obtenerNombre = info => ({
    
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`);
    },
});

const guardarEmail = info => ({

    agregarEmail(email){
        console.log(`Guardando email en ${info.nombre}`);
        info.email = email;
    }
})

const obtenerEmail = info => ({

    mostrarEmail(){
        console.log(`Email: ${info.email}`);
    }
});

// Diferentes entre clases
const obtenerEmpresa = info => ({

    mostrarEmpresa(){
        console.log(`Empresa: ${info.empresa}`);
    }
})

const obtenerPuesto = info => ({

    mostrarPuesto(){
        console.log(`Empresa: ${info.puesto}`);
    }
})


// Clase de cliente
function Cliente(nombre, email, empresa) {

    let info ={
        nombre,
        email,
        empresa
    }

    // Object.assign toma una función y la copia hacia dentro del objeto
    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info)
        // De esta manera tomamos la función obtenerNombre y lo copiamos
        // dentro de Cliente, y a su vez repetimos con las demás funciones
    )

    // Es lo mismo que escribir:
    // return Object.assign(info, obtenerNombre(info))
}

// Clase de Empleado
function Empleado(nombre, email, puesto) {

    let info ={
        nombre,
        email,
        puesto
    }

    return Object.assign(info, obtenerNombre(info), guardarEmail(info), obtenerEmail(info), obtenerPuesto(info))
}

const cliente = Cliente('Jorvict', 'correo@correo.com', 'Codigo con Jorvict');
cliente.mostrarNombre();
cliente.mostrarEmail();
cliente.mostrarEmpresa();
console.log('########################################################')

const empleado = Empleado('Enrique', 'empleado@empleado.com', 'Programador');
empleado.mostrarNombre();
empleado.mostrarEmail();
empleado.mostrarPuesto();
console.log('########################################################')


const cliente2 = Cliente('Rachel', null, 'Codigo con Jorvict');
cliente2.agregarEmail('rachel@correo.com');
cliente2.mostrarEmail();
console.log('########################################################')

const empleado2 = Empleado('Emily', null, 'Programador');
empleado2.agregarEmail('emily@correoempleado.com');


console.log(cliente);
console.log(empleado);


// El project manager suele establecer sí se utilizara composition o clases