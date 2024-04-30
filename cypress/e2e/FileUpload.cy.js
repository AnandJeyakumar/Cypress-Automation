import 'cypress-file-upload'
describe("File Upload",()=>{

    it('Single Up-load',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile('QA Automation Engineer_Anand Jeyakumar.pdf');
        cy.get("#file-submit").click()
        cy.wait(3000);
        cy.get("div[class='example'] h3").should('have.text',"File Uploaded!")
    })
})

// The balance uploading type has been noted in notes