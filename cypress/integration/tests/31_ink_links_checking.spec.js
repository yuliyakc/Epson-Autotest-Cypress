import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe ("Checking of all the links for Ink pages to have status 200", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    beforeEach(function () {
        cy.clearCookies();
        cy.viewport(1200, 800);
        perform.signInActions.openWebsiteAndLogin();
    });
    it('should have all Ink links with status 200', function () {
        perform.homePageMenuActions.openInkLabelMakersPage();
        check.homePageMenuAsserts.checkInkLabelMakersCorrectResponse();
    });
});
