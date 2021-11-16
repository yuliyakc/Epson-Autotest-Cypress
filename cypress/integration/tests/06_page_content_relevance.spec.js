import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe ("Testing of pages relevance by breadcrumbs", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    beforeEach(function () {
        cy.clearCookies();
        cy.viewport(1200, 800);
        perform.signInActions.openWebsiteAndLogin();
    });
    it('should hover over InkJet Printers and open random page', function () {
        perform.pageContentRelevanceActions.openConsumerPrintersPage();
        check.assertions.checkConsumerPageIsOpened();
    });
    it('should hover over Laser Printers and open random page', function () {
        perform.pageContentRelevanceActions.openLaserMonochromePrintersPage();
        check.assertions.checkMonochromePageIsOpened();
    });
    it('should hover over Dot Matrix Printers and open page', function () {
        perform.mainHeaderActions.openDotMatrixPrintersPage();
        check.assertions.checkDotMatrixPrintersPageIsOpened();
    });
    it('should hover over Label maker Printers and open random page', function () {
        perform.pageContentRelevanceActions.openLabelMakersPcRemoteAndConnectedPrintersPage();
        check.assertions.checkBothRemoteAndConnectedPageIsOpened();
    });
});