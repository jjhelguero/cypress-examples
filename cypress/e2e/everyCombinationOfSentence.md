/// <reference types="cypress" />
This answers stackoverflow question
https://stackoverflow.com/questions/72669434/is-there-any-way-to-test-every-possible-combination-of-a-sentence-with-cypress

<!-- fiddle Every combination of sentence-->

```html
<div id="sentence"></div>
```

```js
const initialArray = ["He", "She", "It"];
const middleArray = ["is", "was", "were"];
const lastArray = ["a dog", "a cat", "a wizard"];

const randomInitial =
  initialArray[Math.floor(Math.random() * initialArray.length)];
const randomMiddle =
  middleArray[Math.floor(Math.random() * middleArray.length)];
const randomLast = lastArray[Math.floor(Math.random() * lastArray.length)];

const fullSentence = randomInitial + " " + randomMiddle + " " + randomLast;

var text = document.getElementById("sentence");

text.textContent += fullSentence;
```

```js
const matcher = /(He|She|It)\s(is|was|were)\s(a)\s(dog|cat|wizard)/i;
cy.get("#sentence").invoke("text").should("match", matcher);
```

<!-- fiddle-end -->
