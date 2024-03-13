import { BoostrapModals } from "../../support/pageObjects/BootstrapModalPage";
import {When,Given,Then,And} from 'cypress-cucumber-preprocessor/steps';

const modal = new BoostrapModals()

Given('User visits the Selenium Easy Demo website', () =>{
    cy.visit('/')
})

When('The user clicks the Alerts and Modals dropdown', () =>{
    modal.clickAlertsAndModalDropdown()
})

When('The user clicks Bootstrap modal option and is redirected to the Bootstrap modal page', () =>{
    modal.clickBootstrapModalOption()
})

When('The user clicks the lunch modal button of the single modal example section and sees the modal', () =>{
    modal.clickTheLaunchModalButton()
})

When('The user clicks the save changes button', () =>{
    modal.clickSaveChanges()
})

Then('The user is redirected to the Bootstrap modal page and the modal closes', () =>{
    modal.verifySaveChanges()
})

When('The user clicks the lunch modal button of the multiple modal example section and sees the first modal', () =>{
    modal.clickLunchMultipleModalButton()
})

When('The user clicks the lunch modal button on the first modal and then sees the second modal', () =>{
    modal.clickSecondModalLaunchButton()
})

When('The user clicks the save changes button on the second modal', () =>{
    modal.clickSecondModalSaveButton()
})