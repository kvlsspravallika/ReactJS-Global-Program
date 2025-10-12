// Cypress E2E test for SearchBar

describe('SearchBar E2E', () => {
  it('should type in the input and trigger search', () => {
    cy.visit('http://localhost:5175');
    cy.get('input[placeholder="What do you want to watch?"]').type('Inception');
    cy.get('input[placeholder="What do you want to watch?"]').should('have.value', 'Inception');
    cy.get('button').contains('SEARCH').click();
    // If your app displays search results, assert here, e.g.:
    // cy.get('.search-results').should('contain', 'Inception');
  });

  it('should trigger search on Enter key', () => {
    cy.visit('http://localhost:5175');
    cy.get('input[placeholder="What do you want to watch?"]').type('Matrix');
    cy.get('input[placeholder="What do you want to watch?"]').should('have.value', 'Matrix');
    cy.get('input[placeholder="What do you want to watch?"]').type('{enter}');
    // If your app displays search results, assert here, e.g.:
    // cy.get('.search-results').should('contain', 'Matrix');
  });
});
