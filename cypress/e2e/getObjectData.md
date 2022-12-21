/// <reference types="cypress" />

This answers stackoverflow question
https://stackoverflow.com/questions/74879295/get-data-from-array-in-json-api-object-in-cypress

<!-- fiddle get object data -->

```js
const data = {
  record: [
    {
      account: "acount_1",
      team: "Test 1",
      req_id: 12345,
    },
    {
      account: "acount_2",
      team: "Test 2",
      req_id: 23456,
    },
  ],
  metadata: {
    id: "abcde",
    private: false,
    createdAt: "2022-12-21T00:00:00.000Z",
  },
};
cy.wrap(data)
  // get records and check length
  .its("record")
  .should("have.length", 2)
  // get first team name
  .its("0.team")
  .should("eq", "Test 1");
```

<!-- fiddle-end -->
