/// <reference types="Cypress" />

describe("login test",()=>{

    beforeEach(()=>{
        cy.visit('/signin')

    })
    context("login user",()=>{
        it("should login a user",()=>{
            cy.get('#username').type('Katharina_Bernier')
            cy.get('#password').type('s3cret')
            cy.get('[data-test="signin-submit"]').click()
            cy.get('[data-test=nav-top-new-transaction]').should('to.be.visible')
            
        })
    })
})