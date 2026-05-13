describe('todo app', () => {
  it('can add task to list', () => {
    cy.task('resetDatabase');
    cy.visit('http://localhost:3000')
    cy.get('input').focus().type('Learn e2e testing');
    cy.get('[data-testid=taskForm__submitButton]').click();
    cy.get('li').contains('Learn e2e testing').should('exist');

    cy.visit('http://localhost:3000');
    cy.get('li').contains('Learn e2e testing').should('exist');
  })
})