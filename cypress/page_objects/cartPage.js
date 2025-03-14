class CartPage {
    detailCart() {
      cy.clickButton('shopping-cart-link');
    }
    clickProductName(name) {
      cy.clickLink('inventory-item-name',name);
    }
    remove(id){
      cy.clickButton(`remove-${id}`);
    }
    continueShopping() {
      cy.clickButton('continue-shopping');
    }
    checkout() {
      cy.clickButton('checkout');
    }
    assertionDetail(assertion) {
      cy.assertionDetail(assertion);
    }
}

export default CartPage;