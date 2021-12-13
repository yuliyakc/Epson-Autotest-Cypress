import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

// Have finished links checking for main menu and added new autotests
// for projectors_links, ink_links, shop_online_links checking . Have finished 33_search_widget
// autotest with clicking on Printers name, Learn more page and selecting of suggestion for a search.
// today have run autotests - 3 were failed - on first auto, have changed locator. For 2 others have a question -
// Media is absent on those printers, that I have been used in autotests before.
// Should I find another printers with Media and rewrite tests, or this Media accessories will come back sometime?
// One more question - promotion for one of the tests is missing now, so as voucher code. I need new promotion - can I add it now?
// and I don't know how to create vouchers with percent and amount - need help on that


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
    it('should open Support page for printer and check correct OS changing and saving', function () {
        perform.supportActions.selectOperatingSystem();
        perform.supportActions.clickGoBtn();
        check.supportAsserts.checkNewOSInAddressLink();
    });
    it('should open Support page for printer and check redirect to Printers home page', function () {
        perform.supportActions.goToPrintersHomePage();
        check.supportAsserts.checkPrintersHomePage();
   });
});
