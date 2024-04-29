describe("dropdown menu", () => {
  it("should open dropdown and pick a value", () => {
    cy.visit("localhost:3000");
    cy.get("[data-cy=dropdown-button]")[0]
      .click()
      .get("[data-cy=dropdown-item]")
      .contains("Red")
      .click()
      .get("[data-cy=dropdown-button]")
      .should("contain", "Red");

    cy.get("[data-cy=dropdown-button]")[0]
      .click()
      .get("[data-cy=dropdown-item]")
      .contains("Blue")
      .click()
      .get("[data-cy=dropdown-button]")
      .should("contain", "Blue"); 
  });
});
