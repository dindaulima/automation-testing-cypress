class ProductsPage {
    clickImage(selector) {
      cy.get(`[data-test="${selector}"]`)
        .should("be.visible")
        .click();
    }
    clickProductName(selector, productName) {
      cy.get(`[data-test="${selector}"]`)
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