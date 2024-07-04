/// <reference types="cypress"/>

import { should } from "chai";

describe('Funcionalidade: produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/' )  
    });

    it('deve selecionar um produto na lista',()=>{
       cy.get('.products > .row')
        //.first()
        //.last()
        //.eq()
        .contains('Apollo Running Short')
        .click()

        cy.get('#tab-title-description > a') .should('contain', 'Descrição')
    });
   
    
});