// import Actions from "../../framework/Actions.js"
// import Asserts from "../../framework/Asserts.js"
//
// describe("Checking Change Password Tab", ()=> {
//     let perform = new Actions();
//     let check = new Asserts();
//     beforeEach(function () {
//         cy.clearCookies();
//         cy.viewport(1200, 800);
//     });
//     it('should check that new Password is saved successfully', function () {
//         perform.signInActions.openSiteAndLoginAccountForPassChange();
//         perform.myAccountActions.openMyAccountMenu();
//         perform.updateDataActions.openChangePasswordTab();
//         check.updateDataAsserts.checkChangePassTabIsOpened();
//
//         perform.updateDataActions.clickUpdateInfoBtn();
//         check.updateDataAsserts.checkErrorsForOldPasswordIsDisplayed();
//         check.updateDataAsserts.checkErrorsForNewPasswordIsDisplayed();
//         check.updateDataAsserts.checkErrorForPasswordConfirmIsDisplayed();
//
//         perform.updateDataActions.fillAllFieldsExceptOldPassword();
//         perform.updateDataActions.clickUpdateInfoBtn();
//         check.updateDataAsserts.checkErrorsForOldPasswordIsDisplayed();
//         check.commonAsserts.checkGlobalAlertIsDisplayed();
//
//         perform.updateDataActions.fillAllFieldsExceptNewPassword();
//         perform.updateDataActions.clickUpdateInfoBtn();
//         check.updateDataAsserts.checkErrorsForNewPasswordIsDisplayed();
//         check.commonAsserts.checkGlobalAlertIsDisplayed();
//
//         perform.updateDataActions.addShortPasswordForValidationChecking();
//         perform.updateDataActions.clickUpdateInfoBtn();
//         check.updateDataAsserts.checkUserGetMinCharacterError();
//
//         perform.updateDataActions.fillAllFieldsExceptConfirmNewPass();
//         perform.updateDataActions.clickUpdateInfoBtn();
//         check.updateDataAsserts.checkErrorForPasswordConfirmIsDisplayed();
//         check.commonAsserts.checkGlobalAlertIsDisplayed();
//
//         perform.updateDataActions.enterCurrentPassword();
//         perform.updateDataActions.enterNewPassword();
//         perform.updateDataActions.confirmNewPassword();
//         perform.updateDataActions.clickUpdateInfoBtn();
//         check.commonAsserts.checkGlobalAlertIsDisplayed();
//     });
//     it('should check that user re-login with new password', function () {
//         perform.commonActions.openWebsite();
//         perform.commonActions.acceptWebsiteCookies();
//         perform.commonActions.clickCreateNewAccountBtn();
//         perform.signInActions.enterEmailForPasswordChange();
//         perform.signInActions.enterNewPasswordToLogin();
//         perform.signInActions.clickLogInBtn();
//         check.myAccAsserts.checkMyAccountBtnIsVisible();
//     });
// });