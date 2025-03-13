class CheckoutPage {
    detailCart() {
      cy.clickButton('shopping-cart-link');
    }

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

    assertionDetail(assertion) {
      cy.assertionDetail(assertion);
    }
}

export default CheckoutPage;