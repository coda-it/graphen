describe("Colors", () => {
  before(() => {
    cy.visit("localhost:3000");
  });

  it("should make a screenshot", () => {
    cy.get(".tst-colors").screenshot();
  });

  describe("color brand primary", () => {
    it("should have proper styles", () => {
      cy.get(".tst-colors-primary")
        .should("have.class", "c-sample")
        .should("have.class", "c-sample c-sample--brand-primary");
    });

    it("should have proper properties", () => {
      cy.get(".tst-colors-primary")
        .should("have.css", "background-color")
        .and("equal", "rgb(0, 175, 135)");
    });
  });

  describe("color brand text", () => {
    it("should have proper styles", () => {
      cy.get(".tst-colors-text")
        .should("have.class", "c-sample")
        .should("have.class", "c-sample c-sample--brand-text");
    });

    it("should have proper properties", () => {
      cy.get(".tst-colors-text")
        .should("have.css", "background-color")
        .and("equal", "rgb(51, 51, 51)");
    });
  });

  describe("color brand link", () => {
    it("should have proper styles", () => {
      cy.get(".tst-colors-link")
        .should("have.class", "c-sample")
        .should("have.class", "c-sample c-sample--brand-link");
    });

    it("should have proper properties", () => {
      cy.get(".tst-colors-link")
        .should("have.css", "background-color")
        .and("equal", "rgb(51, 122, 183)");
    });
  });

  describe("color brand component", () => {
    it("should have proper styles", () => {
      cy.get(".tst-colors-component")
        .should("have.class", "c-sample")
        .should("have.class", "c-sample c-sample--brand-component");
    });

    it("should have proper properties", () => {
      cy.get(".tst-colors-component")
        .should("have.css", "background-color")
        .and("equal", "rgb(245, 245, 245)");
    });
  });
});