/// <reference types="Cypress" />


describe("register test",()=>{

    beforeEach(()=>{
        cy.visit('/signup')

    })
    context("register user",()=>{
        it("should register a user",()=>{       
            cy.get('#firstName').type(Cypress.env('FirstName'))
            cy.get('#lastName').type(Cypress.env('LastName')) 
            cy.get('#username').type(Cypress.env('Username'))
            cy.get('#password').type(Cypress.env('Password'))
            cy.get('#confirmPassword').type(Cypress.env('ConfirmPassword'))
            cy.get('[data-test=signup-submit]').click()
            cy.get('[data-test=signin-remember-me]').should('be.visible')
        })
    })
})
