/// <reference types="cypress"/

describe('funcionalidade: login', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')   
    });
    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username') .type ('erlandojunior89@gmail.com')
        cy.get('#password') .type ('SMTDrdbfugMEK7S')
        cy.get('.woocommerce-form > .button') .click ()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, erlandojunior89 (não é erlandojunior89? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário invalido', () => {
        cy.get('#username') .type ('junior89@gmail.com')
        cy.get('#password') .type ('SMTDrbfugMEK7S')
        cy.get('.woocommerce-form > .button') .click ()
        
        cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido' )
        cy.get('.woocommerce-error').should('exist')
        
    });
    
    it('Deve exibir uma mensagem de erro ao inserir senha invalida', () => {
        cy.get('#username') .type ('erlandojunior89@gmail.com')
        cy.get('#password') .type ('SMTDfugMEK7S')
        cy.get('.woocommerce-form > .button') .click ()
        
        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail erlandojunior89@gmail.com está incorreta.' )
        cy.get('.woocommerce-error').should('exist')
       
        
    });
})