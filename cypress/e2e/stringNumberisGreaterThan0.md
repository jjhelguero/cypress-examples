/// <reference types="cypress" />

This answers the cypress discussion
https://github.com/cypress-io/cypress/discussions/22293

<!-- fiddle Check a string number is greater than 0-->

```html
<h3 class="class name">"Messages" " (100)" "&lrm;"</h3>
```

```js
cy.get("h3")
  .invoke("text")
  .then((text) => {
    const matcher = /\((?<number>\d+)\)/;
    return text.match(matcher)?.groups?.number;
  })
  .then(parseInt)
  .should("be.greaterThan", 0);
```

<!-- fiddle-end -->
