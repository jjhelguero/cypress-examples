/// <reference types="cypress" />

This answers the stackoverflow question
https://stackoverflow.com/questions/72993030/how-to-verify-tables-column-data-is-sorted-by-name-or-not

<!-- fiddle Check sorted data-->

```html
<table id="myTable">
  <thead>
    <td id="sortable" onclick="sortTable()">Data</td>
  </thead>
  <tbody>
    <tr>
      <td class="data">Kiwi</td>
    </tr>
    <tr>
      <td class="data">Apple</td>
    </tr>
    <tr>
      <td class="data">Banana</td>
    </tr>
  </tbody>
</table>
<script>
  function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    /*Make a loop that will continue until
  no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
    first, which contains table headers):*/
      for (i = 1; i < rows.length - 1; i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
      one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        //check if the two rows should switch place:
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
</script>
```

```js
cy.get(".data")
  .then(($el) => {
    // use lodash .map() to get innerText of each element
    // then sort the array
    return Cypress._.map($el, "innerText").sort();
  })
  .then(cy.log)
  .as("sortedArray");

cy.get("#sortable").should("be.visible").click();

cy.get("@sortedArray").then((sortedArray) => {
  cy.get(".data")
    .then(($el) => {
      // use lodash .map() to get innerText of each element
      // then sort the array
      return Cypress._.map($el, "innerText").sort();
    })
    .then(cy.log)
    .should("deep.equal", sortedArray);
});
```

<!-- fiddle-end -->
