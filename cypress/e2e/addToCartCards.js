// this answers stackoverflow question 
// https://stackoverflow.com/questions/74364354/what-is-the-difference-between-these-two-snippets

beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/angularpractice/shop')
})

it('add items to cart based on card text', () => {
    cy.contains('.card', /iphone x/i)
      .should('be.visible')
      .contains('button', /add/i)
      .click()

    cy.contains('.card', /samsung note 8/i)
      .should('be.visible')
      .contains('button', /add/i)
      .click()

    cy.contains('.card', /nokia edge/i)
      .should('be.visible')
      .contains('button', /add/i)
      .click()
    
    cy.contains('.card', /blackberry/i)
      .should('be.visible')
      .contains('button', /add/i)
      .click()
})

it('add items to cart with .each()', () => {
    const product_names = [
        'iphone X', 
        'Samsung Note 8',
        'Nokia Edge',
        'Blackberry'
    ]
    cy.get('.card')
      .should('have.length', 4)
      .each(($el, index) => {
        cy.contains(product_names[index])
          .should('be.visible')
        cy.contains('button', /add/i)
          .should('be.visible')
          .click()
      })
})