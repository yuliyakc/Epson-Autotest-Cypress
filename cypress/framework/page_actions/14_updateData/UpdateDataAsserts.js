import CommonElements from "../../locators/CommonElements";
import notificationsData from "../../../data/notifications";

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
}
export default UpdateDataAsserts