import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe ("Register, logout and relogin", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    beforeEach(function () {
        cy.clearCookies();
        cy.viewport(1200, 800);
    });
    // it('should register new user, logout and relogin', function () {
    //     perform.commonActions.openWebsite();
    //     perform.cookiesDialogActions.confirmAllCookies();
    //     perform.commonActions.clickCreateNewAccountBtn();
    //     perform.signUpActions.submitAndRegisterBtnClick();
    //     check.commonAsserts.checkGlobalAlertIsDisplayed();
    //
    //     perform.signUpActions.enterIncorrectDataForRegistration();
    //     perform.signUpActions.submitAndRegisterBtnClick();
    //     check.signAsserts.checkIncorrectEmailError();
    //     check.commonAsserts.checkGlobalAlertIsDisplayed();
    //
    //     perform.signUpActions.enterRequiredDataForRegistration();
    //     perform.signUpActions.setCustomerTypePersonal();
    //     perform.signUpActions.setAgeRequirements();
    //     perform.signUpActions.setTermsOfUse();
    //     perform.signUpActions.submitAndRegisterBtnClick();
    //     perform.signOutActions.clickSignOutBtn();
    //     check.signAsserts.checkUserLogsOut();
    //
    //     perform.commonActions.clickCreateNewAccountBtn();
    //     perform.signInActions.enterEmailToLogin();
    //     perform.signInActions.enterPasswordToLogin();
    //     perform.signInActions.clickLogInBtn();
    //     check.myAccAsserts.checkMyAccountBtnIsVisible();
    // });
    it('should check negative cases with emails when register', function () {
        perform.commonActions.openWebsite();
        perform.cookiesDialogActions.confirmAllCookies();
        perform.commonActions.clickCreateNewAccountBtn();
        perform.signUpActions.EnterRequiredInfoButWithoutEmails()
        perform.signUpActions.enterEmailsWithMissingDot();
        perform.signUpActions.setCustomerTypePersonal();
        perform.signUpActions.setAgeRequirements();
        perform.signUpActions.setTermsOfUse();
        perform.signUpActions.submitAndRegisterBtnClick();
        check.signAsserts.checkEmailVerificationError();
        check.commonAsserts.checkGlobalAlertIsDisplayed();

        perform.signUpActions.enterEmailWithMissingEt();
        perform.signUpActions.setTermsOfUse();
        perform.signUpActions.submitAndRegisterBtnClick();
        check.signAsserts.checkEmailVerificationError();
        check.commonAsserts.checkGlobalAlertIsDisplayed();

        perform.signUpActions.enterEmailWithComma();
        perform.signUpActions.setTermsOfUse();
        perform.signUpActions.submitAndRegisterBtnClick();
        check.signAsserts.checkEmailVerificationError();
        check.commonAsserts.checkGlobalAlertIsDisplayed();

        perform.signUpActions.enterEmailWithSymbols();
        perform.signUpActions.setTermsOfUse();
        perform.signUpActions.submitAndRegisterBtnClick();
        check.signAsserts.checkEmailVerificationError();
        check.commonAsserts.checkGlobalAlertIsDisplayed();

        perform.signUpActions.enterRequiredDataForRegistration();
        perform.signUpActions.setTermsOfUse();
        perform.signUpActions.submitAndRegisterBtnClick();
        check.commonAsserts.checkGlobalAlertIsDisplayed();
    });
});