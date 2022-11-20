/// <reference types="cypress" />

describe('verify the API', function () {

    it('verify GET API', function () {

        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'
        }).then(function (res) {
            cy.log(res.body.data)
            //expect(res.status).to.eq(200)
        })
    })

    it('verify POST API', function () {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                name: "morpheus",
                job: "leader"
            }
        }).then(function (res) {
            //cy.log(res.body.data)
            expect(res.status).to.eq(201)
        })


    })


    it('verify PUT API', function () {
        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users/2',
            body: {
                name: "morpheus",
                job: "leader"
            }
        }).then(function (res) {
            //cy.log(res.body.data)
           expect(res.status).to.eq(200)
        })
    })
    it.only('verify DELETE API', function () {
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/2',
            body: {
                name: "morpheus",
                job: "leader"
            }
        }).then(function (res) {
            //cy.log(res.body.data)
           expect(res.status).to.eq(204)
        })
    })




})