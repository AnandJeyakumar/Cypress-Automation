describe("Custom COmmands",()=>{

    // it.skip("Handling Links",()=>{

    //     cy.visit("https://demo.nopcommerce.com/")
    //     cy.clickLink("Build your own computer")
    //     cy.get("div[class='product-name'] h1").should("have.text","Build your own computer")
    //     cy.wait(3000)
    // })
    
    // it.only("Overwriting Existing Command",()=>{
    //     cy.visit("https://demo.nopcommerce.com/")
    //     cy.clickLink("Build your own computer")
    //     cy.get("div[class='product-name'] h1").should("have.text","Build your own computer")
    //     cy.wait(3000)
        
    // })
    
    it("Login Command",()=>{

        cy.visit("https://demo.nopcommerce.com/")
        cy.clickLink("Log in")
        cy.wait(3000)
        cy.loginapp("test123@gmail.com","test123")


        cy.get(".ico-account").should("have.text","My account")
        
    })
})