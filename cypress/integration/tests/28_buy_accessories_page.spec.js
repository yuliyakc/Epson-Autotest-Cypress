import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe("Checking Buy Accessories page", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    beforeEach(function () {
        cy.clearCookies();
        cy.viewport(1200, 800);

    });
    it('should check that all inner links are opened correct', function () {
        perform.signInActions.openWebsiteAndLogin();
        perform.myAccountActions.openMyAccountMenu();
        perform.myAccountActions.openMyAccountTab();
        check.myAccAsserts.checkMyAccountTabIsOpened();

        perform.myAccountActions.openBuyAccessoriesPage();
        check.myAccAsserts.checkThatUserTransferToAccessoriesPage();

        perform.buyAccessoriesActions.clickFirstProductName();
        check.pdpAssertions.checkTitleIsDisplayed();
        check.pdpAssertions.checkMainBlockWithInformationIsDisplayed();
        check.pdpAssertions.checkThatPriceIsVisible();
        check.pdpAssertions.checkThatInStockStatusIsVisible();
        perform.commonActions.goBackToPreviousPage();

        perform.buyAccessoriesActions.clickFirstAccessoryButton();
        check.buyAccessoriesAsserts.checkAccessoriesTabIsVisible()
        perform.commonActions.goBackToPreviousPage();

        perform.buyAccessoriesActions.clickFirstSupportButton();
        check.supportAsserts.checkSupportPageIsOpened();
        perform.commonActions.goBackToPreviousPage();

        perform.buyAccessoriesActions.clickRegisterNewDeviceBtn();
    });
});