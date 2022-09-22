/// <reference types="cypress" />

This answers the stackoverflow question
https://stackoverflow.com/questions/73810379/in-cypress-testing-how-to-check-if-these-tiles-are-in-order

<!-- fiddle Check order-->

```html
<table id="myTable">
  <thead>
    <th>Chapter 1</th>
    <th>Chapter 5</th>
    <th>Chapter 6</th>
    <th>Chapter 8</th>
    <th>Chapter 10</th>
  </thead>
</table>
```

```js
cy.get("th").then(($el) => {
  // use lodash .map() to get innerText of each element
  // then extract number and convert to int
  const originalOrder = Cypress._.map($el, (n) => {
    return +n.innerText.split(" ")[1];
  });
  // make a copy of the original array to sort
  const sortedOrder = [...originalOrder];
  // use comparator to sort numbers
  sortedOrder.sort((a, b) => a - b);
  expect(originalOrder, "Chapters are in order").to.deep.equal(sortedOrder);
});
```

<!-- fiddle-end -->
