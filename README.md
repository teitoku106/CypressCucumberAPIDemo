# CypressCucumberAPIDemo

This repo contains API Testing with https://gorest.co.in/ using Cypress & Cucumber in Javascript.

Instruction:

1. Clone this Repo and open using Visual Studio Code
2. Open Terminal in Visual Studio Code and run [ npm install ] to install required packages (Make sure your machine got node.js, more information: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
4. Run command [ npx cypress run ] to start Cypress in Headless mode, let it run and finish by itself
5. After Cypress finished with the test, it will generate a Video file contains the run + generate a report file in .json (Screenshot 2)
6. In Terminal, run command [ npm run cy:report ] in order to generate a new report file 
7. The report file will be inside ./crypress/cucumber-report and be name as [ index.htlm ] (Screenshot 3)


<img width="1074" alt="image" src="https://user-images.githubusercontent.com/73167411/170354199-0c39c75c-5877-4291-aaa8-2572f532a5ba.png">

Folder structure (Screenshot 2)
<img width="1073" alt="image" src="https://user-images.githubusercontent.com/73167411/170358344-9a3913df-8976-431d-b1d9-2b20aa9115e7.png">

Cucumber Report (Screenshot 3)
<img width="1493" alt="image" src="https://user-images.githubusercontent.com/73167411/170353192-e5c1c05a-afd5-4ff5-bfdd-b32b4a3e0486.png">
