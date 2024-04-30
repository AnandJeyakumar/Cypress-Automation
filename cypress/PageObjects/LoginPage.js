class Login
{
    txtUsername = "input[placeholder='Username']"
    txtPassword = "input[placeholder='Password']"
    btnLogin = "button[type='submit']"
    verifyLoginEle = "//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']"


    setUsername(username)
    {
        cy.get(this.txtUsername).type(username)
    }

    setPassword(password)
    {
        cy.get(this.txtPassword).type(password)
    }
    clickSubmit()
    {
        cy.get(this.btnLogin).click()
    }
    verifyLogin(text)
    {
        cy.xpath(this.verifyLoginEle)
        .should("have.text",text)
    }
}

export default Login;