/// <reference types="cypress" />

This is an answer to stackoverflow
https://stackoverflow.com/questions/75174921/cypress-checking-value-property-inside-a-div

<!-- fiddle check value of input-->

```html
<input
  as-automation=""
  type="text"
  placeholder="Put the initial value here"
  value="999.99"
/>
```

```js
const value = "999.99";
cy.get("input").should("have.value", value);

cy.get("input").should(($input) => {
  const val = $input.val();

  expect(val).to.eq(value);
});

cy.get("input").invoke("val").should("eq", value);
```

<!-- fiddle-end -->
