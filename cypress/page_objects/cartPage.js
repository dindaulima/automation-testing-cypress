class CartPage {
    detailCart() {
        cy.get(`[data-test="shopping-cart-link"]`)
          .should("be.visible")
          .click();
    }
    clickProductName(item) {
        cy.get(`[data-test="inventory-item-name"]`)
          .should("be.visible")
          .contains(item)
          .click();
    }
    remove(item){
        cy.get(`[data-test="remove-${item}"]`)
        .should("be.visible")
        .click(); 
    }
    continueShopping() {
        cy.get(`[data-test="continue-shopping"]`)
          .should("be.visible")
          .click();
    }
    assertionDetail(assertion) {
        cy.contains(assertion, { timeout: 5000 }).should("be.visible");
    }
}

export default CartPage;