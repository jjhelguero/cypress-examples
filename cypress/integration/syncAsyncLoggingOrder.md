/// <reference types="cypress" />

This is a response to the stackoverflow question
https://stackoverflow.com/questions/72492152/how-to-return-result-from-cypress-function-after-set

<!-- fiddle Async/Sync code -->

```html
<div class="total">2.5</div>
```

```js
function getValues(date) {
  let totalValue = -10;
  return cy
    .get(".total")
    .invoke("text")
    .then((value) => cy.log("Value: " + value));
}

getValues().then((totalValues) => {
  cy.log("Total values: " + totalValues);
});
```

<!-- fiddle-end -->
