import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe("Checking of Large format printer functionality", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    beforeEach(function () {
        cy.clearCookies();
        cy.viewport(1200, 800);
        perform.signInActions.openWebsiteAndLogin();
    });
    it('should hover Large Format Printers and check that correct page was opened', function () {
        perform.homePageMenuActions.openLargeFormatPrintersPage();
        check.assertions.checkLFPPageIsOpened();
    });
    it('should check that filter is working correct for Large format and clear filter', function () {
        perform.commonActions.openProductListingPage();
        perform.filtersActions.useLargeFormatPrintersFilter();
        check.assertions.checkActiveFilter();
        perform.filtersActions.resetFilters();
        check.assertions.checkActiveFilterIsAbsent();
        check.assertions.checkMainProductsQuantity();
    });
    it('should open Learn More page for Large Format Printers', function () {
        perform.homePageMenuActions.openLargeFormatPrintersPage();
        perform.plpInfoActions.clickLearnMoreBtn();
        check.assertions.checkLearnMorePageIsOpened();
    });
    it('should open LFP page and use pagination', function () {
        perform.homePageMenuActions.openLargeFormatPrintersPage();
        perform.paginationActions.clickTopPaginationButtonNext();
        check.assertions.checkSecondPageIsOpened();
        perform.paginationActions.clickTopPaginationButtonNext();
        check.assertions.checkThirdPageIsOpened();
        perform.paginationActions.clickTopPaginationButtonPrev();
        check.assertions.checkSecondPageIsOpened();
    });
    it('should open LFP page and use sorting by price and name', function () {
        perform.homePageMenuActions.openLargeFormatPrintersPage();
        perform.sortingActions.selectSortingNameAscending();
        check.assertions.checkSortingByNameApplyAscending();
        perform.sortingActions.selectSortingPriceDescending();
        check.assertions.checkSortingApplyDescending();
    });
    it('should open Support page from PLP', function () {
        perform.homePageMenuActions.openLargeFormatPrintersPage();
        perform.supportActions.clickSupportBtnFromPLP();
        check.supportAsserts.checkSupportPageIsOpened();
        check.supportAsserts.checkSupportSku();
    });
});