describe("Alert",()=>{

    it("JS Alert",()=>{

        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.get("[onclick='myFunctionAlert()']").click()

        cy.on('window:alert',(t)=>{

            expect(t).to.contain("I am an alert box!")
            
        })
    })



})