describe('todo app', () => {
  it('can add task to list', () => {
    cy.visit('http://localhost:3000')
    cy.get('input').focus().type('Learn e2e testing');
    cy.get('button').contains("OK").click();
    cy.get('li').contains('Learn e2e testing').should('exist');
  })
})