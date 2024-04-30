describe("MyTestSuie",()=>{

    it.skip("Fixtures DempTest",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.fixture("orangehrm").then((data)=>{

            cy.get("input[placeholder='Username']").type(data.username);
            cy.get("input[placeholder='Password']").type(data.password);
            cy.get("button[type='submit']").click()
            cy.xpath("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='PIM']").click()
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
            .should('have.text',data.expected)

        })

    })
    // Access to multiple it block then we need to create a before all of that
    let userdata;
    before(()=>{
        cy.fixture("orangehrm").then((data)=>{
            userdata=data;
        })
    })
    it("Getting data from fixture using before hook",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

            cy.get("input[placeholder='Username']").type(userdata.username);
            cy.get("input[placeholder='Password']").type(userdata.password);
            cy.get("button[type='submit']").click()
            cy.xpath("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='PIM']").click()
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
            .should('have.text',userdata.expected)
    })

})