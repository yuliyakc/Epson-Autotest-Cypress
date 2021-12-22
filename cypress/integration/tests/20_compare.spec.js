import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe("Testing of Compare functionality", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    beforeEach(function () {
        cy.clearCookies();
        cy.viewport(1200, 800);
        perform.signInActions.openWebsiteAndLogin();
    });
    it('should open PLP page, add printers to Compare, hide and delete', function () {
        perform.homePageMenuActions.openLaserColourPrinters();
        perform.comparePrintersActions.addFirstPrinterToCompareBlock();
        check.comparePrintersAsserts.checkThatCompareBlockIsDisplayed();

        perform.homePageMenuActions.openInkJetBusinessPrinters();
        perform.comparePrintersActions.addFirstPrinterToCompareBlock();
        check.comparePrintersAsserts.checkThatCompareBlockIsDisplayed();

        perform.homePageMenuActions.openLabelMakerRemotePrinters();
        perform.comparePrintersActions.addFirstPrinterToCompareBlock();
        check.comparePrintersAsserts.checkThatCompareBlockIsDisplayed();

        perform.comparePrintersActions.clickHideBtnForCompareBlock();
        check.comparePrintersAsserts.checkCompareBlockIsHidden();
        perform.comparePrintersActions.clickShowBtnForCompareBlock();
        check.comparePrintersAsserts.checkCompareBlockIsVisible();

        perform.comparePrintersActions.clickCompareBtnToComparePrinters();
        check.comparePrintersAsserts.checkCorrectPageWasOpened();
        check.comparePrintersAsserts.checkThreePrintersOnThePage();

        perform.comparePrintersActions.deletePrintersOneByOneFromComparePage();
        check.comparePrintersAsserts.checkCorrectPageWasRedirected();
        });
    it('should have an ability to open product details from Compare block and verify pages', function () {
        perform.homePageMenuActions.openLabelMakerRemotePrinters();
        perform.comparePrintersActions.addFirstPrinterToCompareBlock();
        check.comparePrintersAsserts.checkThatCompareBlockIsDisplayed();

        perform.homePageMenuActions.openLaserColourPrinters();
        perform.comparePrintersActions.addFirstPrinterToCompareBlock();
        check.comparePrintersAsserts.checkThatCompareBlockIsDisplayed();

        perform.comparePrintersActions.clickFirstLinkToOpenProductInfoPage();
        check.pdpAssertions.checkThatSKUIsDisplayed();
        perform.commonActions.goBackToPreviousPage();

        perform.comparePrintersActions.clickCompareBtnToComparePrinters();
        check.comparePrintersAsserts.checkCorrectPageWasOpened();

        perform.comparePrintersActions.clickProductLinkToOpenProductInfoPage();
        check.pdpAssertions.checkThatSKUIsDisplayed();
        perform.commonActions.goBackToPreviousPage();

        perform.comparePrintersActions.clickLearnMoreBtnToOpenCorrectPage();
        check.pdpAssertions.checkTitleIsDisplayed();
        check.pdpAssertions.checkMainBlockWithInformationIsDisplayed();
        check.pdpAssertions.checkThatPriceIsVisible();
        check.pdpAssertions.checkThatInStockStatusIsVisible();
        perform.commonActions.goBackToPreviousPage();

        perform.comparePrintersActions.clickFindADealerBtnToOpenModalWindow();
        check.supportAsserts.checkWidgetIsOpened();
        perform.supportActions.clickCloseBtnToCloseWidget();

        perform.comparePrintersActions.clickSupportBtn();
        check.supportAsserts.checkSupportPanelIsDisplayed();
        perform.commonActions.goBackToPreviousPage();

        perform.comparePrintersActions.clickRequestCallbackBtn();
        check.comparePrintersAsserts.checkRequestCallbackUrlIsOpenedCorrect();
    });
});

