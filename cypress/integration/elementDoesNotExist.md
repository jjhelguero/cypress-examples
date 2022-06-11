/// <reference types="cypress" />

This is an answer to stackoverflow question
https://stackoverflow.com/questions/72436602/can-cypress-give-me-an-error-message-when-there-has-been-an-error

<!-- fiddle Element does not exist-->

```html
<div>
  <div class="does-exist">This is element exists</div>
</div>
```

```js
cy.get(".does-not-exist")
  .should("not.exist")
  .then(($el) => {
    if ($el == null) {
      throw new Error("Item does not exist in DOM");
    }
  });
```

<!-- fiddle-end -->
