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
    Cypress.Product.clickImage(product.selector);
    Cypress.Product.assertionDetail(product.assertion);
    // Cypress.Product.backToListProduct();

  })
//   it('2. User mengakses detail product dengan klik nama product di list product', () => {
//     cy.userLogin(user.username, user.password, user.assertion);
//   })
//   it('3. User kembali ke halaman list dari detail product', () => {
//     cy.userLogin(user.username, user.password, user.assertion);
//   })
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

   