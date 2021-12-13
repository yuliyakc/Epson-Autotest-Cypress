import Actions from "../../framework/Actions.js"
import Asserts from "../../framework/Asserts.js"

describe("Checking Address Book Tab", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    beforeEach(function () {
        cy.clearCookies();
        cy.viewport(1200, 800);
        perform.signInActions.openWebsiteAndLogin();
    });
    it('should open PDP page of a printer', function () {
        perform.searchActions.clickPrinterInSearchWidget();
        check.assertions.checkConsumerPageIsOpened();
    });
    it('should open Learn More page of a printer', function () {
        perform.searchActions.clickLeanMoreButtonInSearchWidget();
        check.assertions.checkConsumerPageIsOpened();
    });
    it('should open suggestion to open PLP page and close Search field', function () {
        perform.searchActions.clickSuggestionInSearchWidget();
        check.assertions.checkPlpPageForSearch();
        perform.searchActions.closeSearchFieldByClickOnXBt();
    });

});