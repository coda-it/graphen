describe("Colors", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("should make a screenshot", () => {
    cy.get(".tst-colors").screenshot();
  });

  describe("color brand primary", () => {
    it("should have proper styles", () => {
      cy.get(".tst-colors-primary")
        .should("have.class", "gc-sample")
        .should("have.class", "gc-sample gc-sample--brand-primary");
    });

    it("should have proper properties", () => {
      cy.get(".tst-colors-primary")
        .should("have.css", "background-color")
        .and("equal", "rgb(51, 122, 183)");
    });
  });

  describe("color brand text", () => {
    it("should have proper styles", () => {
      cy.get(".tst-colors-text")
        .should("have.class", "gc-sample")
        .should("have.class", "gc-sample gc-sample--brand-text");
    });

    it("should have proper properties", () => {
      cy.get(".tst-colors-text")
        .should("have.css", "background-color")
        .and("equal", "rgb(88, 88, 88)");
    });
  });

  describe("color brand link", () => {
    it("should have proper styles", () => {
      cy.get(".tst-colors-link")
        .should("have.class", "gc-sample")
        .should("have.class", "gc-sample gc-sample--brand-link");
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
        .should("have.class", "gc-sample")
        .should("have.class", "gc-sample gc-sample--brand-component");
    });

    it("should have proper properties", () => {
      cy.get(".tst-colors-component")
        .should("have.css", "background-color")
        .and("equal", "rgb(245, 245, 245)");
    });
  });
});
