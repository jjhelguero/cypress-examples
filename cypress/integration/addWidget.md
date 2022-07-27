/// <reference types="cypress" />

This is an answer to Cypress discussion
https://github.com/cypress-io/cypress/discussions/22951

<!-- fiddle More resilient test-->

```js
// doLogin()
cy.visit("https://demo-b2c.orocrm.com/index.php/user/login");
cy.get("#prependedInput").type("admin");
cy.get("#prependedInput2").type("admin");

// before we log in we spy api call made by the app
cy.intercept("POST", "https://demo-b2c.orocrm.com/index.php/sync/ticket").as(
  "ticket"
);
// spy on navigation bar
cy.intercept(
  "GET",
  "https://demo-b2c.orocrm.com/index.php/api/rest/latest/navigationitems/pinbar"
).as("navBar");
cy.contains(/log in/i)
  // good to have assertions before clicking
  .should("be.visible")
  .and("be.enabled")
  .click();
// check progress bar is shown and then wait for ticket intercept
cy.get("#progressbar").should("be.visible");
cy.wait("@ticket");
// now progress bar should not be visible
cy.get("#progressbar").should("not.be.visible");
// once ticket intercept is completed we are redirected to new page
// so we should check the new url does not contain the '/user/login'
// in the pathname
cy.location("pathname").should("not.include", "/user/login");
// loading icon is shown and we should check it
cy.get(".loader-mask").should("be.visible");
cy.wait("@navBar");
// now loading icon should not be visible
cy.get(".loader-mask").should("not.be.visible");
cy.contains("#user-menu button", "John Doe").should("be.visible");

//doOpenAddWidgetDialog()
// use contains for stronger selection
cy.contains(/Add widget/i)
  .should("be.visible")
  .click();
// now we expect a modal to appear for adding a widget
cy.contains(".modal", /Dashboard Widgets/i).should("be.visible");
```

<!-- fiddle-end -->
