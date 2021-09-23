// Comparando Mayor o Menor que

const dinero = 500;
const totalAPagar = 300;
const vuelto = (dinero, total) => dinero - total;

if(dinero >= totalAPagar){
    console.log(`Si podemos pagar, tu vuelto es ${vuelto(dinero, totalAPagar)}`);
} else{
    console.log(`Fondos insuficientes, te falta ${Math.abs(vuelto(dinero,totalAPagar))} para poder pagar.`);
}

/* Se recomienda que en las condicionales se ordene las variables de forma
que evalue lo que nos interesa comprobar primero */