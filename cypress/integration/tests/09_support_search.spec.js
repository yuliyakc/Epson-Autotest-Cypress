import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe("Check Support search page works correctly", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    beforeEach(function () {
        cy.clearCookies();
        cy.viewport(1200, 800);
        perform.signInActions.openWebsiteAndLogin();
        perform.supportActions.openSupportPage();
        check.supportAsserts.checkSearchSupportPageIsOpened();
    });
    it('should open Support page and perform search by Product name', function () {
        perform.supportActions.performSearchByProductName();
        perform.supportActions.openFindPrinterFromSearchResults();

        check.supportAsserts.checkSupportPageIsOpened();
    });
    it('should open Support page and perform search by Serial Number', function () {
        perform.supportActions.performSearchBySerialNumber();
        check.supportAsserts.checkThatPrintersPageWasOpened();
    });
    it('should search and select specific printer from dropdown list', function () {
        perform.supportActions.performSearchByPartialPrintersName();
        perform.supportActions.selectSecondPrinterAndClick();
        check.supportAsserts.checkSupportPanelIsDisplayed();
        check.supportAsserts.checkOperatingSystemListIsVisible();
    });
});
