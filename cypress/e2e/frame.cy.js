import 'cypress-iframe'
describe("Frame",()=>{

    it("Freame Locator by Plug In",()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.frameLoaded("#mce_0_ifr")

        cy.iframe("#mce_0_ifr").clear().type("I WIll GET A JOB SOON  {ctrl+a}");
        cy.get("[title=Bold]").click()

    })



})