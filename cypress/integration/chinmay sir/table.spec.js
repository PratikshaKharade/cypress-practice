/// <reference types="cypress" />

describe('verify table functionality', function(){

    beforeEach(function(){
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
    })

    function verifyTable(id,expvalue){
        let sum = 0

        cy.get(`#${id}`).find('tr').each(function($el,index){
            //cy.log($el.children().last().text())
            if(index != 0){
                sum = sum + Number($el.children().last().text())

            }

        }).then(function(){
            //cy.log(sum)
            expect(sum).to.eq(expvalue)
        })
        
    }


    it('sum of age table 1', function(){
        // let sum = 0
        // cy.get('#t01').find('tr').each(function($el,index){
        //     //cy.log($el.children().last().text())
        //     if(index != 0){
        //         sum = sum + Number($el.children().last().text())
        //     }
        // }).then(function(){
        //     //cy.log(sum)
        //     expect(sum).to.eq(159)
        // })
        verifyTable('t01',159)
    })

    it('sum of age table 2', function(){
        // let sum = 0
        // cy.get('#t02').find('tr').each(function($el,index){
        //     //cy.log($el.children().last().text())
        //     if(index != 0){
        //         sum = sum + Number($el.children().last().text())
        //     }
        // }).then(function(){
        //     //cy.log(sum)
        //     expect(sum).to.eq(163)
        // })
        verifyTable('t02',163)
    })

})