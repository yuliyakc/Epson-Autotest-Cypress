import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe("Check Learn More page is opens correctly", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    it('should open Learn More page for InkJet printers', function () {
        perform.signInActions.openWebsiteAndLogin();

        perform.mainHeaderActions.openInkJetBusinessPrinters();
        perform.learnMoreActions.clickLearnMoreBtn();
        check.assertions.checkLearnMorePageIsOpened();
    });
    it('should open Learn More page for Laser Printers', function () {
        perform.signInActions.openWebsiteAndLogin();

        perform.mainHeaderActions.openLaserColourPrinters();
        perform.learnMoreActions.clickLearnMoreBtn();
        check.assertions.checkLearnMorePageIsOpened();
    });
    it('should open Learn More page for Dot Matrix Printers', function () {
        perform.signInActions.openWebsiteAndLogin();

        perform.mainHeaderActions.openDotMatrixPrintersPage();
        perform.learnMoreActions.clickLearnMoreBtn();
        check.assertions.checkLearnMorePageIsOpened();
    });
    it('should open Learn More page for Large Format Printers', function () {
        perform.signInActions.openWebsiteAndLogin();

        perform.mainHeaderActions.openLargeFormatPrintersPage();
        perform.learnMoreActions.clickLearnMoreBtn();
        check.assertions.checkLearnMorePageIsOpened();
    });
    it('should open Learn More page for Label Maker Printers', function () {
        perform.signInActions.openWebsiteAndLogin();

        perform.mainHeaderActions.openLabelMakerRemotePrinters();
        perform.learnMoreActions.clickLearnMoreBtn();
        check.assertions.checkLearnMorePageIsOpened();
    });
});
