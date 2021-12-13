import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe ("Checking of all the links for Projectors to have status 200", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    beforeEach(function () {
        cy.clearCookies();
        cy.viewport(1200, 800);
        perform.signInActions.openWebsiteAndLogin();
    });
    it('should have all Projectors links with status 200', function () {
        perform.homePageMenuActions.openProjectorsMainPage();
        check.homePageMenuAsserts.checkProjectorsMainPageCorrectResponse();

        perform.homePageMenuActions.openProjectorsUltraMobilePage();
        check.homePageMenuAsserts.checkUltraMobilePageCorrectResponse();

        perform.homePageMenuActions.openProjectorsMobilePage();
        check.homePageMenuAsserts.checkMobilePageCorrectResponse();

        perform.homePageMenuActions.openProjectorsShortPage();
        check.homePageMenuAsserts.checkShortPageCorrectResponse();

        perform.homePageMenuActions.openProjectorsUltraShortPage();
        check.homePageMenuAsserts.checkUltraShortPageCorrectResponse();

        perform.homePageMenuActions.openProjectorsInstallationPage();
        check.homePageMenuAsserts.checkInstallationPageCorrectResponse();

        perform.homePageMenuActions.openProjectorsAllInOnePage();
        check.homePageMenuAsserts.checkAllInOnePageCorrectResponse();

        perform.homePageMenuActions.openProjectorsHomeCinemaPage();
        check.homePageMenuAsserts.checkHomeCinemaPageCorrectResponse();
    });
});