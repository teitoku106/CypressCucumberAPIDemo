/// <reference types="Cypress" />

import { When, And, Then } from "cypress-cucumber-preprocessor/steps";

let userID = "";
let randomTestEmail = "";
let randomText = "";

When("The user create a new account using POST METHOD", () => {
  //Generate a Random Email
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  for (var i = 0; i < 10; i++)
    randomText += chars.charAt(Math.floor(Math.random() * chars.length));
  randomTestEmail = randomText + "@gmail.com";

  cy.fixture("userData").then((data) => {
    //Create a new user using POST METHOD
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v1/users/",
      headers: {
        Authorization: "Bearer " + data.accessToken,
      },
      body: {
        name: data.name,
        gender: data.gender,
        email: randomTestEmail,
        status: data.status,
      },
    }).then((res) => {
      //Verify the Response from Server
      expect(res.status).to.eq(201);
      expect(res.body.data).has.property("email", randomTestEmail);
      expect(res.body.data).has.property("name", data.name);
      expect(res.body.data).has.property("status", data.status);
      expect(res.body.data).has.property("gender", data.gender);
      const idNumber = res.body.data.id;
      userID = idNumber;
    });
  });
});

Then("A new account is create with a unique ID number", () => {
  cy.log("The User ID number is: " + userID);
});

And("The user verify the account exist on Database using GET METHOD", () => {
  cy.fixture("userData").then((data) => {
    cy.request({
      //Get the User Data from server using GET METHOD
      method: "GET",
      url: data.website + userID,
      headers: {
        Authorization: "Bearer " + data.accessToken,
      },
    }).then((res) => {
      //Verify the Response from Server
      expect(res.status).to.eq(200);
      expect(res.body.data).has.property("id", userID);
      expect(res.body.data).has.property("name", data.name);
      expect(res.body.data).has.property("status", data.status);
      expect(res.body.data).has.property("email", randomTestEmail);
    });
  });
});

When("The user Delete the above account using DELETE METHOD", () => {
  cy.fixture("userData").then((data) => {
    //Delete the Above user using DELETE METHOD
    cy.request({
      method: "DELETE",
      url: data.website + userID,
      headers: {
        Authorization: "Bearer " + data.accessToken,
      },
    }).then((res) => {
      //Verify the Response from Server
      expect(res.status).to.eq(204);
    });
  });
});

Then("The account will be delete from Database", () => {
  cy.log(
    "The Account with User ID number " +
      userID +
      " is no longer exist on Database"
  );
});

And(
  "The user verify the account is no longer exist on Database using GET METHOD",
  () => {
    cy.fixture("userData").then((data) => {
      cy.request({
        //Get the User Data from server using GET METHOD
        method: "GET",
        url: data.website + userID,
        failOnStatusCode: false,
        headers: {
          Authorization: "Bearer " + data.accessToken,
        },
      }).then((res) => {
        //Verify the Response from Server
        expect(res.status).to.eq(404);
        expect(res.body.data).has.property("message", data.notFoundMessage);
      });
    });
  }
);
