class ProductsPage {
    clickImage(productItem) {
      cy.get(`[data-test="inventory-item-${productItem}-img"]`)
        .should("be.visible")
        .click();
    }
    clickProductName(productName) {
      cy.get(`[data-test="inventory-item-name"]`)
        .should("be.visible")
        .contains(productName)
        .click();
    }
    backToListProduct(){
      cy.get(`[data-test="back-to-products"]`)
      .should("be.visible")
      .click();
    }
    assertionDetail(assertion) {
      cy.contains(assertion, { timeout: 5000 }).should("be.visible");
    }
  }
  
  export default ProductsPage;