// import Actions from "../../framework/Actions";
// import Asserts from "../../framework/Asserts";
//
// describe("Checking tabs on My Account menu", ()=> {
//     let perform = new Actions();
//     let check = new Asserts();
//     beforeEach(function () {
//         cy.clearCookies();
//         cy.viewport(1200, 800);
//
//     });
//     it('should check that tabs on My account menu is opened and correct ones', function () {
//         perform.signInActions.openWebsiteAndLogin();
//         perform.myAccountActions.openMyAccountMenu();
//         perform.myAccountActions.openMyAccountTab();
//         check.myAccAsserts.checkMyAccountTabIsOpened();
//
//         perform.myAccountActions.openBuyAccessoriesPage();
//         check.myAccAsserts.checkThatUserTransferToAccessoriesPage();
//         perform.buyAccessoriesActions.clickFirstAccessoryButton();
//         check.buyAccessoriesAsserts.checkAccessoriesTabIsVisible()
//         perform.commonActions.goBackToPreviousPage();
//
//         perform.buyAccessoriesActions.clickFirstSupportButton();
//         check.supportAsserts.checkSupportPageIsOpened();
//         perform.commonActions.goBackToPreviousPage();
//
//         perform.buyAccessoriesActions.clickRegisterNewDeviceBtn();
//
//     });
// });