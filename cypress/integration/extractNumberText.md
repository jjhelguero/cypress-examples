/// <reference types="cypress" />

This answers stackoverflow question
https://stackoverflow.com/questions/72797054/how-to-assert-on-a-number-which-is-comma-separated-in-cypress

<!-- fiddle Extract Number String and Assert -->

```html
<div id="num">5,000</div>
```

```js
const lowerBound = 1000;
const upperBound = 10000;
cy.get("#num")
  .invoke("text")
  .invoke("replaceAll", ",", "")
  .then(parseInt) // we convert to int
  .should("be.within", lowerBound, upperBound);
```

<!-- fiddle-end -->
