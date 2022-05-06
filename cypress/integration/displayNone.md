/// <reference types="cypress" />
<!-- fiddle -->

```html
<div style="display:none">I'm hidden</div>
<div >I'm shown</div>
```

```js
cy.get('div')
.filter(':visible')
.should('have.text', `I'm shown`)
```

<!-- fiddle-end -->