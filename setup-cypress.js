import { writeFileSync, mkdirSync, existsSync } from "fs";

// 1. Cypress config aanmaken
const config = `
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    video: false,
    setupNodeEvents(on, config) {}
  },
});
`;

writeFileSync("cypress.config.js", config);
console.log("✔ Cypress config aangemaakt");

// 2. Mappen aanmaken
if (!existsSync("cypress")) mkdirSync("cypress");
if (!existsSync("cypress/e2e")) mkdirSync("cypress/e2e");
console.log("✔ Cypress mappenstructuur aangemaakt");

// 3. UI-testbestand aanmaken
const test = `
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
`;

writeFileSync("cypress/e2e/create_accountUiTest.cy.js", test);
console.log("✔ UI-testbestand aangemaakt");

console.log("\n🎉 Cypress is volledig geautomatiseerd ingesteld!");
console.log("Start je frontend, backend en run daarna: npx cypress open");
