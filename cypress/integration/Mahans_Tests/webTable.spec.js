describe('Web Tables Script', function(){
    it('Web Tables test case', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#product tr td:nth-child(2)').each(($e1, index, $list) =>
        {
            const tableContentName = $e1.text()
            if(tableContentName.includes("Python")){
                // now to go to the next td (sibling) we use a method called "next()"
                // next()==> gets the immediate next sibling of DOM
                // next can be used only with get so we create a scenario where we can do get without alering the process till now
                cy.get('#product tr td:nth-child(2)').eq(index).next().then(function(price){ // text cannot be used as it is not cypress command hence, to resolve promise we use "then"
                    const priceRecieved = price.text()
                    expect(priceRecieved).to.equal('25')
                })
            }
        })

    })
})