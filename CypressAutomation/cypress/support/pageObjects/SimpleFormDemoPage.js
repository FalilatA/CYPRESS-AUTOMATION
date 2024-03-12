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
    valueBField = "value2"
    getTotalButton = "button[onclick='return total()']"
    totalValueDisplay = "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > \
    div:nth-child(5) > div:nth-child(2) > div:nth-child(4)"

    clickSimpleFormDemo(){
        cy.get(this.inputFormsDropdown).click()
        cy.get(this.simpleFormDemoOption).click()
        cy.contain('The tag input specifies an input field where the user can enter data.').should('be.visible')
    }

    //Method for single input field
    setMessage(Message){
        cy.get(this.enterMessageField).clear().click().type(Message)
        cy.get(this.messageDisplay).should('contain', Message)
    }

    //Method for two input fields
    setTheValueA(valueA){
        cy.get(this.valueAField).clear().click().type(valueA)
    }

    setTheValueB(valueB){
        cy.get(this.valueBField).clear().click().type(valueB)
    }

    clickGetTotalValue(){
        cy.get(this.clickGetTotalValue).click()
        cy.get(this.totalValueDisplay).should('contain', valueA+valueB)
    }
}