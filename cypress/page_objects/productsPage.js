class ProductsPage {
    clickImage(item) {
      cy.get(`[data-test="inventory-item-${item}-img"]`)
        .should("be.visible")
        .click();
    }
    clickProductName(item) {
      cy.get(`[data-test="inventory-item-name"]`)
        .should("be.visible")
        .contains(item)
        .click();
    }
    backToListProduct(){
      cy.get(`[data-test="back-to-products"]`)
      .should("be.visible")
      .click();
    }
    addFromList(item) {
      cy.get(`[data-test="add-to-cart-${item}"]`)
        .should("be.visible")
        .click();
    }
    addFromDetail() {
        cy.get(`[data-test="add-to-cart"]`)
          .should("be.visible")
          .click();
    }
    removeFromList(item) {
      cy.get(`[data-test="remove-${item}"]`)
        .should("be.visible")
        .click();
    }
    removeFromDetail() {
      cy.get(`[data-test="remove"]`)
        .should("be.visible")
        .click();
    }
    assertionDetail(assertion) {
      cy.contains(assertion, { timeout: 5000 }).should("be.visible");
    }
  }
  
  export default ProductsPage;