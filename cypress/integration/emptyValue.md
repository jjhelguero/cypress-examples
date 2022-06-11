/// <reference types="cypress" />

<!-- fiddle -->

```html
<button class="emptyValue" value="">This button is empty</button>
<button class="notEmptyValue" value="notEmpty">This button is NOT empty</button>
```

```js
cy.get(".emptyValue").invoke("val").should("equal", "");
cy.get(".emptyValue").invoke("val").should("have.length", 0);

const val = "notEmpty";
cy.get(".notEmptyValue").invoke("val").should("equal", val);
cy.get(".notEmptyValue")
  .invoke("val")
  .then((val) => expect(val.length).to.be.gt(0));
```

<!-- fiddle-end -->
