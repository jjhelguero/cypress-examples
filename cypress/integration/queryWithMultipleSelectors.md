/// <reference types="cypress" />
<!-- fiddle -->

```html
<!DOCTYPE htmls>
<html>
<div>
  <div data-t="one">This is one</div>
  <div data-t="two">This is two</div>
</div>
</html>
```

```js
cy.get('[data-t=one],[data-t=two]')
```

<!-- fiddle-end -->