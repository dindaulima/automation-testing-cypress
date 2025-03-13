class LoginPage {
    inputUsername(username) {
      cy.inputText('username', username);
    }

    inputPassword(password) {
      cy.inputText('password', password);
    }

    clickLogin() {
      cy.clickButton('login-button');
    }

    assertionDetail(assertion) {
      cy.assertionDetail(assertion);
    }
  }
  
  export default LoginPage;