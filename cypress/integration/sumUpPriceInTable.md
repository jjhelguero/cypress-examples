/// <reference types="cypress" />

This is an answer to stackoverflow question
https://stackoverflow.com/questions/73240644/cypress-to-loop-to-td-values-and-get-a-specific-tr-to-sum-tr-length-will-be-dyn

<!-- fiddle sum up prices in table-->

```html
<table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Apple</td>
      <td>£1.99</td>
    </tr>
    <tr>
      <td>Kiwi</td>
      <td>Out of Stock</td>
    </tr>
    <tr>
      <td>Banana</td>
      <td>£0.99</td>
    </tr>
  </tbody>
</table>
```

```js
cy.get("td:contains(£)")
  .should("have.length", 2)
  .then(($prices) => {
    // we get the innerText to get the float value of the text before we sum them
    const priceText = Cypress._.map($prices, (el) => el.innerText);
    const removeAllNonNumeric = (str) => str.replace(/[^0-9.]/g, "");
    const prices = priceText.map(removeAllNonNumeric).map(parseFloat);

    // sum up the prices and return the value
    const sum = prices.reduce((partialSum, a) => partialSum + a, 0);

    return sum;
  })
  // now we are working with the sum of prices and assert it equals 2.98
  .should("eq", 2.98);
```

<!-- fiddle-end -->
