export class SelectDropdownList{
    inputFormsDropdown = "body > div:nth-child(1) > div:nth-child(2) > nav:nth-child(1) > \
    div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)"
    //Select list demo page elements
    dropdownListOption = "li[class='dropdown open'] li:nth-child(4) a:nth-child(1)"
    selectDayDropdown = "#select-demo.form-control"
    //Multi select list demo page elements
    multiSelectBox = "#multi-select"
    firstSelectedButton = "#printMe.btn.btn-primary"
    getAllSelectedButton = "#printAll.btn.btn-primary"

    clickTheDropdownListOption(){
        cy.get(this.inputFormsDropdown).click()
        cy.get(this.dropdownListOption).click()
        cy.contain('We have listed two examples 1. Single Select and 2. Multi Select').should('be.visible')
    }

    //Methods for select list demo
    selectADay(){
        cy.get(this.selectDayDropdown).then(($select) => {
            const dayOptions = $select.find('day');
            const randomIndex = Math.floor(Math.random() * dayOptions.length);
            const randomOptionValue = dayOptions.eq(randomIndex).val();
            cy.wrap($select).select(randomOptionValue);
            return randomOptionValue;
        });
    }
}