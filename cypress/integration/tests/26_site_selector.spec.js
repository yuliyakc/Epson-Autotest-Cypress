import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe("Check that user can go from one website to another one", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    beforeEach(function () {
        cy.clearCookies();
        cy.viewport(1200, 800);
        perform.signInActions.openWebsiteAndLogin();
        perform.siteSelectorActions.clickTopNavigationBtnToOpenCountriesList();
    });
    it('should select German website, trigger redirect and check correct final page', function () {
        perform.siteSelectorActions.selectGermanyWebsite();
        perform.siteSelectorActions.clickConfirmButton();
        check.siteSelectorAsserts.checkCorrectGermanSiteWasOpened();
    });
    it('should select Belgium website, trigger redirect and check correct final page', function () {
        perform.siteSelectorActions.selectBelgiumWebsite();
        perform.siteSelectorActions.clickConfirmButton();
        check.siteSelectorAsserts.checkCorrectBelgiumSiteWasOpened();
    });
    it('should select Belgium website, trigger redirect and check correct final page', function () {
        perform.siteSelectorActions.selectEuropeWebsite();
        perform.siteSelectorActions.selectFrenchLanguage();
        perform.siteSelectorActions.clickConfirmButton();
        check.siteSelectorAsserts.checkCorrectEuropeSiteWasOpened();
    });
});