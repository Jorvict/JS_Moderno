/// <reference types="Cypress" />

describe('Valida el formulario', () => {
    it('Submit al formulario y mostrar la alerta de error', () => {

        // Siempre debemos visitar la web al inicio
        cy.visit('http://127.0.0.1:5500/52-Testing-Cypress/index.html');

        // Seleccionar un elemento del DOM con cy.get, se podría decir que 
        //  es como el document.querySelector
        cy.get('[data-cy=formulario]')
            .submit();// Presiona sobre el botón del formulario (Crear cita)



        // (Recordar que cuando sean elementos generados por Scripting, 
        //  también generar el atributo data-cy)
        
        // Hacemos test a alerta de error 
        cy.get('[data-cy=alerta]')
            .invoke('text')
            .should('equal', 'Todos los campos son Obligatorios');
        
        // Test para validar que se agregue una clase especifica a la alerta
        cy.get('[data-cy=alerta]')
            .should('have.class', 'alert-danger');
    });
})