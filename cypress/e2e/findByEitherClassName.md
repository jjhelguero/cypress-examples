/// <reference types="cypress" />

This is an answer to github discussion
https://github.com/cypress-io/cypress/discussions/23859

<!-- fiddle Element does not exist-->

```html
<div>
  <div id="c1" class="classs1">class1</div>
  <div id="c2" class="class2">class2</div>
  <div id="c3" class="class3">class3</div>
  <div id="c12" class="class1 class 2">class1 and class2</div>
  <div id="c123" class="class1 class2 class3">All</div>
</div>
```

```js
cy.get("#c12").then(($el) => {
  const className = $el[0].className;
  expect(
    className,
    'element has either "class1", "class2", or "class3" class'
  ).to.match(/class1|class2|class3/);
});

cy.get("#c123")
  .then(($el) => $el[0].className)
  .should("match", /class1|class2|class3/);
```

<!-- fiddle-end -->
