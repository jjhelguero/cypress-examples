/// <reference types="cypress" />

// This answers stackoverflow question
// https://stackoverflow.com/questions/74959633/how-can-i-get-a-random-text-from-txt-in-cypress

// @ts-ignore
import textArrayFromImport from '../fixtures/list.json'
const textArrayFromRequire = require('../fixtures/list.json')

it('use require', function() {
    const randomTextFromRequire = Cypress._.sample(textArrayFromRequire)
    cy.wrap(randomTextFromRequire).should('be.oneOf', textArrayFromRequire)
})

it('use import', function() {
    const randomTextFromImport = Cypress._.sample(textArrayFromImport)
    cy.wrap(randomTextFromImport).should('be.oneOf', textArrayFromImport)
})

it('use cy.fixture', function() {
    cy.fixture('list.json').then(textArrayFromFixture => {
        const randomTextFromFixture = Cypress._.sample(textArrayFromFixture)
        expect(randomTextFromFixture).to.be.oneOf(textArrayFromFixture)
    })
})
