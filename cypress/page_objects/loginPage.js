class LoginPage {
    inputUsername(username) {
      cy.get('[data-test="username"]')
        .should("be.visible")
        .type(username);
    }
    inputPassword(password) {
      cy.get('[data-test="password"]')
        .should("be.visible")
        .type(password);
    }
    clickLogin() {
      cy.get('[data-test="login-button"]')
        .should("be.visible")
        .contains("Login")
        .click();
    }
    assertionLogin(assertion) {
      cy.contains(assertion, { timeout: 5000 }).should("be.visible");
    }
  }
  
  export default LoginPage;