describe('Tab window related test script', function(){
    it('Tabs window related test case', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Workaround in tab instead of deleting target property

        cy.get('#opentab').then(function(e1){
            const url = e1.prop('href') // href property is pulled
            cy.visit(url)
            // If you are in the same domain then, this works but, if the domain  is changed then it does not work
            // To make it work and go to one domain to another then we --->
            // We have to use target and remove it to visit another domain
        })
    })
})