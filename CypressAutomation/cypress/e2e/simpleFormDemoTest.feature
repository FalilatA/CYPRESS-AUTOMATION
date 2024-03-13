Feature: Simple form demo fuctionality

    This feature enables a user to be able interact with a single and multiple form.

    Scenario: Verify that a user can input a message on a single form and display the message. Test case ID- SFD03 and SFD04
    Given User visits the Selenium Easy Demo website
    When The user clicks the input forms dropdown
    When The user clicks simple form option and is redirected to the simple form page
    When The user clicks the enter message field of the single input field section
    When The user enters a message
    When The user clicks the show message button
    Then The user sees the exact message inputted

    Scenario: Verify that a user can sum the value of A and B and display the total. Test case ID- SFD07, SFD08 and SFD09
    Given User visits the Selenium Easy Demo website
    When The user clicks the input forms dropdown
    When The user clicks simple form option and is redirected to the simple form page
    When The user clicks value a field
    When The user enters a number into value a field
    When The user clicks value b field
    When The user enters a number into value b field
    When The user clicks the get total button
    Then The user sees the sum of value a and value b