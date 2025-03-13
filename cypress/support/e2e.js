import './commands'
import IndexPage from "../page_objects/indexPage";
import LoginPage from "../page_objects/loginPage";
import ProductsPage from "../page_objects/productsPage";
import CartPage from "../page_objects/cartPage";
import CheckoutPage from "../page_objects/checkoutPage";
import PaymentPage from "../page_objects/paymentPage";

const Index = new IndexPage();

Cypress.Login = new LoginPage();
Cypress.Product = new ProductsPage();
Cypress.Cart = new CartPage();
Cypress.Checkout = new CheckoutPage();
Cypress.Payment = new PaymentPage();

const executedTests = new Set();

beforeEach("Access to Page", () => {
    Index.visitPage();
    executedTests.add(Cypress.currentTest.title);
});