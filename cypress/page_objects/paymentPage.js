class PaymentPage {
    cancel(){
      cy.clickButton('cancel');
    }

    finish() {
      cy.clickButton('finish');
    }

    backToProducts() {
      cy.clickButton('back-to-products');
    }

    assertionDetail(assertion) {
      cy.assertionDetail(assertion);
    }
}

export default PaymentPage;