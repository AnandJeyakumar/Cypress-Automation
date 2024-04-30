describe("mysuite",()=>
{

    it("Capture SS and Vid",()=>{

        cy.visit("https://demo.opencart.com/")
        // Manually taking SS
        // cy.screenshot("homepage")
        // cy.wait(3000)
        // cy.get("img[title='Your Store']").screenshot("Logo")

        // Automatic SS When Failure Happens
        cy.get("li:nth-child(7) a:nth-child(1)").click()
        cy.get("div[id='content'] h2").should('have.text',"Test")






    })
})