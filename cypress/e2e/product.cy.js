let dataProduct
let product
let user

describe('Detail Product', () => {
  beforeEach('Get Data Test', () => {
    cy.fixture('dataUser').then(data => {
      user = data.standard_user
    })
    cy.fixture('dataProduct').then(data => {
      dataProduct = data
    })
  })
  it('1. User mengakses detail product dengan klik gambar di list product', () => {
    product = dataProduct.pict_list_product;
    cy.userLogin(user.username, user.password, user.assertion);
    Cypress.Product.clickImage(product.item);
    Cypress.Product.assertionDetail(product.assertion);
  })
  it('2. User mengakses detail product dengan klik nama product di list product', () => {
    product = dataProduct.name_list_product;
    cy.userLogin(user.username, user.password, user.assertion);
    Cypress.Product.clickProductName(product.item);
    Cypress.Product.assertionDetail(product.assertion);
  })
  it('3. User kembali ke halaman list dari detail product', () => {
    product = dataProduct.back_to_list;
    cy.userLogin(user.username, user.password, user.assertion);
    Cypress.Product.clickProductName(product.item);
    Cypress.Product.backToListProduct();
    Cypress.Product.assertionDetail(product.assertion);
  })
//   it('4. User mengakses detail product dengan klik gambar di halaman detail cart', () => {
//     cy.userLogin(user.username, user.password, user.assertion);
//   })
//   it('5. User mengakses detail product dengan klik nama product di halaman detail cart', () => {
//     cy.userLogin(user.username, user.password, user.assertion);
//   })
//   it('6. User mengakses detail product dengan klik nama product di halaman checkout overview', () => {
//     cy.userLogin(user.username, user.password, user.assertion);
//   })
})

   