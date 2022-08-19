This answers stackoverflow question
https://stackoverflow.com/questions/73412551/cypress-get-jquery-value-without-needing-then-or-each

<!-- fiddle find cell based on other cell value and column index-->

```html
<table>
  <thead>
    <tr>
      <th>Col A</th>
      <th>Col B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Val X</td>
      <td>ValY</td>
    </tr>
    <tr>
      <td>Val A</td>
      <td>Val B</td>
    </tr>
  </tbody>
</table>
```

```js
// get headers, map text, filter to Col B index
cy.get("th")
  .then(($headers) => Cypress._.map($headers, "innerText"))
  .then(cy.log)
  .invoke("indexOf", "Col B")
  .then((headerIndex) => {
    // find row containing Val A
    cy.contains("tbody tr", "Val A")
      .find("td")
      // get cell containing Val B
      .eq(headerIndex)
      .should("have.text", "Val B");
  });
```

<!-- fiddle-end -->
