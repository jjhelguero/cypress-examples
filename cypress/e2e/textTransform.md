/// <reference types="cypress" />

<!-- fiddle Text Transform -->

```css
div.a {
  text-transform: uppercase;
}
```

```html
<div class="a" id="text">This text is transformed</div>
```

```js
cy.contains("this text is transformed", { matchCase: false }).should(
  "have.css",
  "text-transform",
  "uppercase"
);
```

<!-- fiddle-end -->
