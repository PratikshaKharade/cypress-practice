/// <reference types="cypress" />

describe('verify table functionality', function () {
    beforeEach(function () {
        cy.visit('https://testautomationpractice.blogspot.com/')
    })
    it('sum of prise colomn', function () {
        let sum = 0
        cy.get("[name='BookTable']").find('tbody').children().each(function (el, index) {
            //cy.log(el.text())
            //cy.log(el.children().last().text())
            if (el.index != 0) {
                //cy.log(el.children('td').last().text())
                sum = sum + Number(el.children().last().text())

            }
        }).then(function () {
            cy.log(sum)
        })
    })

    it.only('table', function () {
        let sum = 0
        cy.get("[name='BookTable']").find('tbody').children().each(function (el) {
            sum = sum + Number(el.children('td').last().text())
        }).then(function () {
            cy.log(sum)
        })

    })

})