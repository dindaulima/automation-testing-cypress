let dataCart
let cart
let product
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
    product = dataCart.product;
    
    cy.userLogin(user.username, user.password, user.assertion);
    Cypress.Product.addFromList(product.id);
    Cypress.Cart.detailCart();
    Cypress.Product.clickProductName(product.name);
    Cypress.Cart.assertionDetail(cart.assertion);
  })
  it('3. User Remove product dari cart di halaman detail cart', () => {
    cart = dataCart.remove_product_from_cart;
    product = dataCart.product;

    cy.userLogin(user.username, user.password, user.assertion);
    Cypress.Product.addFromList(product.id);
    Cypress.Cart.detailCart();
    Cypress.Cart.remove(product.id);
    Cypress.Cart.continueShopping();
    Cypress.Product.clickProductName(product.name);
    Cypress.Cart.assertionDetail(cart.assertion);
  })
  it('4. User kembali ke halaman list product dari detail cart', () => {
    cart = dataCart.back_to_list_product;

    cy.userLogin(user.username, user.password, user.assertion);
    Cypress.Cart.detailCart();
    Cypress.Cart.continueShopping();
    Cypress.Cart.assertionDetail(cart.assertion);
  })
})

