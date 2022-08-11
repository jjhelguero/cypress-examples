This answers stackoverflow question
https://stackoverflow.com/questions/73317609/select-random-option-from-dropdown-in-cypress

<!-- fiddle Select random option from dropdown-->

```html
<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
```

```js
// get options length then use math random to select random car
cy.get("#cars")
  .find("option")
  .its("length")
  .then((optionsLength) => {
    const random_option = Math.floor(Math.random() * optionsLength);
    cy.get("#cars").select(random_option);
  });
```

<!-- fiddle-end -->
