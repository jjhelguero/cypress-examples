/// <reference types="cypress" />

<!-- fiddle Input Max Length Characters -->

```html
<h4>The input maxlength attribute</h4>
<label for="fName">First Name:</label>
<input type="text" id="fName" name="fName" maxlength="30" />
```

```js
// use Cypress._.repeat() to type 40 characters
const moreThanMaxLength = Cypress._.repeat("asdf", 10);
cy.get("#fName").should("be.visible").type(moreThanMaxLength);
cy.get("#fName").then((text) => {
  const val = text[0].value;
  expect(val.length).to.equal(30);
  expect(val).to.not.equal(moreThanMaxLength);
});
```

<!-- fiddle-end -->
