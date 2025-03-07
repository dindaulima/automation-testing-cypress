import './commands'
import IndexPage from "../page_objects/indexPage";
import LoginPage from "../page_objects/loginPage";

const Index = new IndexPage();

Cypress.Login = new LoginPage();

const executedTests = new Set();

beforeEach("Access to Page", () => {
    Index.visitPage();
    executedTests.add(Cypress.currentTest.title);
});