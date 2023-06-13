/// <reference types="Cypress" />

// En Cypress también se agrupa con describe
describe('Carga la página principal', () =>{

    // Pero las funciones se definen con "it"
    it('Carga la página principal', () => {
        // La gran parte de las funciones de Cypress inician con "cy"

        // Primero debemos conectarnos al proyecto
        cy.visit('/index.html');

        // Se aplica buenas prácticas de Cypress seleccionando elementos
        // Verificar que el elemento "h1" exista
        cy.get('[data-cy="titulo-proyecto"]').should('exist');

        // Verificar que dicho elemento h1 contenga el texto especificado
        cy.contains('[data-cy="titulo-proyecto"]', 'Administrador de Pacientes de Veterinaria');


        // Verificar que exista el elemento y contenga un texto en específico
        cy.get('[data-cy="titulo-proyecto"]')
            .invoke('text') // Seleccionamos su texto
            .should('equal', 'Administrador de Pacientes de Veterinaria')

        // Verificar el texto de las citas
        // El selector puede ir sin comillas
        cy.get('[data-cy=citas-heading]')
            .invoke('text')
            .should('equal', 'No hay Citas, comienza creando una');

        cy.get('[data-cy=citas-heading]')
            .invoke('text')
            .should('not.equal', 'Jorvict Piña');    
    });
});