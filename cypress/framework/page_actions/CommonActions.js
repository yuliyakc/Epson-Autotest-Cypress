import FiltersElements from "../locators/04_productListingPage/FiltersElements";
import MyAccountElements from "../locators/11_myAccount/MyAccountElements";
import CommonElements from "../locators/CommonElements";

class CommonActions {
    confirmAllCookies(){
      cy.get(CommonElements.idModal_AcceptCookies).click();
    };
    openWebsiteOnASpecificPrinter(){
        cy.visitWebsite("/products/printers/inkjet/consumer/ecotank-et-2750/p/30907");
    };
    openSpecificPrinterPDP(){
        cy.visitWebsite("/products/printers/inkjet/microbusiness/workforce-wf-2010w/p/11998");
    };

    clickCreateNewAccountBtn(){
      cy.get(CommonElements.cssButton_CreateAccount).click();
     // cy.get(CommonElements.idModal_AcceptCookies).click();
    };
    openWebsite(){
        cy.visitWebsite("/");
    };
    resetFilters(){
      cy.get(FiltersElements.cssButton_ResetFilter).eq(0).click();
       // cy.get(CommonElements.idModal_AcceptCookies).click();
    };
    openProductListingPage(){
        cy.get(FiltersElements.cssButton_PrintersList).eq(2).click();
    };
    clickSpecificPrintersName(){
        cy.xpath(CommonElements.xpathLink_SpecificPrinter).click();
    };
    openUpdateDetailsTab(){
      cy.xpath(MyAccountElements.xpathTab_UpdateDetails).click();
    };
    openChangePasswordTab(){
      cy.xpath(MyAccountElements.xpathTab_ChangePassword).click();
    };
    openAddressBookTab(){
      cy.xpath(MyAccountElements.xpathTab_AddressBook).click();
    };
    goBackToPreviousPage(){
        cy.wait(1000);
        cy.go("back");
    };


}
export default CommonActions