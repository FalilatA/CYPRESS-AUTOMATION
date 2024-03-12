export class BootstrapAlerts{
    //Objects
    alertsAndModalDropdown = "#navbar-brand-centered > ul.nav.navbar-nav.navbar-right > li:nth-child(2) > a"
    bootstrapAlertsOption = "li[class='dropdown open'] li:nth-child(1) a:nth-child(1)"
    autocloseableAlertButton = "#autoclosable-btn-success"
    normalAlertButton = "#normal-btn-success"
    closeNormalAlertIcon = "div[class='alert alert-success alert-normal-success'] button[type='button']"

    //Methods
    clickBootstrapAlertsAndModalDropdown(){
        cy.get(this.alertsAndModalDropdown).click()
    }

    clickBootstrapAlertsOption(){
        cy.get(this.bootstrapAlertsOption).click()
        cy.contains('Bootstrap Alert messages').should('be.visible')
    }

    clickAutocloseableAlertOption(){
        cy.get(this.autocloseableAlertButton).click()
        cy.get(".alert.alert-success.alert-autocloseable-success").should('contain', 'I will hide in 5 seconds')
    }

    verifyAutocloseableAlertCloses(){
        cy.wait(7000)
        cy.get(".alert.alert-success.alert-autocloseable-success").should('not.be.visible')
    }

    clickNormalAlertOption(){
        cy.get(this.normalAlertButton).click()
        cy.contains("I'm a normal success message. To close use the appropriate button.").should('be.visible')
    }

    clickCloseIcon(){
        cy.get(this.closeNormalAlertIcon).click()
    }

    verifyNormalAlertCloses(){
        cy.contains("I'm a normal success message. To close use the appropriate button.").should('not.be.visible')
    }
}