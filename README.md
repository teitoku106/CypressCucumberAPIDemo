# Cypress-Cucumber-API-Demo

----------------------------------------------------------------------------------------------

This repo contains API Testing with https://gorest.co.in/ using Cypress & Cucumber in Javascript.

Author: Tam Pham (Kyle)

----------------------------------------------------------------------------------------------

Instruction:

1. Clone this Repo and open using Visual Studio Code
2. Open Terminal inside Visual Studio Code and run [ npm install ] to install required packages (Make sure your machine got node.js + npm, more information: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
4. Open Terminal inside Visual Studio Code, Run command [ npx cypress run ] to start Cypress in Headless mode, let it run and finish by itself
5. After Cypress finished with the test, it will generate a Video file contains the run + generate a report file name as CucumberAPITesting.cucumber.json (Screenshot 2)
6. In Terminal, run command [ npm run cy:report ] in order to generate a new report file in .html extension 
7. The report file will be inside ./crypress/cucumber-report and be name as [ index.html ], open it with a browser of your choice (Screenshot 3)

----------------------------------------------------------------------------------------------

CucumberAPITesting.feature (Screenshot 1)
<img width="1036" alt="image" src="https://user-images.githubusercontent.com/73167411/171606822-3397cdaf-bbec-4223-a60c-ac5e33be0209.png">

Folder structure (Screenshot 2)
<img width="1091" alt="image" src="https://user-images.githubusercontent.com/73167411/170359567-4c727045-15e2-4bbf-a054-e1ed7f047d68.png">

Cucumber Report (Screenshot 3)
<img width="1088" alt="image" src="https://user-images.githubusercontent.com/73167411/171607260-29695a28-25af-46dc-a311-9833983763c6.png">

