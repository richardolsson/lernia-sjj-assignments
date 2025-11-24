describe('filter page', () => {
  it('filters online challenges', () => {
    cy.visit('http://localhost:5500/classes/a3/a312/examples/test-manual/index.html');
    cy.get('button').contains('online').click();
    cy.get('ul li').should('have.length', 15);
  })

  it('filters onsite challenges', () => {
    cy.visit('http://localhost:5500/classes/a3/a312/examples/test-manual/index.html');
    cy.get('button').contains('onsite').click();
    cy.get('ul li').should('have.length', 15);
  });

  it('filters online challenges after onsite', () => {
    cy.visit('http://localhost:5500/classes/a3/a312/examples/test-manual/index.html');
    cy.get('button').contains('onsite').click();
    cy.get('button').contains('online').click();
    cy.get('ul li').should('have.length', 15);
  });
})