export class BoostrapModals{
    alertsAndModalDropdown = "#navbar-brand-centered > ul.nav.navbar-nav.navbar-right > li:nth-child(2) > a"
    bootstrapModalsOption = "li[class='dropdown open'] li:nth-child(2) a:nth-child(1)"
    //Single modal example page elements
    singleModalLunchButton = "body > div.container-fluid.text-center > div > div.col-md-6.text-left > \
    div:nth-child(2) > div > div > div.panel-body > a"
    singleModalCloseButton = "div[id='myModal0'] a[class='btn']"
    singleModalSaveButton = "div[id='myModal0'] a[class='btn btn-primary']"
    //Multiple modal example page elements
    firstModalLunchButton = "a[href='#myModal']"
    firstModalCloseButton = "div[id='myModal'] a[class='btn']"
    firstModalSaveButton = "div[id='myModal'] div[class='modal-footer'] a[class='btn btn-primary']"
    secondModalLunchButton = "div[class='modal-body'] a[class='btn btn-primary']"
    secondModalCloseButton = "div[id='myModal2'] a[class='btn']"
    secondModalSaveButton = "div[id='myModal2'] a[class='btn btn-primary']"

    clickBootstrapModalOption(){
        cy.get(this.alertsAndModalDropdown).click()
        cy.get(this.bootstrapModalsOption).click()
        cy.contain('Bootstrap Modal Example for Automation').should('be.visible')
    }

    //Methods for single modal example
    clickTheLaunchModalButton(){
        cy.get(this.singleModalLunchButton).click()
        cy.contains('Modal Title').should('be.visible')
    }

    clickCloseModalButton(){
        cy.get(this.singleModalCloseButton).click()
        cy.contain('Single Modal Example').should('be.visible')
    }

    clickSaveChanges(){
        cy.get(this.singleModalSaveButton).click()
        cy.contain('Bootstrap Modal Example for Automation').should('be.visible')
    }

    //Methods for multiple modal example
    clickLunchMultipleModalButton(){
        cy.get(this.firstModalLunchButton).click()
        cy.contain('First Modal').should('be.visible')
    }

    clickFirstModalCloseButton(){
        cy.get(this.firstModalCloseButton).click()
        cy.contain('Multiple Modal Example').should('be.visible')
    }

    clickFirstModalSaveButton(){
        cy.get(this.firstModalSaveButton).click()
        cy.contain('Bootstrap Modal Example for Automation').should('be.visible')
    }

    clickSecondModalLaunchButton(){
        cy.get(this.secondModalLunchButton).click()
        cy.contain('Modal 2').should('be.visible')
    }

    clickSecondModalCloseButton(){
        cy.get(this.secondModalCloseButton).click()
        cy.contain('First Modal').should('be.visible')
    }

    clickSecondModalSaveButton(){
        cy.get(this.secondModalSaveButton).click()
        cy.contain('Bootstrap Modal Example for Automation').should('be.visible')
    }
}