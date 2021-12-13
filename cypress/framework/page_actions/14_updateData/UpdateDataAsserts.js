import CommonElements from "../../locators/CommonElements";
import notificationsData from "../../../data/notifications";
import UpdateDataElements from "../../locators/14_updateData/UpdateDataElements";

class UpdateDataAsserts {
    checkCorrectMessageIsDisplayed(){
        cy.get(CommonElements.cssGlobal_Message).should("contain", notificationsData.errors.positive)
    };
    checkUpdateDetailsTabIsOpened(){
        cy.url().should("include", "my-account/update-profile");
        cy.get("div").should("have.class", "update-profile");
    };
    checkUpdateEmailTabIsOpened(){
        cy.url().should("include", "my-account/update-email");
        cy.get("div").should("have.class", "update-email");
    };
    checkChangePassTabIsOpened(){
        cy.url().should("include", "my-account/update-password");
        cy.get("div").should("have.class", "update-password");
    };
    checkEmailErrorIsDisplayed(){
      cy.get(UpdateDataElements.idError_Email).should("be.visible");
    };
    checkConfirmEmailErrorIsDisplayed(){
        cy.get(UpdateDataElements.idError_ConfirmEmail).should("be.visible");
    };
    checkPasswordErrorIsDisplayed(){
      cy.get(UpdateDataElements.idError_Password).should("be.visible");
    };
    checkErrorsForOldPasswordIsDisplayed(){
      cy.get(UpdateDataElements.idErrors_OldPassword).should("be.visible");
    };
    checkErrorsForNewPasswordIsDisplayed(){
        cy.get(UpdateDataElements.idErrors_NewPassword).should("be.visible");
    };
    checkErrorForPasswordConfirmIsDisplayed(){
        cy.get(UpdateDataElements.idError_ConfirmNewPass).should("be.visible");
    };
    checkUserGetMinCharacterError(){
      cy.get(UpdateDataElements.idError_MinCharacter).should("be.visible");
    };



}
export default UpdateDataAsserts