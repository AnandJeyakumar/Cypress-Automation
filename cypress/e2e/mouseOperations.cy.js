require('@4tw/cypress-drag-drop')

describe("Mouse Operations",()=>{

    it.skip('MouseOver',()=>{
        cy.visit("https://demo.opencart.com/")
        cy.xpath("//a[normalize-space()='Mac (1)']")
        .should('not.be.visible')

        cy.xpath("//a[normalize-space()='Desktops']").trigger('mouseover').click()

        cy.xpath("//a[normalize-space()='Mac (1)']")
        .should('be.visible')
    })

    it.skip('Right Click',()=>{
    })
    it.skip('Double Click',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#field2").should('have.value','')
        // cy.get("button[ondblclick='myFunction1()']").trigger("dblclick")
        cy.get("button[ondblclick='myFunction1()']").dblclick()

        cy.wait(3000)
        cy.get("#field2").should('have.value','Hello World!')
    })
    it.skip('Drag and Drop',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.get("#draggable").drag("#droppable ",{force: true})
        cy.wait(3000)
    })
    it('Scrolling Page',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.get(".active").scrollIntoView({duration:2000})
        cy.wait(3000)
    })
})