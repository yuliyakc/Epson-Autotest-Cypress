import Actions from "../../framework/Actions.js"
import Asserts from "../../framework/Asserts.js"

describe("Checking Update Email Tab", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    beforeEach(function () {
        cy.clearCookies();
        cy.viewport(1200, 800);
        perform.signInActions.openWebsiteAndLogin();
        perform.myAccountActions.openMyAccountMenu();
        perform.updateDetailsActions.openUpdateEmailTab()
        check.updateDataAsserts.checkUpdateEmailTabIsOpened();
    });
    it('should check that new Email is saved successfully', function () {
        perform.updateDetailsActions.fillOldAndNewEmails();
        perform.updateDetailsActions.fillOldPassword();
        perform.updateDetailsActions.clickUpdateInfoBtn();
        check.commonAsserts.checkGlobalAlertIsDisplayed();
    });
    it('should check negative cases for email changing', function () {
        perform.updateDetailsActions.eraseAllFields();
        perform.updateDetailsActions.clickUpdateInfoBtn();
        check.commonAsserts.checkGlobalAlertIsDisplayed();
        check.updateDataAsserts.checkEmailErrorIsDisplayed();
        check.updateDataAsserts.checkConfirmEmailErrorIsDisplayed();
        check.updateDataAsserts.checkPasswordErrorIsDisplayed();

        perform.updateDetailsActions.fillAllFieldsExceptEmail();
        perform.updateDetailsActions.clickUpdateInfoBtn();
        check.updateDataAsserts.checkEmailErrorIsDisplayed();
        check.commonAsserts.checkGlobalAlertIsDisplayed();

        perform.updateDetailsActions.fillAllFieldsExceptCheckEmail();
        perform.updateDetailsActions.clickUpdateInfoBtn();
        check.updateDataAsserts.checkConfirmEmailErrorIsDisplayed();
        check.commonAsserts.checkGlobalAlertIsDisplayed();

        perform.updateDetailsActions.fillAllFieldsExceptPassword();
        perform.updateDetailsActions.clickUpdateInfoBtn();
        check.updateDataAsserts.checkPasswordErrorIsDisplayed();
        check.commonAsserts.checkGlobalAlertIsDisplayed();

        perform.updateDetailsActions.fillOldPassword();
        perform.updateDetailsActions.clickUpdateInfoBtn();
        check.commonAsserts.checkGlobalAlertIsDisplayed();
    });
});