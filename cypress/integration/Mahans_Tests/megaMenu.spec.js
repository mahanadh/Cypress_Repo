describe('Mega Menu test script', function(){
    it('Mega Menu test case', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // Cypress doesnot handle mega menu
        // Instead as it supports jquery we can use jquery methods to handle mega menu's
        // To show the hidden values in the button we use jquery method called "show()"
        // To invoke the jquery method in cypress we use invoke

        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')
        
        // Cypress also gives the option to directly find the hidden element and use it. This can be done as below by disabling error checking and force clicking
        // cy.contains('Top').click({force: true})
        // cy.url().should('include','top')

    })
})