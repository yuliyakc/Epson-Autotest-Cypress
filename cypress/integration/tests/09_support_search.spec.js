import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe("Check Support search page works correctly", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    beforeEach(function () {
        cy.clearCookies();
        cy.viewport(1200, 800);
        perform.signInActions.openWebsiteAndLogin();
        perform.supportActions.openSupportTab();
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
    it('should check that Product Info, Standard Warranty and Extended Warranty are displayed', function () {
        perform.supportActions.performSearchBySerialNumberForWarrantyCheck();
        check.supportAsserts.productInfoBlockShouldContainData();
        check.supportAsserts.standardWarrantyBlockShouldContainData();
        check.supportAsserts.extendedWarrantyBlockShouldContainData();
    });
    it('should check Subscription for a Printer in quantity 1', function () {
        perform.supportActions.performSearchBySerialNumberFor1SubscriptionCheck();
        check.supportAsserts.checkSubscriptionBlockIsVisible();
        check.supportAsserts.productInfoShouldContainOneSubscription();
    });
    it('should check Subscription for a Printer in quantity 3', function () {
        perform.supportActions.performSearchBySerialNumberFor3SubscriptionsCheck();
        check.supportAsserts.checkSubscriptionBlockIsVisible();
        check.supportAsserts.productInfoShouldContainThreeSubscriptions();
    });
    it('should check main information of a printer', function () {
        perform.supportActions.performSearchBySerialNumberForInfoCheck();
        check.supportAsserts.checkProductInfoForAPrinter();
    });
    it('should check error message if there are no warranty for a printer', function () {
        perform.supportActions.performSearchBySerialNumberForCheckingOfAnError();
        check.supportAsserts.checkErrorMessageForProduct();
    });

});
