# CYPRESS_AUTOMATION- B
This repository contain automation of the Selenium Easy Demo website
https://demo.seleniumeasy.com/


Test cases can be accessed with Google sheet via https://docs.google.com/spreadsheets/d/14SBLjZzp2FaHVPvxToNPB4rDMB2S9SzsYeXdO61zro4/edit?usp=sharing

The test automation was implemented using the BDD automation framework and the Page Object model.

## Steps to execute test scripts
1. Launch your VSCode app
2. Open terminal and navigate to the folder where you want to clone the repository.
3. When in the folder, enter 'git clone https://github.com/FalilatA/QUIDAX-QA-ASSESSMENT.git'. (Github must have been authenticated with VSCode)
5. On VSCode, open the cloned repository folder after cloning is successful.
6. Open terminal and enter 'cd CypressAutomation'. This command directs you to CypressAutomation folder to begin test execution.
7. Still on terminal, install cypress using the command 'npm install cypress --save -dev'.
8. Once installation is complete, open cypress using the command 'npx cypress open.
9. Proceed to configure the e2e environment for cypress to run.
10. Open 'Chrome browser' from cypress.
11. All spec files will be available to run. You can select a spec file to run.

## Note
1. The operating system used for this assessment is 'macOS' and the browser used is 'Chrome'.
2. Automated test cases are; SFD03, SFD04, SFD07, SFD08, SFD09, SDL03, SDL03, BST02, BST03, BSM02, BSM04 and BSM11.
3. The positive test case with ID 'SDL07 and 'SDL08' could not be automated because it failed when manually executed. 
For quick summary, the multi select functionality of the 'Select dropdown list' feature could not be automated.
4. VScode, cypress, cucumber, node, git are prerequisites for successful test execution.
