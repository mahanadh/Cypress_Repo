/// <reference types="Cypress" />

describe('My First Test Suite1', function() {
    it('My First Test Case11', function(){
        // all test steps for this test case should come here
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/") // to go to a website
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        // cy.get('.product:visible').should('have.length',4)
        cy.get('.products').find('.product').should('have.length', 4)
        // first time quering in parent should use get then, we can use find afterwards in anything in child related matters
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click() // eq is used to get a particular index in the entire result and contains helps matching a text similar to what there is in the DOM
        // using eq to find the index is not dynamic as the index may change in days to come when there are other items added to the array
        // Hence, we take the following approach 

        // Aliasing 
        cy.get('.products').as('productLocator')

        cy.get('@productLocator').find('.product').each(($e1, index, $list) => {
            const itemText=$e1.find('h4.product-name').text()
            if(itemText.includes('Cashews')){
                $e1.find('button').click()
            }
        })
        // This is to assert of correct value is being populated
        cy.get('.brand').should('have.text', 'GREENKART')


        // This is to print in logs
        cy.get('.brand').then(function(logoelement){
            cy.log(logoelement.text())
        })
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
            console.log('Test')
        })
    })

    it('My Second Test Case', function(){

    })

})