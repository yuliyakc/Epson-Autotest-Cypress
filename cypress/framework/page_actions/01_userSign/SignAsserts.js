import SignUpElements from "../../locators/01_userSign/SignUpElements";
import usersData from "../../../data/users";
import CommonElements from "../../locators/CommonElements";
import printersData from "../../../data/printers";

class SignAsserts {
    checkIncorrectEmailError(){
        cy.get(SignUpElements.cssText_EmailError).should("be.visible");
    };
    checkUserLogsOut(){
        return cy.url()
            .should('include', '/?loggedOut=true');
    };
    checkCorrectPageWasOpened(){
        cy.url()
            .should('include', '/checkout/multi/delivery-address/add');
    };
    checkOldEmailOnCheckoutPage(){
      cy.get(SignUpElements.cssText_CheckEmail).should("include.text", usersData.register.email)
    };
    checkNewEmailOnCheckoutPage(){
        cy.get(SignUpElements.cssText_CheckEmail).should("include.text", usersData.guest.email)
    };
    checkAlertWithOldEmail(){
        cy.get(CommonElements.cssGlobal_Message).should("include.text", usersData.register.email );
    };
    checkAlertWithGuestEmail(){
        cy.get(CommonElements.cssGlobal_Message).should("include.text", "Registered Successfully." );
    };
    checkEmailVerificationError(){
      cy.get(SignUpElements.cssInput_Email).should("have.class", "has-error")
    };

}
export default SignAsserts