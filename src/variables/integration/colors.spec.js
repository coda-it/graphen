describe("Colors", () => {
  before(() => {
    cy.visit("/");
  });

  it("should make a screenshot", () => {
    cy.get(".docs-tokens").screenshot();
  });

  describe("color brand primary", () => {
    it("should have proper styles", () => {
      cy.contains(".docs-token-row", "$gb-color-primary")
        .should("have.class", "docs-token-row")
        .and("contain", "Primary");
    });

    it("should have proper properties", () => {
      cy.contains(".docs-token-row", "$gb-color-primary")
        .find(".swatch")
        .should("have.css", "background-color")
        .and("equal", "rgb(51, 122, 183)");
    });
  });

  describe("color brand text", () => {
    it("should have proper styles", () => {
      cy.contains(".docs-token-row", "$gb-color-text")
        .should("have.class", "docs-token-row")
        .and("contain", "Text");
    });

    it("should have proper properties", () => {
      cy.contains(".docs-token-row", "$gb-color-text")
        .find(".swatch")
        .should("have.css", "background-color")
        .and("equal", "rgb(88, 88, 88)");
    });
  });

  describe("color brand link", () => {
    it("should have proper styles", () => {
      cy.contains(".docs-token-row", "$gb-color-link")
        .should("have.class", "docs-token-row")
        .and("contain", "Link");
    });

    it("should have proper properties", () => {
      cy.contains(".docs-token-row", "$gb-color-link")
        .find(".swatch")
        .should("have.css", "background-color")
        .and("equal", "rgb(51, 122, 183)");
    });
  });

  describe("color brand component", () => {
    it("should have proper styles", () => {
      cy.contains(".docs-token-row", "$gb-color-component")
        .should("have.class", "docs-token-row")
        .and("contain", "Component");
    });

    it("should have proper properties", () => {
      cy.contains(".docs-token-row", "$gb-color-component")
        .find(".swatch")
        .should("have.css", "background-color")
        .and("equal", "rgb(245, 245, 245)");
    });
  });
});
