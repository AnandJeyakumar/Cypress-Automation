describe("Implicit Assertions" ,()=>{


    it("Implicit Assertions",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // cy.url().should('include','orange')
        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contains','oran')

        cy.url().should('include','orange')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('not.contains','sdsd')


        cy.title().should('eq',"OrangeHRM")

        cy.get("[alt=company-branding]").should("be.visible")
        cy.xpath("//a").should('have.length',5)

        cy.get("[placeholder=Username]").type("Admin")
        cy.get("[placeholder=Username]").should('have.value','Admin')
       
    })

    it.only("Explicit Assertions",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")


        cy.get("[placeholder=Username]").clear()
        cy.get("[placeholder=Username]").type("Admin")
        cy.get("[placeholder=Password]").type("admin123")
        cy.get("button[type='submit']").click()

        let expName = "manda user"

        cy.get(".oxd-userdropdown-name").then((ele)=>{

            let actName=ele.text()

            // BDD Style
            console.log(actName)
            expect(actName).to.equal(expName)

            // TDD Style
            assert.equal(actName,expName)



        })





    })

})