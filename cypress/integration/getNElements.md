/// <reference types="cypress" />
This answers Cypress discussion
https://github.com/cypress-io/cypress/discussions/22362

<!-- fiddle Get N elements-->

```html
<div class="messages">
  <div class="messages_messagesList">
    <div>
      <div class="inbox-message">text1</div>
      <div class="inbox-message">text1</div>
      <div class="inbox-message">text1</div>
      <div class="inbox-message">text1</div>
      <div class="inbox-message">text1</div>
      <div class="inbox-message">text1</div>
    </div>
  </div>
</div>
```

```js
cy.get(".inbox-message").filter(":lt(3)").should("have.length", 3);
```

```js
cy.get(".inbox-message:lt(3)").should("have.length", 3);
```

<!-- fiddle-end -->
