# QUIDAX-QA-ASSESSMENT
This repository contains answers to the QUIDAX Quality Assurance Engineer Assessment.

## Exercise
Task 1- Functional testing and defect management
Design test cases for the following forms and document all defects identified with clear reproducible steps
1. Input forms:
Simple form demo: Single input field and multiple input fields
Select Dropdown List: Select List Demo and Multi Select List Demo
2. Alerts and models:
Bootstrap alerts: Bootstrap alert messages
Bootstrap modal: Single modal example and Multiple modal example
You can also indicate improvement recommendations to the respective forms.

Task 2- Test Automation
Write automated web-based tests for all positive test cases designed in Task 1
A JavaScript framework eg Cypress is recommended. You can also use any other
framework you are comfortable working with.
The framework should be designed using a page object model approach.
Incorporate BDD into the framework if you are familiar with it.
Notes: Each test case should include validations for form actions. For example, In the single form demo page, when you enter a value into the text field, your test should actually check that the content matches what is displayed after clicking the ‘Show message’ button.

## Task 1
The solutions can be accessed with google sheet via https://docs.google.com/spreadsheets/d/14SBLjZzp2FaHVPvxToNPB4rDMB2S9SzsYeXdO61zro4/edit?usp=sharing

## Task 2
The solution is provided in the 'CypressAutomation' folder of this repository. The test was implemented using the BDD automation framework and the Page Object model.

## Steps to execute scripts
1. Launch your VSCode app
2. Open terminal and enter 'git clone'. (Github must have been authenticated with VSCode)
3. A prompt will appear; enter the repository URL 'https://github.com/FalilatA/QUIDAX-QA-ASSESSMENT'.
4. Select your storage folder for the repository and save.
5. VSCode should open the cloned repository folder.
6. Open terminal and enter 'cd CypressAutomation'. This command directs you to CypressAutomation folder to begin test execution.
7. Still on terminal, install cypress using the command 'npm install cypress --save -dev'.
8. Once installation is complete, open cypress using the command 'npx cypress open.
9. Proceed to configure the e2e environment for cypress to run.
10. Open 'Chrome browser' from cypress.
11. All spec files will be available to run. You can select a spec file to run.

## Note
1. Operating system used in the course of this assessment is 'macOS' and the browser used is 'Chrome'.
2. Automated test cases are; SFD03, SFD04, SFD07, SFD08, SFD09, SDL03, SDL03, BST02, BST03, BSM02, BSM04 and BSM11.
3. The positive test case with ID 'SDL07 and 'SDL08' could not not be automated because it failed when manually executed. 
For quick summary, the multi select functionality of the 'Select dropdown list' feature could not be automated.
4. VScode, cypress, cucumber, node, git are prerequisites to a successful test execution.
