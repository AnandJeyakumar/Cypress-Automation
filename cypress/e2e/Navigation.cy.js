describe("Navigation",()=>{

    it("NavigationTest",()=>{

        
        cy.visit("https://demo.opencart.com/")
        cy.title().should('eq','Your Store')   //Home Page
        cy.wait(3000)
        cy.get("li:nth-child(7) a:nth-child(1)").click()
        cy.get("div[id='content'] h2").should('have.text',"Cameras")
    
        // To Go Back
        cy.go('back')
        cy.title().should('eq','Your Store')   
        cy.wait(3000)
        cy.go('forward')
        cy.get("div[id='content'] h2").should('have.text',"Cameras")
        cy.go(-1)
        cy.wait(3000)
        cy.go(1)
        cy.wait(3000)
        cy.reload()
        cy.wait(2000)









    })



})