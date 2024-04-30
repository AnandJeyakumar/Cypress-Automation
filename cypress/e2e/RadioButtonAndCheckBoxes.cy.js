describe("Check UI Elements",()=>{

it("Checing Radio Buttons",()=>{

    cy.visit("https://testautomationpractice.blogspot.com/")

    cy.get("#male").should('be.visible')
    cy.get("#female").should('be.visible')

    cy.get("#male").check().should('be.checked')
    cy.get("#female").should('not.be.checked')


})
it("Checing CheckBoxes Buttons",()=>{

    cy.visit("https://testautomationpractice.blogspot.com/")

    cy.get("#sunday").should('be.visible')
    cy.get("#sunday").check().should('be.checked')
    cy.wait(3000)
    cy.get("#sunday").uncheck().should('not.be.checked')

})







})