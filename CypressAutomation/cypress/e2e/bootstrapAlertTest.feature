Feature: Bootstrap alerts functonality

    This feature enables a user to be able view autocloseable and normal alert type

    Scenario: Verify that a user can display the 'Autocloseable success message'. Test case ID- BST02
    Given User visits the Selenium Easy Demo website
    When The user clicks on the Alerts and Modals dropdown
    When The user clicks on Bootstrap alerts option and is redirected to the Bootstrap Alerts page
    When The user clicks on Autocloseable Alert Success Message button and sees the alert box
    Then The alert box closes after five seconds

    Scenario: Verify that a user can display and close the 'Normal success message' Test case ID- BST03
    Given User visits the Selenium Easy Demo website
    When The user clicks on the Alerts and Modals dropdown
    When The user clicks on Bootstrap alerts option and is redirected to the Bootstrap Alerts page
    When The user clicks on Normal Alert Success Message button and sees the alert box
    When The user clicks on the close icon button
    Then The alert message box closes