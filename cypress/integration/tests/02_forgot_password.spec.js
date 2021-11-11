import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe ("Send a message when forgot password", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    it('should click Forgot Password btn and assert an alert', function () {
        // comment
        //perform.commonActions.openWebsite();
        cy.viewport(1420, 950);
        perform.commonActions.confirmAllCookies();
        perform.commonActions.clickCreateNewAccountBtn();
        perform.forgotPassActions.clickForgotPasswordButton();
        perform.forgotPassActions.eraseEmail();
        cy.scrollTo(300,290);
        perform.forgotPassActions.clickResetPasswordButton();

        check.forgotPassAsserts.checkErrorAlertIfEmailIsAbsent();

        perform.forgotPassActions.fillEmailToResetPassword();
        perform.forgotPassActions.clickResetPasswordButton();
        check.forgotPassAsserts.checkForgotPwdAlertIsDisplayed();
    });
});