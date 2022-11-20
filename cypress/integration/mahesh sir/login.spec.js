/// <reference types="cypress" />

describe('verify login functionality',function(){

    it('valid credential',function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.get('.oxd-text--h6').should('have.text','Dashboard')

    })
    it.only('valid credential',function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admindfdf')
        cy.get('input[name="password"]').type('admiaa23')
        cy.get('button[type="submit"]').click()
        cy.get('.oxd-alert-content--error').should('have.text','Invalid credentials')
})

})