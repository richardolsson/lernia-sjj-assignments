describe('todo app', () => {
  beforeEach(() => {
    cy.task('resetDatabase');
  });

  it('can add task to list', () => {
    cy.visit('http://localhost:3000')
    cy.get('input').focus().type('Learn e2e testing');
    cy.get('[data-testid=taskForm__submitButton]').click();
    cy.get('li').contains('Learn e2e testing').should('exist');

    cy.visit('http://localhost:3000');
    cy.get('li').contains('Learn e2e testing').should('exist');
  })

  it('can add task to list with enter', () => {
    cy.visit('http://localhost:3000')
    cy.get('input').focus().type('Learn e2e testing').press('Enter');
    cy.get('li').contains('Learn e2e testing').should('exist');
  });
})