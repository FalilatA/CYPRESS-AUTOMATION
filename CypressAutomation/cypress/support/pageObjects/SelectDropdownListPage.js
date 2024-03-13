export class SelectDropdownList{
    inputFormsDropdown = "body > div:nth-child(1) > div:nth-child(2) > nav:nth-child(1) > \
    div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)"
    //Select list demo page elements
    dropdownListOption = "li[class='dropdown open'] li:nth-child(4) a:nth-child(1)"
    selectDayDropdown = "#select-demo.form-control"
    selectedDayDisplay = "#easycont > div > div.col-md-6.text-left > div:nth-child(4) > div.panel-body > p.selected-value"
    //Multi select list demo page elements
    multiSelectBox = "#multi-select"
    firstSelectedButton = "#printMe.btn.btn-primary"
    getAllSelectedButton = "#printAll.btn.btn-primary"

    clickInputFormsDropdown(){
        cy.get(this.inputFormsDropdown).click()
    }
    
    clickTheDropdownListOption(){
        cy.get(this.dropdownListOption).click()
        cy.contains('We have listed two examples 1. Single Select and 2. Multi Select').should('be.visible')
    }

    selectDay(){
        cy.get(this.selectDayDropdown).select('Wednesday')
    }

    verifySelectedDay(){
        cy.get(this.selectedDayDisplay).contains('Wednesday')
    }
}