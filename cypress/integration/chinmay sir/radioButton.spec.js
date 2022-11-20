/// <reference types="cypress" />


describe('verify radio buttons', function () {

    beforeEach(function () {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })

    it('check radio button', function () {
        // cy.get('input[value="green"]').click().should('be.checked')
        // cy.get('input[value="yellow"]').should('not.be.checked')

        // cy.get('input[value="option-1"]').check().should('be.checked')
        // cy.get('input[value="option-3"]').click().should('not.be.checked')

        //cy.get('input[type="checkbox"]').check().should('be.checked')
        //cy.get('input[type="checkbox"]').check(['option-1','option-2']).should('be.checked')
        cy.get('#radio-buttons').find('input[name="color"]').each(function(el){
            cy.wrap(el).check().should('be.checked')         

        })
        
    })

    it.only('verify dropdown list',function(){
        cy.get('#dropdowm-menu-1').select('C#')
        let i = ['python','maven','css']
        cy.get('.section-title').first().children().each(function($dr,index){
            cy.wrap($dr).select(i[index])
        })
    })
    })

