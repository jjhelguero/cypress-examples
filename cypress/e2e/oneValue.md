/// <reference types="cypress" />
This answers stackoverflow question
https://stackoverflow.com/questions/74209029/cypress-check-that-at-least-one-input-in-a-group-has-a-value#74211057

<!-- fiddle check one input has value and rest are do not-->

```html
<div data-test-letterinputcontainer="0">
  <input value="" type="text" />
  <input value="" type="text" />
  <input value="f" type="text" />
  <input value="" type="text" />
  <input value="" type="text" />
  <input value="" type="text" />
</div>
```

```js
cy.get("[data-test-letterinputcontainer=0]")
  .should("be.visible")
  .find("[value=f]")
  .its("length")
  .should("eq", 1);

cy.get("[data-test-letterinputcontainer=0]")
  .children()
  .its("length")
  .then((length) => {
    cy.get("[data-test-letterinputcontainer=0]")
      .find("[value='']")
      .its("length")
      .should("eq", length - 1);
  });
```

<!-- fiddle-end -->
