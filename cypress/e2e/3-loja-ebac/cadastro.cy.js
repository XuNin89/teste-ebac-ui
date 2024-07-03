/// <reference types="cypress"/

import { faker } from 'https://esm.sh/@faker-js/faker';

describe('Funcionalidade: cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')    
    });
    it('Deve completar o cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type(senha1234)
        cy.get(':nth-child(4) > .button').click()
        
    });
    
});