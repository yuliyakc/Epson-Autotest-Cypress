import MyAccountElements from "../../locators/11_myAccount/MyAccountElements";
import MainHeaderElements from "../../locators/00_mainHeader/MainHeaderElements";

class MyAccAsserts {
    checkAddressBookTabIsOpened(){
        cy.url().should("include", "my-account/address-book");
        cy.get("div").should("have.class", "address-book");
    };
    checkMyAccountTabIsOpened(){
        cy.url().should("include", "my-account/home");
        cy.get("div").should("have.class","manage-account");
    };
    checkMyAccountBtnIsVisible(){
        cy.get(MainHeaderElements.cssDropdown_MyAccount).should("be.visible");
    };
    checkThatUserTransferToUpdateProfilePage(){
        cy.url().should("include", "my-account/update-profile");
    };
    checkThatUserTransferToUpdateEmailPage(){
        cy.url().should("include", "my-account/update-email");
    };
    checkThatUserTransferToUpdatePasswordPage(){
        cy.url().should("include", "my-account/update-password");
    };
    checkThatUserTransferToAddressBookPage(){
        cy.url().should("include", "my-account/address-book");
    };
    checkThatUserTransferToAccessoriesPage(){
        cy.url().should("include", "my-account/my-products");
    };

}
export default MyAccAsserts