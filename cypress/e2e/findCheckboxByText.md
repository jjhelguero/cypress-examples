/// <reference types="cypress" />

This answers stackoverflow question
https://stackoverflow.com/questions/72833931/how-to-check-mat-checkbox-based-on-label-during-cypress-test/72834798#72834798

<!-- fiddle Find check box by text -->

```html
<label>
  <input type="checkbox" />
  <span>Basic Search</span>
</label>
<label>
  <input type="checkbox" />
  <span>Advanced Search</span>
</label>
<label>
  <input type="checkbox" />
  <span>Other Search</span>
</label>
```

```js
cy.contains("label", /advanced search/i)
  // this will get checkbox input
  .find("input[type=checkbox]")
  .check();

cy.contains("label", /basic search/i)
  .find("input[type=checkbox]")
  .should("not.be.checked");
cy.contains("label", /advanced search/i)
  .find("input[type=checkbox]")
  .should("be.checked");
cy.contains("label", /other search/i)
  .find("input[type=checkbox]")
  .should("not.be.checked");
```

<!-- fiddle-end -->
