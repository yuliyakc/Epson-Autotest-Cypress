import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe("Checking pagination and sorting on PLP", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    it('should check that pagination working correct for PLP', function () {
        perform.signInActions.openWebsiteAndLogin();
        perform.searchActions.searchInkPrinterPLP();
        check.assertions.checkMainProductsQuantity();
        perform.paginationActions.clickTopPaginationButtonNext();
        check.assertions.checkSecondPageIsOpened();
        perform.paginationActions.clickTopPaginationButtonNext();
        check.assertions.checkThirdPageIsOpened();
        perform.paginationActions.clickTopPaginationButtonPrev();
        check.assertions.checkSecondPageIsOpened();
    });
    it('should check that sorting by Price is working correct for PLP', function () {
        perform.signInActions.openWebsiteAndLogin();
        perform.searchActions.searchInkPrinterPLP();
        check.assertions.checkMainProductsQuantity();
        perform.sortingActions.selectSortingPriceAscending();
        check.assertions.checkSortingApplyAscending();
        perform.sortingActions.selectSortingPriceDescending();
        check.assertions.checkSortingApplyDescending();
    });
    it('should check that sorting by Name is working correct for PLP', function () {
        perform.signInActions.openWebsiteAndLogin();
        perform.searchActions.searchInkPrinterPLP();
        check.assertions.checkMainProductsQuantity();
        perform.sortingActions.selectSortingNameAscending();
        check.assertions.checkSortingByNameApplyAscending();
        perform.sortingActions.selectSortingNameDescending();
        check.assertions.checkSortingByNameApplyDescending();
    });
});
