Cypress.Commands.add("userLogin", (username, password, assertion) => {
    Cypress.Login.inputUsername(username);
    Cypress.Login.inputPassword(password);
    Cypress.Login.clickLogin();
    Cypress.Login.assertionLogin(assertion);
});