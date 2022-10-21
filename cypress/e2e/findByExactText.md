/// <reference types="cypress" />
This answer stackoverflow question
https://stackoverflow.com/questions/74153577/cypress-get-specified-element-with-exact-text

<!-- fiddle Find by exact text match-->

```html
<div>some text1234</div>
<div>some text</div>
<div>some text</div>
<div>part of some text</div>
```

```js
cy.contains(/^some\stext$/).should("have.text", "some text");
```

<!-- fiddle-end -->
