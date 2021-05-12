//<reference types="cypress" />

context('Calculation', () => {
    beforeEach(() => {
        cy.visit('https://calculator-ecru.vercel.app/')
    })
    it('selects each number button', () => {

        cy.contains('1').click() 
        cy.contains('2').click() 
        cy.contains('3').click() 
        cy.contains('4').click() 
        cy.contains('5').click() 
        cy.contains('6').click() 
        cy.contains('7').click() 
        cy.contains('8').click() 
        cy.contains('9').click() 
        cy.contains('0').click() 

    })
    it('checks adding', () => {

        cy.contains('1').click()
        cy.contains('+').click()
        cy.contains('2').click() 
        cy.contains('=').click() 
        cy.get('.output').find('.current-operand').should('have.text', '3')
        

    })
    it('checks substraction', () => {

        cy.contains('9').click()
        cy.contains('-').click()
        cy.contains('5').click() 
        cy.contains('=').click() 
        cy.get('.output').find('.current-operand').should('have.text', '4')
        

    })
    it('checks multiplying', () => {

        cy.contains('9').click()
        cy.contains('*').click()
        cy.contains('5').click() 
        cy.contains('=').click() 
        cy.get('.output').find('.current-operand').should('have.text', '45')
        

    })
   it('checks division', () => {

        cy.contains('8').click()
        cy.contains('÷').click()
        cy.contains('4').click() 
        cy.contains('=').click() 
        cy.get('.output').find('.current-operand').should('have.text', '2')
        

    }) 

    it('checks float score', () => {

        cy.contains('7').click()
        cy.contains('÷').click()
        cy.contains('3').click() 
        cy.contains('=').click() 
        cy.get('.output').find('.current-operand').should('have.text', '2.3333333333333335')
        

    })
    it('checks adding then substraction', () => {

        cy.contains('8').click()
        cy.contains('+').click()
        cy.contains('8').click() 
        cy.contains('-').click()
        cy.contains('6').click()
        cy.contains('=').click()  
        cy.get('.output').find('.current-operand').should('have.text', '14')
        

    }) 
    it('checks delete', () => {

        cy.contains('8').click()
        cy.contains('2').click() 
        cy.contains('DEL').click() 
        
   
        cy.get('.output').find('.current-operand').should('have.text', '8')
        

    }) 
    it('checks clear', () => {

        cy.contains('8').click()
        cy.contains('2').click() 
        cy.contains('AC').click() 
        
   
        cy.get('.output').find('.current-operand').should('have.text', '')
        

    })



})