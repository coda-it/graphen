describe("navigation submenu", () => {
  it("should anchor submenu to its parent option in a scrolled navigation", () => {
    cy.visit("/");

    cy.get("#navigation").scrollIntoView();

    cy.get("#navigation .gc-navigation")
      .eq(1)
      .parent()
      .scrollTo("right")
      .within(() => {
        cy.contains("button.gc-navigation__link", "Platform").click();
      });

    cy.window().then((win) => {
      cy.contains("button.gc-navigation__link", "Platform").then(($trigger) => {
        const triggerRect = $trigger[0].getBoundingClientRect();

        cy.get(".gc-submenu--opened").then(($submenu) => {
          const submenuRect = $submenu[0].getBoundingClientRect();

          expect(submenuRect.top).to.be.closeTo(triggerRect.bottom, 1);
          expect(submenuRect.left).to.be.at.most(triggerRect.left + 1);
          expect(submenuRect.left).to.be.at.least(0);
          expect(submenuRect.right).to.be.at.most(win.innerWidth);
        });
      });
    });
  });
});
