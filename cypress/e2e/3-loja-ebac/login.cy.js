/// <reference types="cypress"/
const perfil = require('../../fixtures/perfil.json')

describe('funcionalidade: login', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta') 
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

    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username') .type (perfil.usúario)
        cy.get('#password') .type (perfil.senha)
        cy.get('.woocommerce-form > .button') .click ()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, erlandojunior89 (não é erlandojunior89? Sair)')
    })

    it.only('Deve fazer login com sucesso - Usando fixture', () => {
       cy.fixture('perfil').then( dados => {
        cy.get('#username').type(dados.usúario)
        cy.get('#password').type(dados.senha ,{ log: false })
        cy.get('.woocommerce-form > .button') .click ()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, erlandojunior89 (não é erlandojunior89? Sair)')

   }) 

    })
})