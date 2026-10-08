describe("", () => {
  beforeEach(() => {
    cy.login("bropet@mail.ru", "123");
  });

  it("Should add book in favorites", () => {
    let bookName = "Harry Potter";
    cy.addBook(bookName);
    cy.addBookInFavorites(bookName);
    cy.contains("Favorites").click();
    cy.contains("[class = 'card-title h5']", bookName).should("be.visible");
  });

  it("Should delete book from favorites", () => {
    let bookName = "Lord of the Rings";
    cy.addBook(bookName);
    cy.addBookInFavorites(bookName);
    cy.contains("Favorites").click();
    cy.contains(".card-title.h5", bookName)
      .parents(".h-100.card")
      .find(".card-footer .btn.btn-secondary")
      .click();
    cy.contains("[class = 'card-title h5']", bookName).should("not.exist");
  });

  it("Should add book in favorites from checkbox", () => {
    let bookName = "Сrime and punishment";
    cy.contains("button", "Add new").click();
    cy.get("#title").type(bookName);
    cy.get("#favorite").click();
    cy.contains("button", "Submit").click();
    cy.contains("Favorites").click();
    cy.contains("[class = 'card-title h5']", bookName).should("be.visible");
  });
});
