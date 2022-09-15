/// <reference types="cypress" />
This is an answer to stack overflow question
https://stackoverflow.com/questions/73734983/cypress-how-to-get-specific-sibling-of-the-element-in-table-i-have-three-td

<!-- fiddle Check other cell based on matching text in row-->

```html
<table id="myTable">
  <thead>
    <tr>
      <th>Instructor</th>
      <th>Course</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Rad Good</td>
      <td>Selenium Ruby</td>
      <td>35</td>
    </tr>
    <tr>
      <td>Rad Good</td>
      <td>Playwright Java</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Rad Good</td>
      <td>Selenium Python</td>
      <td>25</td>
    </tr>
  </tbody>
</table>
```

```js
cy.get("table > tbody > tr")
  .should("have.length.greaterThan", 0)
  .each(($row) => {
    cy.wrap($row)
      .contains("td", "Python", { timeout: 0 })
      .if("visible")
      .then(() => {
        cy.log("Price of Python course");
        cy.wrap($row).contains("td", "25").should("be.visible");
      })
      .else()
      .log("Instructor does NOT sell Python");
  });
```

<!-- fiddle-end -->
