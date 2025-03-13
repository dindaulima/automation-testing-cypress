let dataPayment
let checkout
let product
let payment
let user

describe('Detail Product', () => {
  beforeEach('Get Data Test', () => {
    cy.fixture('dataUser').then(data => {
      user = data.standard_user
    })
    cy.fixture('dataPayment').then(data => {
        dataPayment = data
    })
  })
  it('1. User menyelesaikan pembayaran', () => {
    checkout = dataPayment.finish_payment;
    product = dataPayment.product;
    payment = dataPayment.payment_information;

    cy.userLogin(user.username, user.password, user.assertion);
    Cypress.Product.addFromList(product.id);
    Cypress.Cart.detailCart();
    Cypress.Cart.checkout();
    Cypress.Checkout.inputFirstName(payment.first_name);
    Cypress.Checkout.inputLastName(payment.last_name);
    Cypress.Checkout.inputPostalCode(payment.postal_code);
    Cypress.Checkout.continue();
    Cypress.Payment.finish();
    Cypress.Payment.assertionDetail(checkout.assertion);
  })
  it('2. User batal checkout di halaman pembayaran', () => {
    checkout = dataPayment.cancel_payment;
    product = dataPayment.product;
    payment = dataPayment.payment_information;

    cy.userLogin(user.username, user.password, user.assertion);
    Cypress.Product.addFromList(product.id);
    Cypress.Cart.detailCart();
    Cypress.Cart.checkout();
    Cypress.Checkout.inputFirstName(payment.first_name);
    Cypress.Checkout.inputLastName(payment.last_name);
    Cypress.Checkout.inputPostalCode(payment.postal_code);
    Cypress.Checkout.continue();
    Cypress.Payment.cancel();
    Cypress.Payment.assertionDetail(checkout.assertion);
  })
  it('3. User kembali ke beranda setelah menyelesaikan pesanan', () => {
    checkout = dataPayment.back_to_products;
    product = dataPayment.product;
    payment = dataPayment.payment_information;

    cy.userLogin(user.username, user.password, user.assertion);
    Cypress.Product.addFromList(product.id);
    Cypress.Cart.detailCart();
    Cypress.Cart.checkout();
    Cypress.Checkout.inputFirstName(payment.first_name);
    Cypress.Checkout.inputLastName(payment.last_name);
    Cypress.Checkout.inputPostalCode(payment.postal_code);
    Cypress.Checkout.continue();
    Cypress.Payment.finish();
    Cypress.Payment.backToProducts();
    Cypress.Payment.assertionDetail(checkout.assertion);
  })
})

