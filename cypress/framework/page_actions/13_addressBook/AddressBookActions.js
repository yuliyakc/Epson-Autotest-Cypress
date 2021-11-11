import MyAccountElements from "../../locators/11_myAccount/MyAccountElements";
import AddressBookElements from "../../locators/13_addressBook/AddressBookElements";
import usersData from "../../../data/users";
import CheckoutElements from "../../locators/06_checkout/CheckoutElements";

class AddressBookActions {
    openAddressBookTab(){
      cy.get(MyAccountElements.cssTab_AddressBook).click();
    };
    scrollDownAndClickAddNewAddressBtn(){
      cy.scrollTo("bottom");
      cy.get(AddressBookElements.cssBtn_AddressCreation).click();
    };
    enterCorrectDataForNewAddress(){
        cy.get(CheckoutElements.idInput_Nickname).click().clear().type(usersData.address.nickname);
        cy.get(CheckoutElements.idInput_FirstName).click().clear().type(usersData.address.firstName);
        cy.get(CheckoutElements.idInput_LastName).click().clear().type(usersData.address.lastName);
        cy.get(CheckoutElements.idInput_CompanyName).click().clear().type(usersData.address.companyName);
    };
    editDataForOldAddress(){
        cy.get(CheckoutElements.idInput_Nickname).click().clear().type(usersData.address2.nick);
        cy.get(CheckoutElements.idInput_FirstName).click().clear().type(usersData.address2.firstName);
        cy.get(CheckoutElements.idInput_LastName).click().clear().type(usersData.address2.lastName);
        cy.get(CheckoutElements.idInput_CompanyName).click().clear().type(usersData.address2.companyName);
    };
    clickSubmitChanges(){
        cy.get(CheckoutElements.cssButton_Submit).click();
    };
    clickEditAddressBtn(){
        cy.get(AddressBookElements.cssBtn_AddressEdit).click();
    };
    clickDeleteAddressBtn(){
        cy.get(AddressBookElements.cssBtn_AddressDelete).click();
    };
    clickCancelOnModalWindow(){
        cy.wait(1000);
        cy.get(AddressBookElements.cssBtn_CancelDeletion).click();
    };
    clickDeleteOnModalWindow(){
      cy.wait(1000);
      cy.get(AddressBookElements.cssBtn_DeleteTheAddress).click();
    };
}



export default AddressBookActions