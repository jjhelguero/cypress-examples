/// <reference types="cypress" />

This answers stackoverflow question
https://stackoverflow.com/questions/75617265/cypress-to-get-only-href-in-a-page-that-contains-specific-path-inside

<!-- fiddle Find anchors by href-->

```html
<a href='/category/fruits/kiwi'>Kiwi</a>
<a href='/category/fruits/banana'>Banana</a>
<a href='/category/animals/snake'>Snake</a>
```

```js
cy.get('a[href*="/fruits/"]')
  .should('have.length', 2)
  .then(h => Cypress._.map(h, el => el.href))
  .then(cy.log)
```

<!-- fiddle-end -->
