describe("Handling Web Tables",()=>{

    beforeEach("Login",()=>{
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get("#input-username").type("demo")
        cy.get("#input-password").type("demo")
        cy.get("button[type='submit']").click()
        cy.get(".btn-close").click()
        // Customer >> Customer in side tab
        cy.get("#menu-customer>a").click()
        cy.get("#menu-customer >ul >li:first-child").click() 
    })
    it.skip("checking Number of Rows and Columns",()=>{
        cy.get("table[class='table table-bordered table-hover'] >tbody>tr")
        .should('have.length',10)
        cy.get("table[class='table table-bordered table-hover'] >thead>tr>td")
        .should('have.length',7)
    })
    it.skip("Checking cell data from specific column",()=>{
    })


    it.skip("Reading all the data from row and column",()=>{
        cy.get("table[class='table table-bordered table-hover'] >tbody>tr")
        .each( ($row, index, $rows)=>{

            cy.wrap($row).within( ()=>{

                cy.get('td').each( ($col,index,$cols)=>{
                    cy.log($col.text())
                })
            })
        })
    })
    let totalPages;
    it("Pagination",()=>{
        cy.get(".col-sm-6.text-end")
        .then((e)=>{
            let myText=e.text()
            totalPages = myText.substring(myText.indexOf('(')+1,myText.indexOf('Pages')-1)
            cy.log("The Total Number of Pages are ---->",totalPages)

            totalPages=5;
    for (let p =1;p<=totalPages;p++)
    {
        if(p>1)
        {
            cy.log("The Active Page is :",p);
            cy.get("ul.pagination >li:nth-child("+p+")").click()
            cy.get("table[class='table table-bordered table-hover'] >tbody>tr")
            .each(($row,index,$rows)=>{   //row iteration
                cy.wrap($row).within(()=>{
                    cy.get('td:nth-child(3)').then((e)=>{  //TD iteration
                        cy.log(e.text()) //Email
                    })
                })
            })
        }
    }
        })
    })
})