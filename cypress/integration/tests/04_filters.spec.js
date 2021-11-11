import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe("Checking filter for all printers", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    beforeEach(function () {
        cy.clearCookies();
        cy.viewport(1200, 800);
        perform.signInActions.openWebsiteAndLogin();
    });
    it('should check that filters are working correct for Ink Printer', function () {
        perform.signInActions.openWebsiteAndLogin();
        perform.searchActions.searchInkPrinterPLP();
        check.assertions.checkMainProductsQuantity();
        perform.filtersActions.useAppSegmentFilter();
        check.assertions.checkActiveFilter();

        perform.commonActions.resetFilters();
        perform.filtersActions.useCategoryFilter();
        check.assertions.checkInkQuantity();
    });
    it('should check that several filters shows correct result for Dot Printer', function () {
        perform.signInActions.openWebsiteAndLogin();
        perform.searchActions.searchDotPrinterPLP();
        perform.filtersActions.useIncludedSoftFilter();
        perform.filtersActions.usePriceFrom200Filter();
        check.assertions.checkActiveDotFilters();
        check.assertions.checkDotMatrixQuantity();
    });
    it('should check that filter is working correct for Laser Printer', function () {
        perform.signInActions.openWebsiteAndLogin();
        perform.searchActions.searchLaserPrinters();
        perform.filtersActions.useClassificationFilter();
        check.assertions.checkActiveFilter();
        check.assertions.checkLaserQuantity();
    });
    it('should check that filter is working correct for Laser Printer and clear filter', function () {
        perform.signInActions.openWebsiteAndLogin();
        perform.commonActions.openProductListingPage();
        perform.filtersActions.useLargeFormatPrinters();
        check.assertions.checkActiveFilter();
        perform.filtersActions.resetFilters();
        check.assertions.checkActiveFilterIsAbsent();
        check.assertions.checkMainProductsQuantity();
     });
    it('should check that filter is working correct for Label Maker Printers', function () {
        perform.signInActions.openWebsiteAndLogin();
        perform.commonActions.openProductListingPage();
        perform.filtersActions.useLabelMakerPrinters();
        check.assertions.checkActiveFilter();
        check.assertions.checkLabelMakerProductsQuantity();
    });
});
