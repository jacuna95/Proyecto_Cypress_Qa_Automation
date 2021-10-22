/// <reference types="Cypress" />

describe("Home page test",()=>{

    beforeEach(() => {

        cy.visit('/signin')
        cy.get('#username').type('Katharina_Bernier')
        cy.get('#password').type('s3cret')
        cy.get('[data-test="signin-submit"]').click()
    });
    
    context("list transactions",()=>{
        it.only("should list transactions",()=>{
            cy.get('#root>div>div>div>div:nth-child(2)>div:nth-child(3)>ul>div>a:nth-child(1)>div.MuiListItemText-root>span').click()
            cy.get('[data-test=transaction-list]').should('be.visible')
        
        })
    })

    context("add comments on transactions",()=>{
        it("should add comments on transactions",()=>{
            cy.get('#root>div>div>div>div:nth-child(2)>div:nth-child(3)>ul>div>a:nth-child(1)>div.MuiListItemText-root>span').click()
            cy.get('[data-test=transaction-list]').find('.MuiListItem-gutters').first().click({force: true})
            cy.get('#transaction-comment-input-183VHWyuQMS').type('excelente{enter}')
            cy.get('[data-test=comments-list]').should('be.visible')

        })
    })

    context("like transactions",()=>{
        it("should like transactions",()=>{
            cy.get('#root>div>div>div>div:nth-child(2)>div:nth-child(3)>ul>div>a:nth-child(1)>div.MuiListItemText-root>span').click()
            cy.get('[data-test=transaction-list]').find('.MuiListItem-gutters').first().click({force: true})
            cy.get('[data-test=transaction-like-button-183VHWyuQMS]').click()
            cy.get('[data-test=transaction-like-count-183VHWyuQMS]').should('be.visible')

        })
    })
   
})