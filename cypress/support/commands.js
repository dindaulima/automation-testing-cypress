Cypress.Commands.add("userLogin", (username, password, assertion) => {
    Cypress.Login.inputUsername(username);
    Cypress.Login.inputPassword(password);
    Cypress.Login.clickLogin();
    Cypress.Login.assertionLogin(assertion);
});

Cypress.Commands.add("clickButton", (selector) => {
    cy.get(`[data-test="${selector}"]`)
        .should("be.visible")
        .click();
});

Cypress.Commands.add("clickLink", (selector, link) => {
    cy.get(`[data-test="${selector}"]`)
        .should("be.visible")
        .contains(link)
        .click();
});

Cypress.Commands.add("assertionDetail",(assertion)=>{
    cy.contains(assertion, { timeout: 5000 }).should("be.visible");
})