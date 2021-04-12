describe('Tab window related test script', function(){
    it('Tabs window related test case', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // target attribute specifies where to open a sub window. 
        // example: <a id="opentab" class="btn-style class1 class2" href="https://www.rahulshettyacademy.com/" target="_blank" xpath="1">Open Tab</a>
        // In above target is used hence it opens in new tab. 
        // This is not allowed in cypress. Cypress doesnot allow opening in diff tab.
        // We need to manipulate DOM to behave that the sub tab is opened in the sab tab.
        // Basically, we need to remove the target attribute
        // This is done by using a jquery command called removeAttr 
        // And, this is invoked using a cypress function called invoke

        cy.get('#opentab').invoke('removeAttr','target').click()

        // Now to navigate to the back browser window
        // A cypress command called "go" is used for this
        // But, but, but - before going back to validate if I have gone to different child web ==>
        // we use Cypress command called "url"

        cy.url().should('include','index')
        cy.go("back")
    })
})