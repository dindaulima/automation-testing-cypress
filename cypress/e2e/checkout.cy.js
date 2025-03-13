let dataCheckout
let checkout
let product
let payment
let user

describe('Detail Product', () => {
  beforeEach('Get Data Test', () => {
    cy.fixture('dataUser').then(data => {
      user = data.standard_user
    })
    cy.fixture('dataCheckout').then(data => {
        dataCheckout = data
    })
  })
  it('1. User menambahkan data payment', () => {
    checkout = dataCheckout.continue_payment;
    product = dataCheckout.product;
    payment = dataCheckout.payment_information;

    cy.userLogin(user.username, user.password, user.assertion);
    Cypress.Product.addFromList(product.id);
    Cypress.Cart.detailCart();
    Cypress.Cart.checkout();
    Cypress.Checkout.inputFirstName(payment.first_name);
    Cypress.Checkout.inputLastName(payment.last_name);
    Cypress.Checkout.inputPostalCode(payment.postal_code);
    Cypress.Checkout.continue();
    Cypress.Checkout.assertionDetail(checkout.assertion);
  })
})

