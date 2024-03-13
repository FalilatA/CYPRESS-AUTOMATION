import {When,Given,Then,And} from 'cypress-cucumber-preprocessor/steps';
import { SelectDropdownList } from '../../support/pageObjects/SelectDropdownListPage';

const list = new SelectDropdownList()

Given('User visits the Selenium Easy Demo website', () => {
    cy.visit('/')
})

When('The user clicks the input forms dropdown', () => {
    list.clickInputFormsDropdown()
})

When('The user clicks select dropdown list option and is redirected to the select dropdown list page', () => {
    list.clickTheDropdownListOption()
})

When('The user clicks the dropdown field on the select list demo section and selects a day', () => {
    list.selectDay()
})

Then('The user sees the selected day displayed', () => {
    list.verifySelectedDay()
})