describe ("Xpath Locators",()=>{

    it("Finding No of Products",()=>{


        cy.visit("https://demo.nopcommerce.com/")
        cy.xpath("//div[@class='product-item']").should('have.length',4)



    })




})