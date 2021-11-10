import MyAccountElements from "../../locators/11_myAccount/MyAccountElements";

class MyAccountActions {
    openMyAccountMenu(){
        cy.get(MyAccountElements.cssDropdown_MyAccount).click();
    };
    openMyAccountTab(){
        cy.xpath(MyAccountElements.xpathTab_MyAccount).click();
    };
    openOrderHistoryPage(){
      cy.xpath(MyAccountElements.xpathLink_OrderHistory).click();
    };
    openUpdatePersonalDetailsPage(){
        cy.xpath(MyAccountElements.xpathLink_UpdatePersonalDetails).click();
    };
    openUpdateEmailPage(){
      cy.xpath(MyAccountElements.xpathLink_UpdateEmail).click();
    };
    openUpdatePasswordPage(){
        cy.xpath(MyAccountElements.xpathLink_UpdatePassword).click();
    };
    openAddressBookPage(){
        cy.xpath(MyAccountElements.xpathLink_AddressBook).click();
    };
    openBuyAccessoriesPage(){
        cy.xpath(MyAccountElements.xpathLink_Accessories).click();
    };

}
export default MyAccountActions