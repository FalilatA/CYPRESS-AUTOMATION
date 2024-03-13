Feature: Bootstrap modal functionality

    This feature enables a user to be able view single and multiple modal type

    Scenario: Verify that a user can launch the single modal and save changes. Test case ID- BSM02 and BSM04
    Given User visits the Selenium Easy Demo website
    When The user clicks the Alerts and Modals dropdown
    When The user clicks Bootstrap modal option and is redirected to the Bootstrap modal page
    When The user clicks the lunch modal button of the single modal example section and sees the modal
    When The user clicks the save changes button
    Then The user is redirected to the Bootstrap modal page and the modal closes

    Scenario: Verify that a user can launch the multiple modals and save changes on the second modal. Test case ID- BSM11
    Given User visits the Selenium Easy Demo website
    When The user clicks the Alerts and Modals dropdown
    When The user clicks Bootstrap modal option and is redirected to the Bootstrap modal page
    When The user clicks the lunch modal button of the multiple modal example section and sees the first modal
    When The user clicks the lunch modal button on the first modal and then sees the second modal
    When The user clicks the save changes button on the second modal
    Then The user is redirected to the Bootstrap modal page and the modal closes