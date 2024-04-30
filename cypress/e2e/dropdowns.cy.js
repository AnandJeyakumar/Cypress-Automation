describe('Handle Dropdown',()=>{

    it ("DD with Select",()=>{

        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        cy.get("#zcf_address_country")
        .select("United Arab Emirates")
        .and('have.value',"United Arab Emirates")
    })

    it ("DD without Select",()=>{

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get("#select2-billing_country-container").click()

        cy.get(".select2-search__field").type("United Arab Emirates").type('{enter}')

        cy.get("#select2-billing_country-container")
        .should('have.text',"United Arab Emirates")

    })

    it.skip ("DD with auto suggest Select",()=>{

        cy.visit("https://www.wikipedia.org/")

        cy.get("#search-input").type("Delhi")

        cy.get(".suggestion-title").contains('Delhi University').click()

        cy.get(".mw-page-title-main").should('have.text',"Delhi University")

    })
    it.only ("DD with Dynamic",()=>{

        cy.visit("https://www.google.com/")

        cy.get("#APjFqb").type("cypress automation")

        // cy.get("div.wM6W7d > span").contains('cypress automation tutorial').click()

        // cy.get("textarea.gLFyf").should('have.value',"cypress automation tutorial")

        cy.get("div.wM6W7d > span").each( ($el,index,$list)=>
        {
            if ($el.text()=="cypress automation tutorial")
            {
                cy.wait(2000)       
                cy.wrap($el).click()
            }
        })
        cy.get("textarea.gLFyf").should('have.value',"cypress automation tutorial")


    })




})