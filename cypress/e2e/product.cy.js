let dataProduct
let product
let testData
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
    testData = dataProduct.pict_list_product;
    product = dataProduct.product;

    cy.userLogin(user.username, user.password, user.assertion);
    Cypress.Product.clickImage(product.id);
    Cypress.Product.assertionDetail(testData.assertion);
  })
  it('2. User mengakses detail product dengan klik nama product di list product', () => {
    testData = dataProduct.name_list_product;
    product = dataProduct.product;

    cy.userLogin(user.username, user.password, user.assertion);
    Cypress.Product.clickProductName(product.name);
    Cypress.Product.assertionDetail(testData.assertion);
  })
  it('3. User kembali ke halaman list dari detail product', () => {
    testData = dataProduct.back_to_list;
    product = dataProduct.product;

    cy.userLogin(user.username, user.password, user.assertion);
    Cypress.Product.clickProductName(product.name);
    Cypress.Product.backToListProduct();
    Cypress.Product.assertionDetail(testData.assertion);
  })
  it('4. User Add product ke cart dari halaman list product', () => {
    testData = dataProduct.add_from_list;
    product = dataProduct.product;

    cy.userLogin(user.username, user.password, user.assertion);
    Cypress.Product.addFromList(product.id);
    Cypress.Product.clickImage(product.id);
    Cypress.Product.assertionDetail(testData.assertion);
  })
  it('5. User Add product ke cart dari halaman detail product', () => {
    testData = dataProduct.add_from_detail;
    product = dataProduct.product;

    cy.userLogin(user.username, user.password, user.assertion);
    Cypress.Product.clickProductName(product.name);
    Cypress.Product.addFromDetail();
    Cypress.Product.assertionDetail(testData.assertion);
  })
  it('6. User Remove product dari cart di halaman list product', () => {
    testData = dataProduct.remove_from_list;
    product = dataProduct.product;

    cy.userLogin(user.username, user.password, user.assertion);
    Cypress.Product.addFromList(product.id);
    Cypress.Product.removeFromList(product.id);
    Cypress.Product.clickImage(product.id);
    Cypress.Product.assertionDetail(testData.assertion);
  })
  it('7. User Remove product dari cart di halaman detail product', () => {
    testData = dataProduct.remove_from_detail;
    product = dataProduct.product;

    cy.userLogin(user.username, user.password, user.assertion);
    Cypress.Product.clickProductName(product.name);
    Cypress.Product.addFromDetail();
    Cypress.Product.removeFromDetail();
    Cypress.Product.assertionDetail(testData.assertion);
  })
})

   