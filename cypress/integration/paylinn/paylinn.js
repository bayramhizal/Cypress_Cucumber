import { Given,And,When,Then } from "cypress-cucumber-preprocessor/steps";
Given ('go "https://www.paylinn.com" website',()=>{

cy.visit('https://www.paylinn.com')

})
And('click login elements',()=>{
    cy.get('[href="/login"] > .header__option > .header__lineTwo').click()
    
})
And('enter username and password',()=>{
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('User')
    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('user')
    
})
And('click login button',()=>{
    cy.get('.MuiButtonBase-root').click()
    
})
Then('validate entered web-site',()=>{
    cy.get('.MuiButtonBase-root').should('have.text','welcome')
    
})