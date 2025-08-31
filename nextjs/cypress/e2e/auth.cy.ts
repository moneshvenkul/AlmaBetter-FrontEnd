describe('Authentication Flow', () => {
  it('should allow a user to log in and out', () => {
    // 1. Start on the homepage (user is logged out)
    cy.visit('/');
    cy.contains('You are not logged in.');

    // 2. Programmatically log in by calling the API
    // Cypress automatically handles the session cookie for us
    cy.request('POST', '/api/login');

    // 3. Visit the page again to see the new state
    cy.visit('/');
    cy.contains('Welcome, testuser!');

    // 4. Programmatically log out
    cy.request('POST', '/api/logout');

    // 5. Visit the page one last time to confirm logout
    cy.visit('/');
    cy.contains('You are not logged in.');
  });
});