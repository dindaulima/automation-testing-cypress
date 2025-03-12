class ProductsPage {
    clickImage(id) {
      cy.clickButton(`inventory-item-${id}-img`);
    }
    clickProductName(name) {
      cy.clickLink('inventory-item-name',name);
    }
    backToListProduct(){
      cy.clickButton('back-to-products');
    }
    addFromList(id) {
      cy.clickButton(`add-to-cart-${id}`);
    }
    addFromDetail() {
      cy.clickButton('add-to-cart');
    }
    removeFromList(id) {
      cy.clickButton(`remove-${id}`);
    }
    removeFromDetail() {
      cy.clickButton('remove');

    }
    assertionDetail(assertion) {
      cy.assertionDetail(assertion);
    }
  }
  
  export default ProductsPage;