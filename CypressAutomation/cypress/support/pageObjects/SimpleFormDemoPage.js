//rN is randomNumber
const rN = Math.floor(Math.random() * 5);

export class SimpleFormDemo{
    inputFormsDropdown = "body > div:nth-child(1) > div:nth-child(2) > nav:nth-child(1) > \
    div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)"
    simpleFormDemoOption = "li[class='dropdown open'] li:nth-child(1) a:nth-child(1)"
    //Single input field page elements
    enterMessageField = "#user-message.form-control"
    messageDisplay = "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > \
    div:nth-child(4) > div:nth-child(2) > div:nth-child(4)"
    showMessageButton = "button[onclick='showInput();']"
    //Multiple input field page elements
    valueAField = "#value1"
    valueBField = "#value2"
    getTotalButton = "button[onclick='return total()']"
    totalValueDisplay = "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > \
    div:nth-child(5) > div:nth-child(2) > div:nth-child(4)"

    clickInputFormsDropdown(){
        cy.get(this.inputFormsDropdown).click()
    }
    
    clickSimpleFormDemo(){
        cy.get(this.simpleFormDemoOption).click()
        cy.contains('The tag input specifies an input field where the user can enter data.').should('be.visible')
    }

    //Method for single input field
    clickMessageField(){
        cy.get(this.enterMessageField).click()
    }
    
    setMessage(){
        cy.fixture('inputFormData').then((data) => {
            cy.get(this.enterMessageField).clear().type(data.Message)
        });
    }

    clickShowMessage(){
        cy.get(this.showMessageButton).click()
    }

    verifyMessage(){
        cy.fixture('inputFormData').then((data) => {
            cy.get(this.messageDisplay).should('contain', data.Message)
        });
    }

    //Method for two input fields
    clickValueA(){
        cy.get(this.valueAField).click()
    }
    
    setTheValueA(){
        cy.fixture('inputFormData').then((data) => {
            cy.get(this.valueAField).clear().type(data.valueA+rN)
        });
    }

    clickValueB(){
        cy.get(this.valueBField).click()
    }

    setTheValueB(){
        cy.fixture('inputFormData').then((data) => {
            cy.get(this.valueBField).clear().type(data.valueB+rN)
        });
    }

    clickGetTotalValue(){
        cy.get(this.getTotalButton).click()
    }

    verifyTotalValue(){
        cy.fixture('inputFormData').then((data) => {
            cy.get(this.totalValueDisplay).should('contain', data.valueA+data.valueB)
        });
    }
}