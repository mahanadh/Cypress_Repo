describe('UI elements automation', function(){
    it('UI related element automation', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
// checkbox
        cy.get('#checkBoxOption1').check()
        // verify if it is checked or not
        cy.get('#checkBoxOption1').check().should('be.checked')
        // verify value of checkbox is meet or not
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1') // use and if multiple should is to be used
        // uncheck checkbox
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        // check multiple checkbox
        // find common(common locator) between the checkbox, in this case it is type hence using css selector 
        cy.get('input[type="checkbox"]').check(["option1","option2"])
// static dropdown
        // static bhayo bhaney by default tag name is select
        cy.get('select').select('option1')// we can use the UI value as well as html value
        // verify option1 it selected
        cy.get('select').select('option1').should('have.value','option1') // html value
// dynamic dropdown
        // take the type box and type a value
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($e1, index, $list) => 
        {
            if($e1.text() == 'India'){
                $e1.click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'India')

// hide/show (visibility and invisibility of elements)
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
// Radio 
        cy.get('input[value="radio1"]').should('have.value','radio1').check()
        
    })
})