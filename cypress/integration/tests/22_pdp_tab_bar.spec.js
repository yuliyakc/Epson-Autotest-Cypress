import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe("Testing Tab Bar for each product", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    beforeEach(function () {
        cy.clearCookies();
        cy.viewport(1200, 800);
        perform.signInActions.openWebsiteAndLogin();
    });
    it('should open website on a specific PDP to check tabs for Printers', function () {
        perform.productLinksForPDP.openEcoTankPrinterPDPPage();
        perform.pdpActions.scrollDownToTabBar();
        perform.pdpActions.clickOverviewTab();
        check.pdpAssertions.checkOverviewBlock();

        perform.pdpActions.clickTechSpecTab();
        check.pdpAssertions.checkTechSpecBlock();

        perform.pdpActions.clickAccessoriesTab();
        check.pdpAssertions.checkAccessoriesBlock();

        perform.pdpActions.clickSupportTab();
        check.pdpAssertions.checkSupportBlock();

        perform.pdpActions.clickSupportBtnAtSupportBlock();
        check.supportAsserts.checkSearchSupportPageIsOpened();
    });
    it('should open website on a specific PDP to check tabs for Options', function () {
        perform.productLinksForPDP.openSpecificOptionPDPPage();

        perform.pdpActions.clickSupportTab();
        check.pdpAssertions.checkSupportBlock();

       // perform.pdpActions.clickCompatibilityTab();
        //check.pdpAssertions.checkCompatibilityBlock();
       // perform.pdpActions.clickCompatibilityLink();
        check.pdpAssertions.checkThatSKUIsDisplayed();
    });
    it('should open website on a specific accessories PDP to check tabs', function () {
        perform.productLinksForPDP.openMediaPaperProduct();
        check.pdpAssertions.checkOverviewBlock();

        perform.pdpActions.clickSeriesModelsTab();
        check.pdpAssertions.checkSeriesModelsBlock();

        perform.pdpActions.clickCompatibilityTab();
        check.pdpAssertions.checkCompatibilityBlock();
        perform.pdpActions.clickCompatibilityLink();
        check.pdpAssertions.checkThatSKUIsDisplayed();
    });
});