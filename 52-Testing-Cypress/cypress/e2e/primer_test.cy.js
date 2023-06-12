
// En Cypress también se agrupa con describe
describe('Carga la página principal', () =>{

    // Pero las funciones se definen con "it"
    it('Carga la página principal', () => {

        // Conectarnos al proyecto
        cy.visit('http://127.0.0.1:5500/52-Testing-Cypress/index.html');

        // La gran parte de las funciones de Cypress inician con "cy"
        cy.contains('h1', 'Administrador de Pacientes de Veterinaria');
    });
});