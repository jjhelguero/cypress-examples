/// <reference types="cypress" />
This answers github discussion
https://github.com/cypress-io/cypress/discussions/24968

<!-- fiddle Is not visible, does not exist-->

```html
<div>
  <div id="visible">This is visible</div>
  <div style="display: none" id="IsNotVisible">This is not visible</div>
</div>
```

```js
const checkDoesNotExistOrIsNotVisible = ($el) => {
  const doesNotExist = $el.length == 0;
  const isNotVisible = !$el.is("visible");
  const doesNotExistOrIsNotVisible = doesNotExist || isNotVisible;

  expect(doesNotExistOrIsNotVisible, "does not exist or is not visible").to.be
    .true;
};
cy.get("#visible").should("be.visible");
cy.get("#isNotVisible").should("not.be.visible").and("exist");
cy.get("#doesNotExist").should("not.exist");
cy.get("#isNotVisible").should(($el) => {
  checkDoesNotExistOrIsNotVisible($el);
});
cy.get("#doesNotExist").should(($el) => {
  checkDoesNotExistOrIsNotVisible($el);
});
```

<!-- fiddle-end -->
