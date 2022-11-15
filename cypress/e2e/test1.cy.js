it("google search", () => {
  cy.visit("http://google.com");

  cy.get(".gLFyf").type("pigs{enter}");
  //cy.contains("Google 검색").click();

  cy.wait(2000);
  cy.contains("이미지").click();
});
