/// <reference types="cypress" />

describe('verify login functionality',function(){

    it('login with valid credentials',function(){
        // Arrangement
        cy.visit('https://www.saucedemo.com/')    
        // Action
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()    
        //Assertion
        cy.get('.header_label').should('be.visible')

    })
   
    it('login with invalid credentials',function(){
       // Arrangement
       cy.visit('https://www.saucedemo.com/')    
       // Action
       cy.get('#user-name').type('jyfyug')
       cy.get('#password').type('uguhg')
       cy.get('#login-button').click()    
       //Assertion
       cy.get('h3').should('be.visible')

    })
   
})