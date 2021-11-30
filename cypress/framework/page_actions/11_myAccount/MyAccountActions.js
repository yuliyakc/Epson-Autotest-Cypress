import MyAccountElements from "../../locators/11_myAccount/MyAccountElements";
import HeaderElements from "../../locators/00_header/HeaderElements";

class MyAccountActions {
    openMyAccountMenu(){
        cy.get(MyAccountElements.cssDropdown_MyAccount).click();
    };
    openMyAccountTab(){
        cy.get(MyAccountElements.cssTab_MyAccount).click();
    };
    openOrderHistoryPage(){
      cy.get(MyAccountElements.cssLink_OrderHistory).click();
    };
    openUpdatePersonalDetailsPage(){
        cy.get(MyAccountElements.cssLink_UpdatePersonalDetails).click();
    };
    openUpdateEmailPage(){
      cy.get(MyAccountElements.cssLink_UpdateEmail).click();
    };
    openUpdatePasswordPage(){
        cy.get(MyAccountElements.cssLink_UpdatePassword).click();
    };
    openAddressBookPage(){
        cy.get(MyAccountElements.cssLink_AddressBook).click();
    };
    openBuyAccessoriesPage(){
        cy.get(MyAccountElements.cssLink_Accessories).click({force:true});
    };

}
export default MyAccountActions