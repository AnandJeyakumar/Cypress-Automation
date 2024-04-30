describe("My Fiest Test",()=>{

    it("verify title- Positive test",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.title().should("eq","Automation Testing Practice")
    })

    it("verify title- Negative test",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.title().should("eq","Automation Testing ")
    })
})