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
  it('1. User berhasil checkout', () => {
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
  it('2. User tidak bisa checkout jika tidak mengisi First Name', () => {
    checkout = dataCheckout.fist_name_null;
    product = dataCheckout.product;
    payment = dataCheckout.payment_information;

    cy.userLogin(user.username, user.password, user.assertion);
    Cypress.Product.addFromList(product.id);
    Cypress.Cart.detailCart();
    Cypress.Cart.checkout();
    Cypress.Checkout.inputLastName(payment.last_name);
    Cypress.Checkout.inputPostalCode(payment.postal_code);
    Cypress.Checkout.continue();
    Cypress.Checkout.assertionDetail(checkout.assertion);
  })
  it('3. User tidak bisa checkout jika tidak mengisi Last Name', () => {
    checkout = dataCheckout.last_name_null;
    product = dataCheckout.product;
    payment = dataCheckout.payment_information;

    cy.userLogin(user.username, user.password, user.assertion);
    Cypress.Product.addFromList(product.id);
    Cypress.Cart.detailCart();
    Cypress.Cart.checkout();
    Cypress.Checkout.inputFirstName(payment.first_name);
    Cypress.Checkout.inputPostalCode(payment.postal_code);
    Cypress.Checkout.continue();
    Cypress.Checkout.assertionDetail(checkout.assertion);
  })
  it('4. User tidak bisa checkout jika tidak mengisi Postal Code', () => {
    checkout = dataCheckout.postal_code_null;
    product = dataCheckout.product;
    payment = dataCheckout.payment_information;

    cy.userLogin(user.username, user.password, user.assertion);
    Cypress.Product.addFromList(product.id);
    Cypress.Cart.detailCart();
    Cypress.Cart.checkout();
    Cypress.Checkout.inputFirstName(payment.first_name);
    Cypress.Checkout.inputLastName(payment.last_name);
    Cypress.Checkout.continue();
    Cypress.Checkout.assertionDetail(checkout.assertion);
  })
  it('5. User batal checkout', () => {
    checkout = dataCheckout.cancel_checkout;
    product = dataCheckout.product;
    payment = dataCheckout.payment_information;

    cy.userLogin(user.username, user.password, user.assertion);
    Cypress.Product.addFromList(product.id);
    Cypress.Cart.detailCart();
    Cypress.Cart.checkout();
    Cypress.Checkout.inputFirstName(payment.first_name);
    Cypress.Checkout.inputLastName(payment.last_name);
    Cypress.Checkout.inputPostalCode(payment.postal_code);
    Cypress.Checkout.cancel();
    Cypress.Checkout.assertionDetail(checkout.assertion);
  })
})

