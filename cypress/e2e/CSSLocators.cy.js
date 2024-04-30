describe("CSSLOCATORS" ,() =>{

    it("cssLocators", ()=>{

        cy.visit("https://demo.nopcommerce.com/")
        cy.get("input#small-searchterms").type("Build your own computer")
        cy.get("[type='submit']").click()

        cy.get("[value='Build your own computer']").should('be.visible')

    })



})