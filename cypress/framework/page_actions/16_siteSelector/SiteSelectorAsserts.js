class SiteSelectorAsserts {
    checkCorrectGermanSiteWasOpened(){
      cy.url().should("include", "/de_DE");
    };
    checkCorrectBelgiumSiteWasOpened(){
        cy.url().should("include", "/nl_BE");
    };
    checkCorrectEuropeSiteWasOpened(){
        cy.url().should("include", "/fr_EU");
    };
}
export default SiteSelectorAsserts