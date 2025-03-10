class CartPage {
    addFromList(productItem) {
        cy.get(`[data-test="add-to-cart-${productItem}"]`)
          .should("be.visible")
          .click();
    }
    addFromDetail() {
        cy.get(`[data-test="add-to-cart"]`)
          .should("be.visible")
          .click();
    }
    assertionDetail(assertion) {
        cy.contains(assertion, { timeout: 5000 }).should("be.visible");
    }
}

export default CartPage;