import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe("Check that user can go from one website to another one", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    beforeEach(function () {
        cy.clearCookies();
        cy.viewport(1200, 800);
        perform.signInActions.openWebsiteAndLogin();
    });
    it('should select several websites and check correct redirects', function () {
        perform.siteSelectorActions.clickTopNavigationBtnToOpenCountriesList();


    });
});