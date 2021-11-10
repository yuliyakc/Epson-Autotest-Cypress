import ForgotPassElements from "../../locators/02_forgotPassword/ForgotPassElements";
import usersData from "../../../data/users";

class ForgotPassActions {
    clickForgotPasswordButton(){
      cy.get(ForgotPassElements.cssBtn_ForgotPassword).click();
    };
    eraseEmail(){
        cy.get(ForgotPassElements.cssInput_ForgotPwdEmail).click().clear();

    }
    fillEmailToResetPassword(){
        cy.get(ForgotPassElements.cssInput_ForgotPwdEmail).click().clear().type(usersData.register.email);
    };
    clickResetPasswordButton(){
        cy.wait(2000);
      cy.xpath(ForgotPassElements.xpathButton_ResetPassword).click({force:true});
    };
}
export default ForgotPassActions