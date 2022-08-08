/// <reference types="cypress" />

This is an answer to Cypress discussion

<!-- fiddle -->

```js
cy.wrap(1).as("num");
cy.get("@num1").then(cy.log);
```

<!-- fiddle-end -->
