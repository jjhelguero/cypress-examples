/// <reference types="cypress" />

This answers the stackoverflow question
https://stackoverflow.com/questions/74971263/is-there-any-alternative-to-check-if-the-text-displayed-of-all-the-children-are

<!-- fiddle Check unique text in children-->

```html
<style>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196F3;
  padding: 10px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
</style>
</head>
<body>
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
</div>

</body>
</html>
```

```js
cy.get(".grid-container")
  .children()
  // get innerText of all children
  .then(($el) => Cypress._.map($el, (el) => el.innerText))
  .then((childrenText) => {
    // create new array of unique values
    const uniqueText = Array.from(new Set(childrenText));
    expect(childrenText).to.deep.equal(uniqueText);
  });
```

<!-- fiddle-end -->
