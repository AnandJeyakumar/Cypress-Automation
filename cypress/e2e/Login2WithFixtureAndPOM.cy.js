import Login from "../PageObjects/LoginPage"

describe("Login With POM",()=>{

    //USing POM
    it("Login Test",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.fixture("orangehrm").then((data)=>{

            const ln = new Login();
            ln.setUsername(data.username)
            ln.setPassword(data.password)
            ln.clickSubmit()
            ln.verifyLogin(data.loginText)

        })

        
    })
})