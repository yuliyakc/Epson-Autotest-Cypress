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
    fillOldAndNewMenu(){
      cy.get(UpdateDataElements.idInput_NewEmail).click().clear().type(usersData.register.email);
      cy.get(UpdateDataElements.idInput_CheckEmail).click().clear().type(usersData.register.email);
    };
    fillOldPassword(){
        cy.get(UpdateDataElements.idInput_Password).click().clear().type(usersData.register.password);
    };


}
export default UpdateDataActions