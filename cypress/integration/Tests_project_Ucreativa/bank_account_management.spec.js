/// <reference types="Cypress" />

describe("Bank Accounts test",()=>{

    beforeEach(() => {

        cy.visit('/signin')
        cy.get('#username').type('Katharina_Bernier')
        cy.get('#password').type('s3cret')
        cy.get('[data-test="signin-submit"]').click()
        cy.get('#root>div>div>div>div:nth-child(2)>div:nth-child(3)>ul>div>a:nth-child(3)>div.MuiListItemText-root>span').click()
      
    });
    context("Create Bank Accounts",()=>{
        it("should register a bank account",()=>{
            
            cy.get('[data-test=bankaccount-new]').click()
            cy.get('#bankaccount-bankName-input').type(Cypress.env('BankName'))
            cy.get('#bankaccount-routingNumber-input').type(Cypress.env('RoutingNumber'))
            cy.get('#bankaccount-accountNumber-input').type(Cypress.env('AccountNumber'))
            cy.get('[data-test=bankaccount-submit]').click()
        })
    })

    context("Delete Bank Account",()=>{
        it("should delete a bank account",()=>{
            cy.get('[data-test=bankaccount-delete]').first().click()
        })
    })
   
})