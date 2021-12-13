import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe ("Checking of all the links for Shop online pages to have status 200", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    beforeEach(function () {
        cy.clearCookies();
        cy.viewport(1200, 800);
        perform.signInActions.openWebsiteAndLogin();
    });
    it('should have all Shop Online links with status 200', function () {
        perform.homePageMenuActions.openShopOnlineHomePage();
        check.homePageMenuAsserts.checkShopOnlineForHomeCorrectRedirect();

        perform.homePageMenuActions.openShopOnlineBusinessPage();
        check.homePageMenuAsserts.checkShopOnlineForBusinessCorrectRedirect();
    });
});
