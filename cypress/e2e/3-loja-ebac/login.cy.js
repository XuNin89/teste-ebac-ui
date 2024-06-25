/// <reference types="cypress"/

describe('funcionalidade: login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username') .type ('erlandojunior89@gmail.com')
        cy.get('#password') .type ('SMTDrdbfugMEK7S')
        cy.get('.woocommerce-form > .button') .click ()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, erlandojunior89 (não é erlandojunior89? Sair)')
    })
    
})