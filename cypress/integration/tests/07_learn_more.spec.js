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
        perform.mainHeaderActions.openInkJetBusinessPrinters();
        perform.learnMoreActions.clickLearnMoreBtn();
        check.assertions.checkLearnMorePageIsOpened();
    });
    it('should open Learn More page for Laser Printers', function () {
        perform.mainHeaderActions.openLaserColourPrinters();
        perform.learnMoreActions.clickLearnMoreBtn();
        check.assertions.checkLearnMorePageIsOpened();
    });
    it('should open Learn More page for Dot Matrix Printers', function () {
        perform.mainHeaderActions.openDotMatrixPrintersPage();
        perform.learnMoreActions.clickLearnMoreBtn();
        check.assertions.checkLearnMorePageIsOpened();
    });
    it('should open Learn More page for Large Format Printers', function () {
        perform.mainHeaderActions.openLargeFormatPrintersPage();
        perform.learnMoreActions.clickLearnMoreBtn();
        check.assertions.checkLearnMorePageIsOpened();
    });
    it('should open Learn More page for Label Maker Printers', function () {
        perform.mainHeaderActions.openLabelMakerRemotePrinters();
        perform.learnMoreActions.clickLearnMoreBtn();
        check.assertions.checkLearnMorePageIsOpened();
    });
});
