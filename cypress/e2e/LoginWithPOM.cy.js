import Login from "../PageObjects/LoginPage"

describe("Login With POM",()=>{

    //USing POM
    it("Login Test",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        const ln = new Login();
        ln.setUsername("Admin")
        ln.setPassword("admin123")
        ln.clickSubmit()
        ln.verifyLogin("Dashboard")
    })
})