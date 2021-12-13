import MyAccountElements from "../../locators/11_myAccount/MyAccountElements";
import AddressBookElements from "../../locators/13_addressBook/AddressBookElements";
import usersData from "../../../data/users";
import CheckoutElements from "../../locators/06_checkout/CheckoutElements";
import CommonElements from "../../locators/CommonElements";

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
    clickSearchAgainBtn(){
        cy.get(CommonElements.cssBtn_SearchAgain).click();
    };
    enterPostcodeToAddressAndSelect(){
      cy.get(CommonElements.idInput_AddressFinder).click().type(usersData.address.postcode);
      cy.wait(1000);
      cy.get("body > div.pca > div:nth-child(1)").find(".pcaitem").first().click();

    };
    editDataForOldInfo(){
        cy.get(CheckoutElements.idInput_Nickname).click().clear().type(usersData.address2.nick);
        cy.get(CheckoutElements.idInput_FirstName).click().clear().type(usersData.address2.firstName);
        cy.get(CheckoutElements.idInput_LastName).click().clear().type(usersData.address2.lastName);
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
    fillAllInfoExceptFirstName(){
        cy.get(CheckoutElements.idInput_FirstName).click().clear();
        cy.get(CheckoutElements.idInput_LastName).click().clear().type(usersData.register.lastName);
        cy.get(CheckoutElements.idInput_Address1).click().clear().type(usersData.purchase.shippingAddress);
        cy.get(CheckoutElements.idInput_Town).click().clear().type(usersData.purchase.town);
        cy.get(CheckoutElements.idInput_Postcode).click().clear().type(usersData.purchase.postcode);
    };
    fillAllInfoExceptLastName(){
        cy.get(CheckoutElements.idInput_FirstName).click().clear().type(usersData.register.firstName);
        cy.get(CheckoutElements.idInput_LastName).click().clear();
        cy.get(CheckoutElements.idInput_Address1).click().clear().type(usersData.purchase.shippingAddress);
        cy.get(CheckoutElements.idInput_Town).click().clear().type(usersData.purchase.town);
        cy.get(CheckoutElements.idInput_Postcode).click().clear().type(usersData.purchase.postcode);
    };
    fillAllInfoExceptAddress(){
        cy.get(CheckoutElements.idInput_FirstName).click().clear().type(usersData.register.firstName);
        cy.get(CheckoutElements.idInput_LastName).click().clear().type(usersData.register.lastName);
        cy.get(CheckoutElements.idInput_Address1).click().clear();
        cy.get(CheckoutElements.idInput_Town).click().clear().type(usersData.purchase.town);
        cy.get(CheckoutElements.idInput_Postcode).click().clear().type(usersData.purchase.postcode);
    };
    fillAllInfoExceptTown(){
        cy.get(CheckoutElements.idInput_FirstName).click().clear().type(usersData.register.firstName);
        cy.get(CheckoutElements.idInput_LastName).click().clear().type(usersData.register.lastName);
        cy.get(CheckoutElements.idInput_Address1).click().clear().type(usersData.purchase.shippingAddress);
        cy.get(CheckoutElements.idInput_Town).click().clear();
        cy.get(CheckoutElements.idInput_Postcode).click().clear().type(usersData.purchase.postcode);
    };
    fillAllInfoExceptPostcode(){
        cy.get(CheckoutElements.idInput_FirstName).click().clear().type(usersData.register.firstName);
        cy.get(CheckoutElements.idInput_LastName).click().clear().type(usersData.register.lastName);
        cy.get(CheckoutElements.idInput_Address1).click().clear().type(usersData.purchase.shippingAddress);
        cy.get(CheckoutElements.idInput_Town).click().clear().type(usersData.purchase.town);
        cy.get(CheckoutElements.idInput_Postcode).click().clear();
    };
    enterPostCode(){
        cy.get(CheckoutElements.idInput_Postcode).click().clear().type(usersData.purchase.postcode);
    };
}



export default AddressBookActions