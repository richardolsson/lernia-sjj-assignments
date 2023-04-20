describe('ToDo app', () => {
  beforeEach(() => {
    // Delete all tasks before running tests
    cy.request('DELETE', '/api/tasks');
  });

  it('allows user to create a task which remains after reload', () => {
    cy.visit('/');
    cy.get('input').type('Use Cypress');
    cy.get('[data-testid="submit-button"]').click();
    cy.get('[data-testid="todo-list"] li').as('listItem');
    
    cy.get('@listItem').should('contain', 'Use Cypress');
    cy.get('@listItem').should('have.length', 1);

    // Refresh and make sure that tasks remain
    cy.visit('/');
    cy.get('@listItem').should('contain', 'Use Cypress');
  });
})