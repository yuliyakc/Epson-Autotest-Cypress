import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe ("Testing of pages relevance by breadcrumbs", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    it('should hover over InkJet Printers and open random page', function () {
        perform.signInActions.openWebsiteAndLogin();

        perform.pageContentRelevanceActions.openConsumerPrintersPage();
        check.assertions.checkConsumerPageIsOpened();
    });
    it('should hover over Laser Printers and open random page', function () {
        perform.signInActions.openWebsiteAndLogin();

        perform.pageContentRelevanceActions.openLaserMonochromePrintersPage();
        check.assertions.checkMonochromePageIsOpened();
    });
    it('should hover over Dot Matrix Printers and open page', function () {
        perform.signInActions.openWebsiteAndLogin();

        perform.mainHeaderActions.openDotMatrixPrintersPage();
        check.assertions.checkDotMatrixPrintersPageIsOpened();
    });
    it('should hover over Large Format Printers and open page', function () {
        perform.signInActions.openWebsiteAndLogin();

        perform.mainHeaderActions.openLargeFormatPrintersPage();
        check.assertions.checkLFPPageIsOpened();
    });
    it('should hover over Label maker Printers and open random page', function () {
        perform.signInActions.openWebsiteAndLogin();

        perform.pageContentRelevanceActions.openLabelMakersPcRemoteAndConnectedPrintersPage();
        check.assertions.checkBothRemoteAndConnectedPageIsOpened();
    });
});