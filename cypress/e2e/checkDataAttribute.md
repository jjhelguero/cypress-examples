/// <reference types="cypress" />

This is an answer to stackoverflow
https://stackoverflow.com/questions/74660475/how-to-create-an-array-foreach-of-the-playlist-card-ids-on-html-landing-page-and

<!-- fiddle check attribute-->

```html
<div data-object-type="130">playlist 1</div>
<div data-object-type="100">playlist 2</div>
<div data-object-type="1">playlist 3</div>
```

```js
const expectedOrder = ["130", "100", "1"];
cy.get("[data-object-type]")
  .should("have.length", 3)
  // get array of data-object-type attr
  .then(($list) =>
    Cypress._.map($list, ($el) => $el.getAttribute("data-object-type"))
  )
  .should("deep.equal", expectedOrder);
```

<!-- fiddle-end -->
