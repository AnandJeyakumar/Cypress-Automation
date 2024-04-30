// Before
// After
// Beforeeach
// Aftereach

describe("File Upload",()=>{


    before("before",()=>{
        cy.log("********* before Launch APP**********")
    })
    after("after",()=>{
        cy.log("********* after Close APP**********")
    })
    beforeEach("beforeEach",()=>{
        cy.log("*********beforeEachLaunch APP**********")
    })
    afterEach("afterEach",()=>{
        cy.log("*********afterEach APP**********")
    })
    it('search',()=>{
        cy.log("*********Searching**********")
    })
    it('Advance Search',()=>{
        cy.log("*********Advacned Searching**********")
    })
    it('List of Products',()=>{
        cy.log("*********Listing Products**********")
    })

})