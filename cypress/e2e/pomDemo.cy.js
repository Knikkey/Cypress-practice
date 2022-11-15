import { LoginPage } from "./pages/login_page";

const loginPage = new LoginPage();

describe("All login tests", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
  });

  it("POM Demo", () => {
    loginPage.enterUsername("admin");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();
  });

  it("2nd Login", () => {
    loginPage.enterUsername("admin123");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();
  });

  it.skip("skip Login", () => {
    loginPage.enterUsername("admin123");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();
  });

  it.only("only this Login", () => {
    loginPage.enterUsername("admin123");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();
  });
});
