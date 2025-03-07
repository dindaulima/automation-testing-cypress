let dataUser
let user

describe('Login', () => {
  beforeEach('Get Data User', () => {
    cy.fixture('dataUser').then(data => {
      dataUser = data
    })
  })
  it('User Login As Standard User', () => {
    user = dataUser.standard_user;
    cy.userLogin(user.username, user.password, user.assertion);
  })
  it('User Locked Out', () => {
    user = dataUser.locked_out_user;
    cy.userLogin(user.username, user.password, user.assertion);
  })
})