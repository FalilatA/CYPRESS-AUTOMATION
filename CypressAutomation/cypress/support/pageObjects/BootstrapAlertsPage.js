export class BootstrapAlerts{
    //Objects
    alertsAndModalDropdown = "#navbar-brand-centered > ul.nav.navbar-nav.navbar-right > li:nth-child(2) > a"
    bootstrapAlertsOption = "li[class='dropdown open'] li:nth-child(2) a:nth-child(1)"
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
        cy.wait(5000)
        cy.get(this.autocloseableAlertButton).should('be.clickable')
    }

    clickNormalAlertOption(){
        cy.get(this.normalAlertButton).click()
        cy.get('.alert.alert-success.alert-normal-success').should('contain', 'To close use the appropriate button.')
    }

    clickCloseIcon(){
        cy.get(this.closeNormalAlertIcon).click()
        cy.get('.alert.alert-success.alert-normal-success').should('not.visible')
    }

    verifyNormalAlertCloses(){
        cy.get('.alert.alert-success.alert-normal-success').should('not.visible')
    }
}