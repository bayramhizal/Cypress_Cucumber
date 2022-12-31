import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("go url", () => {
  cy.visit("https://qa-environment.koalaresorthotels.com/");
  cy.get("#navLogon > .nav-link").click();
});
Given("use with data enter page", (dataTable) => {
  cy.get("#UserName").type(dataTable.rawTable[1][0]);
  cy.get("#Password").type(dataTable.rawTable[1][1]);
});
Given("click login button", () => {
  cy.get("#btnSubmit").click();
});

Then('validate i entered website',()=>{


cy.get('.page-breadcrumb > :nth-child(3) > a').should('contain.test','manager')

})
