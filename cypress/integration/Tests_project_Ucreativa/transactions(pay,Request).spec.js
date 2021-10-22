/// <reference types="Cypress" />

describe("transactions test",()=>{

    beforeEach(() => {

        cy.visit('/signin')
        cy.get('#username').type('Katharina_Bernier')
        cy.get('#password').type('s3cret')
        cy.get('[data-test="signin-submit"]').click()
        cy.get('[data-test=nav-top-new-transaction]').click()
        cy.get('[data-test=users-list]').find('.MuiListItem-gutters').first().click()
        cy.get('#amount').type(Cypress.env('Amount'))
        cy.get('#transaction-create-description-input').type(Cypress.env('AddNote'))
    });
    
    context("ask for money",()=>{
        it("should request money",()=>{
            cy.get('[data-test=transaction-create-submit-request]').click()
            cy.get('[data-test=new-transaction-create-another-transaction]').should('be.visible')
 
        })
    })

    context("payment",()=>{
        it("should make a payment",()=>{
            cy.get('[data-test=transaction-create-submit-payment]').click()
            cy.get('[data-test=new-transaction-create-another-transaction]').should('be.visible')
        })
    })
   
})