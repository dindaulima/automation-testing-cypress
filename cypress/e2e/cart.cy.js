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
  it('1. User Add product ke cart dari halaman list product', () => {
    cart = dataCart.add_from_list;
    cy.userLogin(user.username, user.password, user.assertion);
    Cypress.Cart.addFromList(cart.item);
    Cypress.Product.clickImage(cart.item);
    Cypress.Cart.assertionDetail(cart.assertion);
  })
  it('2. User Add product ke cart dari halaman detail product', () => {
    cart = dataCart.add_from_detail;
    cy.userLogin(user.username, user.password, user.assertion);
    Cypress.Product.clickProductName(cart.item);
    Cypress.Cart.addFromDetail();
    Cypress.Cart.assertionDetail(cart.assertion);
  })
  it('3. User Remove product dari cart di halaman list product', () => {
    cart = dataCart.add_from_detail;
    cy.userLogin(user.username, user.password, user.assertion);
  })
  it('4. User Remove product dari cart di halaman detail product', () => {
    cart = dataCart.add_from_detail;
    cy.userLogin(user.username, user.password, user.assertion);
  })
  it('5. User mengakses detail cart', () => {
    cart = dataCart.add_from_detail;
    cy.userLogin(user.username, user.password, user.assertion);
  })
  it('6. User Remove product dari cart di halaman detail cart', () => {
    cart = dataCart.add_from_detail;
    cy.userLogin(user.username, user.password, user.assertion);
  })
  it('7. User kembali ke halaman list product dari detail cart', () => {
    cart = dataCart.add_from_detail;
    cy.userLogin(user.username, user.password, user.assertion);
  })
  
})

