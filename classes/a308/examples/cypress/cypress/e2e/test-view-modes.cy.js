describe('Challenge list', () => {
  it('shows 30 items in "all" view mode', () => {
    cy.visit('http://127.0.0.1:5500/classes/a308/examples/manual/index.html')
    cy.contains('all');
    cy.get('#challenges div').should('have.length', 30);
  });

  it('shows 30 items in "all" view mode', () => {
    cy.visit('http://127.0.0.1:5500/classes/a308/examples/manual/index.html')
    cy.get('button').click();
    cy.contains('top3');
    cy.get('#challenges div').should('have.length', 3);
  });

});