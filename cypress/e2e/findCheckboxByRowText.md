/// <reference types="cypress" />
This answer stackoverflow question
https://stackoverflow.com/questions/75309349/how-to-select-a-checkbox-for-a-div-using-cypress

<!-- fiddle Find checkbox by row text-->

```html
<div role="row" data-testid="table-row-0">
    <div role="cell">
        <input  data-testid="table-row-checkbox" type="checkbox" checked> //uncheck this                checkbox
        <label></label>
    </div>
    <div role="cell">name1</div> //find by this name1
    <div role="cell">type1</div>
</div>
<div role="row" data-testid="table-row-1">
    <div role="cell">
        <input  data-testid="table-row-checkbox" type="checkbox" checked>
        <label></label>
    </div>
    <div role="cell">name2</div>
    <div role="cell">type2</div>
</div>
```

```js
cy.contains('[data-testid^=table-row-]','name1')
  .find('[data-testid=table-row-checkbox]')
  .should('be.checked')
  .uncheck()
```

<!-- fiddle-end -->
