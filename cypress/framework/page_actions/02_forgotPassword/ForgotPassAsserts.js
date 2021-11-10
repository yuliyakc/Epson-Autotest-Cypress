import ForgotPassElements from "../../locators/02_forgotPassword/ForgotPassElements";

class ForgotPassAsserts {
    checkForgotPwdAlertIsDisplayed(){
        cy.get(ForgotPassElements.cssAlert_ResendPassword).should('be.visible')
    };
    checkErrorAlertIfEmailIsAbsent(){
      cy.get(ForgotPassElements.cssError_EmptyEmail).should('be.visible')
    };
}
export default ForgotPassAsserts