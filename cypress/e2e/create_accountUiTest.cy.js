
describe('Create Account UI Test', () => {

  it('should allow the user to create an account', () => {

    cy.visit('/register');

    cy.get('input[name="username"]').type('Jeroen');
    cy.get('input[name="age"]').type('21');
    cy.get('input[name="email"]').type('Jeroen@Gmail.com');
    cy.get('input[name="password"]').type('Password123');

    cy.get('button[type="submit"]').click();

    cy.contains('Account successfully created').should('be.visible');
  });

});
