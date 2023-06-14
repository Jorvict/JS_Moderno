/// <reference types="Cypress" />


describe('Llena los campos para una nueva cita y la edita', () =>{

    it('Campos nueva cita', () => {

        // La URL de visit es mas corta ya que establecimos una baseURL
        //  en el archivo cypress.config.js
        cy.visit('/index.html');

        // Con .type podemos llenar el campo seleccionado con el texto 
        //  que especifiquemos
        cy.get('[data-cy=mascota-input]')
            .type('Hook'); 
    
        cy.get('[data-cy=propietario-input]')
            .type('Jorvict Piña');

        cy.get('[data-cy=telefono-input]')
            .type('987456321');

        cy.get('[data-cy=fecha-input]')
            .type('2023-06-13');

        cy.get('[data-cy=hora-input]')
            .type('22:27');

        cy.get('[data-cy=sintomas-textarea]')
            .type('Solo come y duerme');


        // == Simula el click en el elemento seleccionado
        cy.get('[data-cy=submit-cita]')
            .click(); 

        // Seleccionamos el heading para validar que el texto sea correcto
        cy.get('[data-cy=citas-heading]')
            .invoke('text')
            .should('equal', 'Administra tus Citas');


        // Hacemos test a alerta de success 
        cy.get('[data-cy=alerta]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente');
        
        // Test para validar que se agregue una clase especifica a la alerta
        cy.get('[data-cy=alerta]')
            .should('have.class', 'alert-success');

    });


    it('Edita la cita', () => {

        cy.get('[data-cy=btn-editar]').click();

        cy.get('[data-cy=mascota-input]')
            .clear() // <- Método para limpiar el campo
            .type('Nuevo Hook');

        cy.get('[data-cy=submit-cita]')
            .click(); 

        cy.get('[data-cy=alerta]')
            .invoke('text')
            .should('equal', 'Guardado Correctamente');

        cy.get('[data-cy=alerta]')
            .should('have.class', 'alert-success');
    });
});