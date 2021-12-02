import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe("Check Learn More page is opens correctly", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    beforeEach(function () {
        cy.clearCookies();
        cy.viewport(1200, 800);
        perform.signInActions.openWebsiteAndLogin();
    });
    it('should open Learn More page for InkJet printers', function () {
        perform.homePageMenuActions.openInkJetBusinessPrinters();
        perform.learnMoreActions.clickLearnMoreBtn();
        check.assertions.checkLearnMorePageIsOpened();
    });
    it('should open Learn More page for Laser Printers', function () {
        perform.homePageMenuActions.openLaserColourPrinters();
        perform.learnMoreActions.clickLearnMoreBtn();
        check.assertions.checkLearnMorePageIsOpened();
    });
//a[contains(text(),'Support')]
    it('should open Learn More page for Dot Matrix Printers', function () {
        perform.homePageMenuActions.openDotMatrixPrintersPage();
        perform.learnMoreActions.clickLearnMoreBtn();
        check.assertions.checkLearnMorePageIsOpened();
    });
    it('should open Learn More page for Label Maker Printers', function () {
        perform.homePageMenuActions.openLabelMakerRemotePrinters();
        perform.learnMoreActions.clickLearnMoreBtn();
        check.assertions.checkLearnMorePageIsOpened();
    });
});
