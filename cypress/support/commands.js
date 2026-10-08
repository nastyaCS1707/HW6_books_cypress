Cypress.Commands.add("login", (email, password) => {
  cy.visit("/");
  cy.contains("Log in").click();
  cy.get("#mail").type(email);
  cy.get("#pass").type(password);
  cy.contains("Submit").click();
});

Cypress.Commands.add("addBook", (bookName) => {
  cy.contains("button", "Add new").click();
  cy.get("#title").type(bookName);
  cy.contains("button", "Submit").click();
});

Cypress.Commands.add("addBookInFavorites", (bookName) => {
  cy.contains(".card-title.h5", bookName)
    .parents(".h-100.card")
    .find(".card-footer .btn.btn-success")
    .click();
});
