# CypressCucumberAPIDemo

This repo contains API Testing with https://gorest.co.in/ using Cypress & Cucumber.

Instruction:

1. Clone this Repo and open using Visual Studio Code
2. Open Terminal in Visual Studio Code and run [ npm install ] to install required packages (Make sure your machine got node.js, more information: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
4. Run [ npx cypress open ] to start Cypress and on the Cypress GUI, select CucumberAPITesting.feature to run the 2 test scripts
5. After finish running the test script, close [Cypress] by terminate the Terminal
6. Open Terminal inside Visual Studio Code again and run [ npm run cy:report ] in order to generate a new report file 
7. The report file will be inside ./crypress/cucumber-report and be name as [ index.htlm ] (There's already a report file generate inside from previous run)

Cucumber Report

<img width="1493" alt="image" src="https://user-images.githubusercontent.com/73167411/170353192-e5c1c05a-afd5-4ff5-bfdd-b32b4a3e0486.png">

<img width="1074" alt="image" src="https://user-images.githubusercontent.com/73167411/170354199-0c39c75c-5877-4291-aaa8-2572f532a5ba.png">
