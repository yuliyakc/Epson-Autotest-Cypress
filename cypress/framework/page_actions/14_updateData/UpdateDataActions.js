import MyAccountElements from "../../locators/11_myAccount/MyAccountElements";
import UpdateDataElements from "../../locators/14_updateData/UpdateDataElements";
import usersData from "../../../data/users";

class UpdateDataActions {
    openUpdateDetailsTab(){
        cy.get(MyAccountElements.cssTab_UpdateDetails).click();
    };
    enterFirstAndLastNames(){
        cy.get(UpdateDataElements.idInput_ProfileFirstName).click().clear().type(usersData.address.firstName);
        cy.get(UpdateDataElements.idInput_ProfileLastName).click().clear().type(usersData.address.lastName)
    };
    selectAndAddDateOfBirth(){
        cy.get(UpdateDataElements.cssDropdown_Day).select(3).should("have.value", 3);
        cy.get(UpdateDataElements.cssDropdown_Month).select(3).should("have.value", 3);
        cy.get(UpdateDataElements.cssDropdown_Year).select("1989").should("have.value", "1989");
    };
    changeTelephoneNumber(){
        cy.get(UpdateDataElements.cssInput_Telephone).click().clear().type(usersData.address.telephone);
    };
    clickUpdateInfoBtn(){
      cy.xpath(UpdateDataElements.xpathBtn_UpdateInfo).click();
    };
    openUpdateEmailTab(){
        cy.get(MyAccountElements.cssTab_UpdateEmail).click();
    };
    fillOldAndNewEmails(){
      cy.get(UpdateDataElements.idInput_NewEmail).click().clear().type(usersData.register.email);
      cy.get(UpdateDataElements.idInput_CheckEmail).click().clear().type(usersData.register.email);
    };
    fillOldPassword(){
        cy.get(UpdateDataElements.idInput_Password).click().clear().type(usersData.register.password);
    };
    openChangePasswordTab(){
        cy.get(MyAccountElements.cssTab_ChangePassword).click();
    };
    enterCurrentPassword(){
      cy.get(UpdateDataElements.idInput_CurrentPassword).click().clear().type(usersData.register.password);
    };
    enterNewPassword(){
        cy.get(UpdateDataElements.idInput_NewPassword).click().clear().type(usersData.register.newPassword);
    };
    confirmNewPassword(){
        cy.get(UpdateDataElements.idInput_CheckNewPassword).click().clear().type(usersData.register.newPassword);
    };
    saveChangesWithoutAName(){
        cy.get(UpdateDataElements.idInput_ProfileFirstName).click().clear();
        cy.get(UpdateDataElements.idInput_ProfileLastName).click().clear();
    };
    eraseAllFields(){
        cy.get(UpdateDataElements.idInput_NewEmail).click().clear();
        cy.get(UpdateDataElements.idInput_CheckEmail).click().clear();
        cy.get(UpdateDataElements.idInput_Password).click().clear();
    };
    fillAllFieldsExceptEmail(){
        cy.get(UpdateDataElements.idInput_NewEmail).click().clear();
        cy.get(UpdateDataElements.idInput_CheckEmail).click().clear();
        cy.get(UpdateDataElements.idInput_Password).click().clear().type(usersData.register.password);
    };
    fillAllFieldsExceptCheckEmail(){
        cy.get(UpdateDataElements.idInput_NewEmail).click().clear().type(usersData.register.email);
        cy.get(UpdateDataElements.idInput_CheckEmail).click().clear();
        cy.get(UpdateDataElements.idInput_Password).click().clear().type(usersData.register.password);
    };
    fillAllFieldsExceptPassword(){
        cy.get(UpdateDataElements.idInput_NewEmail).click().clear().type(usersData.register.email);
        cy.get(UpdateDataElements.idInput_CheckEmail).click().clear().type(usersData.register.email);
        cy.get(UpdateDataElements.idInput_Password).click().clear();
    };
    fillAllFieldsExceptOldPassword(){
        cy.get(UpdateDataElements.idInput_CurrentPassword).click().clear();
        cy.get(UpdateDataElements.idInput_NewPassword).click().clear().type(usersData.register.newPassword);
        cy.get(UpdateDataElements.idInput_CheckNewPassword).click().clear().type(usersData.register.newPassword);
    };
    fillAllFieldsExceptNewPassword(){
        cy.get(UpdateDataElements.idInput_CurrentPassword).click().clear().type(usersData.register.password);
        cy.get(UpdateDataElements.idInput_NewPassword).click().clear();
        cy.get(UpdateDataElements.idInput_CheckNewPassword).click().clear().type(usersData.register.newPassword);
    };
    fillAllFieldsExceptConfirmNewPass(){
        cy.get(UpdateDataElements.idInput_CurrentPassword).click().clear().type(usersData.register.password);
        cy.get(UpdateDataElements.idInput_NewPassword).click().clear().type(usersData.register.newPassword);
        cy.get(UpdateDataElements.idInput_CheckNewPassword).click().clear();
    };
    addShortPasswordForValidationChecking(){
        cy.get(UpdateDataElements.idInput_CurrentPassword).click().clear().type(usersData.register.password);
        cy.get(UpdateDataElements.idInput_NewPassword).click().clear().type(usersData.register.short);
        cy.get(UpdateDataElements.idInput_CheckNewPassword).click().clear().type(usersData.register.short);
    };
}
export default UpdateDataActions