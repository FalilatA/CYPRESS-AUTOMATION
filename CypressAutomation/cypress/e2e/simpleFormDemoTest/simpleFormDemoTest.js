import {When,Given,Then} from 'cypress-cucumber-preprocessor/steps';
import { SimpleFormDemo } from '../../support/pageObjects/SimpleFormDemoPage';

const form = new SimpleFormDemo()

Given('User visits the Selenium Easy Demo website', () => {
    cy.visit('/')
})

When('The user clicks the input forms dropdown', () => {
    form.clickInputFormsDropdown()
})

When('The user clicks simple form option and is redirected to the simple form page', () => {
    form.clickSimpleFormDemo()
})

When('The user clicks the enter message field of the single input field section', () => {
    form.clickMessageField()
})

When('The user clicks the show message button', () => {
    form.clickShowMessage()
})

When('The user enters a message', () => {
    form.setMessage()
})

Then('The user sees the exact message inputted', () => {
    form.verifyMessage()
})

When('The user clicks value a field', () => {
    form.clickValueA()
})

When('The user enters a number into value a field', () => {
    form.setTheValueA()
})

When('The user clicks value b field', () => {
    form.clickValueB()
})

When('The user enters a number into value b field', () => {
    form.setTheValueB()
})

When('The user clicks the get total button', () => {
    form.clickGetTotalValue()
})

Then('The user sees the sum of value a and value b', () => {
    form.verifyTotalValue()
})