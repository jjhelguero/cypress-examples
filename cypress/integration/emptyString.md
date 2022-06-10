/// <reference types="cypress" />

<!-- fiddle -->

```html
<div>
  <div class="emptyString"></div>
</div>
```

```js
cy.get(".emptyString").invoke("text").should("equal", "");
cy.get(".emptyString").its("length").should("equal", 1);
```

<!-- fiddle-end -->
