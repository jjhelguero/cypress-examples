/// <reference types="cypress" />

This answers stackoverflow question
https://stackoverflow.com/questions/74810281/how-to-select-all-elements-that-do-not-contain-a-particular-value-or-set-of-valu

<!-- fiddle Find text not containing certain text -->

```html
<ul class="list">
  <div>1</div>
  <div>2</div>
  <div>6</div>
  <div>3</div>
  <div>9</div>
  <div>5</div>
  <div>21</div>
</ul>
```

```js
const match = ["1", "2", "3", "5"];
cy.get(".list > div")
  .then(($el) => {
    // filter out elements having '6', '9', and '21'
    // and return the array to cypress chain
    return Cypress._.filter($el, (el) => {
      const text = el.innerText;
      return text != "6" && text != "9" && text != "21";
    });
  })
  // map out innerText for this example only to assert
  // we extracted elements that are no '6', '9', and '21'
  .then((list) => Cypress._.map(list, "innerText"))
  .should("deep.equal", match);
```

<!-- fiddle-end -->
