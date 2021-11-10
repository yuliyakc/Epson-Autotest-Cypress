import AddressBookElements from "../../locators/13_addressBook/AddressBookElements";
import usersData from "../../../data/users";

class AddressBookAsserts {
    checkAddressCreationPageIsOpened(){
      cy.url().should("include", "my-account/add-address");
    };
    checkCreatedByDefaultAddress(){
        cy.get(AddressBookElements.cssText_AddressTitle).should("contains.text", usersData.address.default)
    };
    checkNewDataWasSaved(){
      cy.get(AddressBookElements.cssText_AddressFistName).should("contain.text", usersData.address2.firstName);
    };
    checkDefaultAddressIsAbsent(){
        cy.get(AddressBookElements.cssText_AddressTitle).should("not.have.text", usersData.address2.firstName)
    };

}
export default AddressBookAsserts