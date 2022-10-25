/// <reference types="cypress" />
// This answers stackoverflow question
// https://stackoverflow.com/questions/74194094/how-to-save-api-token-to-use-later-in-cypress-test

let text
beforeEach(() => {
  cy.wrap(null).then(() => {
    text = "Hello"
  })
})

it("should have text 'Hello'", () => {
  // can access text variable directly
  cy.wrap(text).should('eq', 'Hello')
  // step below will fail when not using function()
  // cy.wrap(this.Number).should('eq', 4)
})

beforeEach(() => {
  cy.wrap(4).as("Number")
})

it("should log number", function() {
  cy.wrap(text).should('eq', 'Hello')
  // can access alias with function() and this keyword
  cy.wrap(this.Number).should('eq', 4)
})