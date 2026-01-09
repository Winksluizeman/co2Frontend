describe('Create Account UI Test (Mocked Backend)', () => {

    it('should allow the user to create an account', () => {

        // 🔥 Mock de backend zodat Cypress geen echte API nodig heeft
        cy.intercept('POST', 'http://localhost:8080/register', {
            statusCode: 200,
            body: { message: "ok" }
        }).as('mockRegister');

        cy.visit('/register');

        cy.get('input[name="username"]').type('Jeroen');
        cy.get('input[name="age"]').type('21');
        cy.get('input[name="email"]').type('Jeroen@Gmail.com');
        cy.get('input[name="password"]').type('Password123');

        cy.get('button[type="submit"]').click();

        // Wacht op de mock-response
        cy.wait('@mockRegister');

        // Check of de success-tekst verschijnt
        cy.contains('Account successfully created').should('be.visible');
    });

});
