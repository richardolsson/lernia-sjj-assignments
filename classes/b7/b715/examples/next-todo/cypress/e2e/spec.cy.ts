describe('template spec', () => {
  it('allows user to create a new task which remains after refresh', () => {
    cy.visit('http://localhost:3000');

    cy.get('input').type('Use Cypress');
    //cy.get('button.todoForm__submitButton').click();
    //cy.get('button').contains('OK').click();
    cy.get('[data-testid="submit-button"]').click();

    cy.get('[data-testid="task-list"] li').contains('Use Cypress').should('exist');

    cy.visit('http://localhost:3000');
    cy.get('[data-testid="task-list"] li').contains('Use Cypress').should('exist');
  });
});
