
/// <reference types="cypress" />

describe('verify js alerts',function(){
beforeEach(function(){
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
})

it('verify js alert', function(){
    cy.contains('Click for JS Alert').click()
    cy.on('window:alert',function(str){
        expect(str).to.eql('I am a JS Alert')
        return true
    })
    cy.get('#result').should('have.text','You successfully clicked an alert')
})

it('verify js confirm click on ok', function(){
    cy.contains('Click for JS Confirm').click()
    cy.on('window:confirm',function(str){
        expect(str).to.eql('I am a JS Confirm')
        return true
    })
    cy.get('#result').should('have.text','You clicked: Ok')
})

it('verify js confirm click on cancel', function(){
    cy.contains('Click for JS Confirm').click()
    cy.on('window:confirm',function(str){
        expect(str).to.eql('I am a JS Confirm')
        return false
    })
    cy.get('#result').should('have.text','You clicked: Cancel')
})

it('verify js prompt click on ok', function(){
    
    cy.window().then(function($win){
       cy.stub($win,'prompt').returns('learning js')
       cy.contains('Click for JS Prompt').click()
    })
    cy.get('#result').should('have.text','You entered: learning js')
})

it.only('verify js alert', function(){
    
    cy.window().then(function($win){
       cy.stub($win,'alert').returns(true)
       cy.contains('Click for JS Alert').click()
    })
    cy.get('#result').should('have.text','You successfully clicked an alert')
})

it.only('verify js confirm click ok', function(){
    
    cy.window().then(function($win){
       cy.stub($win,'confirm').returns(true)
       cy.contains('Click for JS Confirm').click()
    })
    cy.get('#result').should('have.text','You clicked: Ok')
})

it.only('verify js confirm click cancel', function(){
    
    cy.window().then(function($win){
       cy.stub($win,'confirm').returns(false)
       cy.contains('Click for JS Confirm').click()
    })
    cy.get('#result').should('have.text','You clicked: Cancel')
})



})