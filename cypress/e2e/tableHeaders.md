/// <reference types="cypress" />

This is a response to the stackoverflow question
https://stackoverflow.com/questions/73268815/cypress-index-position-to-came-before-a-specific-string

<!-- fiddle Check table headers -->

```html
<table>
  <thead>
    <tr>
      <th></th>
      <th>Number</th>
      <th>Code</th>
      <th>Client</th>
      <th>Agent</th>
      <th>User</th>
      <th>Premium</th>
      <th>Status</th>
      <th>Time</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>one</td>
      <td>two</td>
      <td>three</td>
      <td>four</td>
      <td>five</td>
      <td>six</td>
      <td>seven</td>
      <td>eight</td>
      <td>nine</td>
      <td>ten</td>
    </tr>
  </tbody>
</table>
```

```js
const headers = [
  "",
  "Number",
  "Code",
  "Client",
  "Agent",
  "User",
  "Premium",
  "Status",
  "Time",
  "",
];
cy.get("th")
  .should("have.length", headers.length)
  .each((header, index) => {
    expect(header).to.have.text(headers[index]);
  });
```

<!-- fiddle-end -->
