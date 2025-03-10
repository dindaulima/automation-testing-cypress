import './commands'
import IndexPage from "../page_objects/indexPage";
import LoginPage from "../page_objects/loginPage";
import ProductsPage from "../page_objects/productsPage";
import CartPage from "../page_objects/cartPage";

const Index = new IndexPage();

Cypress.Login = new LoginPage();
Cypress.Product = new ProductsPage();
Cypress.Cart = new CartPage();

const executedTests = new Set();

beforeEach("Access to Page", () => {
    Index.visitPage();
    executedTests.add(Cypress.currentTest.title);
});