import MyAccountElements from "../../locators/11_myAccount/MyAccountElements";

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
        cy.get(MyAccountElements.cssDropdown_MyAccount).should("be.visible");
    };
    checkThatUserTransferToUpdateProfilePage(){
        cy.wait(1000)
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
        cy.wait(1000);
        cy.url().should("include", "my-account/my-products");
    };

}
export default MyAccAsserts