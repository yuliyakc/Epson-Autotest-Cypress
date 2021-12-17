import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe("Check Support page works correctly", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    beforeEach(function () {
        cy.clearCookies();
        cy.viewport(1200, 800);
        perform.signInActions.openWebsiteAndLogin();
        perform.supportActions.openInkJetProphotoPrinters();
        perform.supportActions.clickSupportBtnFromPLP();
        check.supportAsserts.checkSupportPageIsOpened();
        check.supportAsserts.checkSupportSku();
    });
    it('should open Support page for printer and check FAQ tab', function () {
        perform.supportActions.openFaqTabByClickOnABtn();
        check.supportAsserts.checkFaqPageIncludeSearchInput();
        perform.supportActions.typeTextToSearchInputAndSearch();
        check.supportAsserts.checkSearchResultsIsDisplayed();
        check.supportAsserts.checkItemsForTopFAQList();
        perform.supportActions.clickSecondResult();
        check.supportAsserts.checkItemsForSecondResult();
        perform.supportActions.clickThirdResult();
        check.supportAsserts.checkItemsForThirdResult();
    });
    it('should open Support page for printer and check Manuals&Docs tab', function () {
        perform.supportActions.openManualsTabByClickOnABtn();
        check.supportAsserts.checkActiveTabContainsBlocks();
        perform.supportActions.openToggleOfADocsTab();
        check.supportAsserts.checkDocsToggleDescription();
        //perform.supportActions.clickBtnAndDownloadTheDocFile();
    });
    it('should open Support page for printer and check Download tab', function () {
        check.supportAsserts.checkSupportDownloadsTabIsActive();
        check.supportAsserts.checkActiveTabContainsBlocks();
        perform.supportActions.openToggleOfADownloadTab();
        check.supportAsserts.checkDownloadToggleDescription();
        //perform.supportActions.clickBtnAndDownloadTheFile();
    });
    it('should open Support page for printer and check Registration&Warranty tab', function () {
        perform.supportActions.openOptionsTabByClickOnABtn();
        check.supportAsserts.checkFirstBlockIsVisible();
       // supportActions.clickRegisterNowBtn();
        check.supportAsserts.checkSecondBlockIsVisible();
        perform.supportActions.clickCheckYourWarrantyBtn();
        check.supportAsserts.checkThatCorrectPageIsOpened();
        cy.go('back');
        perform.supportActions.openOptionsTabByClickOnABtn();
        check.supportAsserts.checkThirdBlockIsVisible();
        perform.supportActions.clickCheckExtendedWarrantyBtn();
        check.supportAsserts.checkCorrectPageIsOpened();
    });
    it('should open Support page for printer and check ContactUs tab', function () {
        perform.supportActions.clickContactUsButton();
        check.supportAsserts.checkContactUsFirstBlock();
        perform.supportActions.clickChatNowBtn();
        check.supportAsserts.checkChatWasOpened();
        //click EmailUsBtn when page will be created
        //check EmailUs form
        perform.supportActions.clickOnFindRepairButton();
        check.supportAsserts.checkWidgetIsOpened();
    });
    it('should open Support page for printer, change OS and check data', function () {
        perform.supportActions.selectOperatingSystemMac();
        perform.supportActions.clickGoBtn();
        check.supportAsserts.checkMacOSInAddressLink();
        check.supportAsserts.checkDownloadTabHasCorrectFileExtensionForMac();
        perform.supportActions.selectOperatingSystemWindows();
        perform.supportActions.clickGoBtn();
        check.supportAsserts.checkWindowsOSInAddressLink();
        check.supportAsserts.checkDownloadTabHasCorrectFileExtensionForWindows();
    });
   //  it('should open Support page for printer and check redirect to Printers home page', function () {
   //      perform.supportActions.goToPrintersHomePage();
   //      check.supportAsserts.checkPrintersHomePage();
   // });
});
