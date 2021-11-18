const url = "http://localhost:5500/examples/211117/autotesting/";

describe("Challenge grid page", () => {
  it("Loads list", () => {
    cy.visit(url);
    cy.get("button").click();
    cy.get("li").should("exist");
  });

  it("Filters list", () => {
    cy.visit(url);
    cy.viewport(400, 800);
    cy.get("input").invoke("val", 0).trigger("change");
    cy.get("button").click();
    cy.get("ul").find("li").its("length").should("eq", 30);

    cy.get("input").invoke("val", 2.5).trigger("change");
    cy.get("ul").find("li").its("length").should("be.lt", 30);
  });
});
