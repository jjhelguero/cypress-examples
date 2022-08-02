/// <reference types="cypress" />

This answers stackoverflow question
https://stackoverflow.com/questions/73209173/how-we-can-slice-elements-fetched-using-cy-get-and-then-run-tests-on-those-spe

<!-- fiddle slice array of jQuery elements-->

```html
<div>one</div>
<div>two</div>
<div>three</div>
<div>four</div>
<div>five</div>
```

```js
cy.get("div")
  .should("have.length", 5)
  .invoke("slice", "0", "3")
  .should("have.length", 3);
```

<!-- fiddle-end -->
