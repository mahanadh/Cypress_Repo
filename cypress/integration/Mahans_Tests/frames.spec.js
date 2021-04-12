/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Frames related test script', function(){
    it('Frames related test case', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // Frames: a website of a domain embedded in the html itself
        // we need to handle this and this can be done through a plugin
        // The plugin is "cypress-iframe".
        
        cy.frameLoaded('#courses-iframe') // Select the frame as a whole
        cy.iframe().find('a[href*="mentorship"]').eq(0).click() // Now this, switches to the frame and we can manipulate the properties in the frame
        
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length', '2') // always use iframe() when working in frames
        // Neither Cypress nor Selectors hub can have access to iframe so, always go to the iframe's main website and find css from there 
    })
})