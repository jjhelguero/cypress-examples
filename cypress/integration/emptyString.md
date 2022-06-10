/// <reference types="cypress" />

<!-- fiddle -->

```html
<div>
  <div class="emptyString"></div>
  <div class="string">This is not empty</div>
</div>
```

```js
cy.get(".emptyString").invoke("text").should("equal", "");
cy.get(".emptyString").invoke("text").should("have.length", 0);

const str = "This is not empty";
cy.get(".string").invoke("text").should("equal", str);
cy.get(".string")
  .invoke("text")
  .should((text) => expect(text.length).to.be.gte(0));
```

<!-- fiddle-end -->
