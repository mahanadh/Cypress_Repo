describe('UI elements automation', function(){
    it('UI related element automation', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
        // when there is a popup then the "window:alert" event is triggered
        // when we click the alert button the event gets triggered and on the event trigger the following code is executed
        cy.on('window:alert',(str) => {
            // assertions all come from Mocha upon which cypress api is built
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm',(str) => {
            // assertions all come from Mocha upon which cypress api is built
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })
})