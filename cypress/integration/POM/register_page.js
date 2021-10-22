
export class registerPage{

    url = '/signup';

    elements = {
        getFirstName:()=>cy.get('#firstName'),
        getLastName: () =>cy.get('#lastName'),
        getUserName:()=>cy.get('#username'),
        getPassword: () =>cy.get('#password'),
        getConfirmPassword: () =>cy.get('#confirmPassword'),
        getSingUpButton:()=>cy.get('[data-test=signup-submit]')
    }
    visit(){
        cy.visit(this.url);
    } 

    typeData({FirstName=" ",LastName=" ",UserName=" ",Password=" ",ConfirmPassword=" "}={}){
        this.elements.getFirstName().clear().type(FirstName)
        this.elements.getLastName().clear().type(LastName)
        this.elements.getUsername().clear().type(UserName)
        this.elements.getPassword().clear().type(Password)
        this.elements.getConfirmPassword().clear(ConfirmPassword)

    }

    clickSingUp(){
        this.elements.getSingUpButton().click();
    }
    

    /*setUsername(Username){
        this.elements.getUsername().clear().type('username');
    }
    setPassword(password){
        this.elements.getPassword().clear().type('password')*/
 };