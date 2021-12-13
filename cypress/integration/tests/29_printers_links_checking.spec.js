import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe ("Checking of all the links on main menu to have status 200", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    beforeEach(function () {
        cy.clearCookies();
        cy.viewport(1200, 800);
        perform.signInActions.openWebsiteAndLogin();
    });
    it('should have all InkJet Printers links with status 200', function () {
        perform.homePageMenuActions.openInkJetPrintersPage();
        check.homePageMenuAsserts.checkInkJetPrintersServerCorrectResponse();

        perform.homePageMenuActions.openInkConsumerPage();
        check.homePageMenuAsserts.checkInkJetConsumerPrintersServerCorrectResponse();

        perform.homePageMenuActions.openInkPhotoPage();
        check.homePageMenuAsserts.checkInkJetPhotoPrintersServerCorrectResponse();

        perform.homePageMenuActions.openInkJetBusinessPrinters();
        check.homePageMenuAsserts.checkInkJetBusinessPrintersServerCorrectResponse();

        perform.homePageMenuActions.openInkMicroBusinessPage();
        check.homePageMenuAsserts.checkInkJetMicroBusinessPrintersServerCorrectResponse();
    });
    it('should have all Laser Printers links with status 200', function () {
        perform.homePageMenuActions.openLaserPrintersPage();
        check.homePageMenuAsserts.checkLaserPrintersServerCorrectResponse();

        perform.homePageMenuActions.openLaserMonochromePage();
        check.homePageMenuAsserts.checkLaserMonochromeServerCorrectResponse();

        perform.homePageMenuActions.openLaserColourPage();
        check.homePageMenuAsserts.checkLaserColourServerCorrectResponse();
    });
    it('should have Dot Matrix Printers links with status 200', function () {
        perform.homePageMenuActions.openDotMatrixPrintersPage();
        check.homePageMenuAsserts.checkDotMatrixPrintersServerCorrectResponse();
    });
    it('should have Large Format Printers links with status 200', function () {
        perform.homePageMenuActions.openLargeFormatPrintersPage();
        check.homePageMenuAsserts.checkDotMatrixPrintersServerCorrectResponse();
    });
    it('should have all Label Maker Printers links with status 200', function () {
        perform.homePageMenuActions.openLabelMakerPrintersPage();
        check.homePageMenuAsserts.checkLabelMakerPrintersServerCorrectResponse();

        perform.homePageMenuActions.openLabelMakerRemotePage();
        check.homePageMenuAsserts.checkLabelRemoteServerCorrectResponse();

        perform.homePageMenuActions.openLabelMakerPcConnectedPage();
        check.homePageMenuAsserts.checkLabelPcConnectedServerCorrectResponse();

        perform.homePageMenuActions.openLabelMakerPcRemotePage();
        check.homePageMenuAsserts.checkLabelPcRemoteServerCorrectResponse();

    });
});