let dataCart
let cart
let user

describe('Detail Product', () => {
  beforeEach('Get Data Test', () => {
    cy.fixture('dataUser').then(data => {
      user = data.standard_user
    })
    cy.fixture('dataCart').then(data => {
        dataCart = data
    })
  })
  it('1. User mengakses detail cart', () => {
    cart = dataCart.go_to_cart;
    cy.userLogin(user.username, user.password, user.assertion);
    Cypress.Cart.detailCart();
    Cypress.Cart.assertionDetail(cart.assertion);
  })
  it('2. User mengakses detail product dari halaman detail cart', () => {
    cart = dataCart.detail_product_from_cart;
    cy.userLogin(user.username, user.password, user.assertion);
    Cypress.Product.clickProductName(cart.item);
    Cypress.Product.addFromDetail();
    Cypress.Cart.detailCart();
    Cypress.Product.clickProductName(cart.item);
    Cypress.Cart.assertionDetail(cart.assertion);
  })
  it('3. User Remove product dari cart di halaman detail cart', () => {
    cart = dataCart.remove_product_from_cart;
    cy.userLogin(user.username, user.password, user.assertion);
    Cypress.Product.clickImage(cart.item);
    Cypress.Product.addFromDetail();
    Cypress.Cart.detailCart();
    Cypress.Cart.remove(cart.item);
    Cypress.Cart.continueShopping();
    Cypress.Product.clickImage(cart.item);
    Cypress.Cart.assertionDetail(cart.assertion);
  })
  
})

