Feature: Select dropdown list fuctionality

    This feature enables a user to be able with select an option from a list.

    Scenario: Verify that a user can select a day from the dropdown list. Test case ID- SDL03
    Given User visits the Selenium Easy Demo website
    When The user clicks the input forms dropdown
    When The user clicks select dropdown list option and is redirected to the select dropdown list page
    When The user clicks the dropdown field on the select list demo section and selects a day
    Then The user sees the selected day displayed
