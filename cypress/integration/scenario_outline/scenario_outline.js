import { Given,And,When,Then } from "cypress-cucumber-preprocessor/steps";
Given('go url',()=>{
    cy.visit('https://www.google.com')
    cy.get('#L2AGLb > .QS5gu').click()
})
Given('search capital {string}',(capital)=>{
    cy.visit('https://www.google.com')
    cy.get('.gLFyf').type(capital)
    cy.get('.gLFyf').click()


})
Given('checked capital {string}',(capital)=>{
    cy.title().should('include',capital)

})