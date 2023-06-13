/// <reference types="Cypress" />

// En Cypress también se agrupa con describe
describe('Carga la página principal', () =>{

    // Pero las funciones se definen con "it"
    it('Carga la página principal', () => {
        // La gran parte de las funciones de Cypress inician con "cy"

        // Primero debemos conectarnos al proyecto
        cy.visit('http://127.0.0.1:5500/52-Testing-Cypress/index.html');

        // Validamos que el elemento "h1" exista
        cy.get('h1').should('exist');

        // Validamos que dicho elemento h1 contenga el texto especificado
        cy.contains('h1', 'Administrador de Pacientes de Veterinaria');


    });
});