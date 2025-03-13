class CheckoutPage {
    cancel(){
      cy.clickButton('cancel');
    }

    continue() {
      cy.clickButton('continue');
    }

    inputFirstName(firstName) {
      cy.inputText('firstName', firstName);
    }

    inputLastName(lastName) {
      cy.inputText('lastName', lastName);
    }

    inputPostalCode(postalCode) {
      cy.inputText('postalCode', postalCode);
    }

    finish() {
      cy.clickButton('finish');
    }

    backToProducts() {
      cy.clickButton('bactk-to-products');
    }

    assertionDetail(assertion) {
      cy.assertionDetail(assertion);
    }
}

export default CheckoutPage;