//import { BootstrapAlerts } from "../../support/pageObjects/BootstrapAlertsPage";
import {Given,When,And,Then} from 'alertspress-cucumber-preprocessor'
import { BootstrapAlerts } from '../../support/pageObjects/BootstrapAlertsPage'

const alerts = new BootstrapAlerts()

Given('User visits the Selenium Easy Demo website', () => {
    alerts.visit('/')
})

When('The user clicks on the Alerts and Modals dropdown', () => {
    alerts.clickBootstrapAlertsAndModalDropdown()
})

When('The user clicks on Bootstrap alerts option and is redirected to the Bootstrap Alerts page', () => {
    alerts.clickBootstrapAlertsOption()
})

When('The user clicks on Autocloseable Alert Success Message button and sees the alert box', () => {
    alerts.clickAutocloseableAlertOption()
})

Then('The alert box closes after five seconds', () => {
    alerts.verifyAutocloseableAlertCloses()
})

When('The user clicks on Normal Alert Success Message button and sees the alert box', () => {
    alerts.clickNormalAlertOption()
})

When('The user clicks on the close icon button', () => {
    alerts.clickNormalAlertOption()
})

Then('The alert message box closes', () => {
    alerts.verifyNormalAlertCloses()
})