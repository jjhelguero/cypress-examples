/// <reference types="cypress" />
<!-- fiddle Display None -->
```html
<div class="container">

  <!-- Child-1 --> 
  <div class="child-group child-1" style=""> <!-- Notice empty style-tag -->
    <div class="buttons">
      <button class="go-to-child-group-1">Child-group-1</button>
      <button class="go-to-child-group-2">Child-group-2</button>
      <button class="go-to-child-group-3">Child-group-3</button>
    </div>
    <div class="content">Content1 content1 content1</div>
  </div>

  <!-- Child-2 -->
  <div class="child-group child-2" style="display: none"> <!-- Notice display none -->
    <div class="buttons">
      <button class="go-to-child-group-1">Child-group-1</button>
      <button class="go-to-child-group-2">Child-group-2</button>
      <button class="go-to-child-group-3">Child-group-3</button>
    </div>
    <div class="content">Content2 content2 content2</div>
  </div>

  <!-- Child-3 -->
  <div class="child-group child-3" style="display: none"> <!-- Notice display none -->
    <div class="buttons">
      <button class="go-to-child-group-1">Child-group-1</button>
      <button class="go-to-child-group-2">Child-group-2</button>
      <button class="go-to-child-group-3">Child-group-3</button>
    </div>
    <div class="content">Content3 content3 content3</div>
  </div>
</div>

<script>
    let buttons = document.querySelectorAll('[class^="child-group"]')
    buttons.forEach(button => {
        button.addEventListener("click", function(){
            $(this).attr('style', 'display: none')
            $(this).siblings(). attr('style', '')
    })
    })
</script>
```

```js
cy.get('button')
.filter(':visible')
.should('have.length', 3)
// .first()
// .click()

```

<!-- fiddle-end -->