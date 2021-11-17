import FiltersElements from "../locators/04_productListingPage/FiltersElements";
import MyAccountElements from "../locators/11_myAccount/MyAccountElements";
import CommonElements from "../locators/CommonElements";
import ComparePrintersElements from "../locators/15_comparePrinters/ComparePrintersElements";

class CommonActions {
    confirmAllCookies(){
      cy.get(CommonElements.idModal_AcceptCookies).click();
    };
    clickCreateNewAccountBtn(){
      cy.get(CommonElements.cssButton_CreateAccount).click();
    };
    openWebsite(){
        cy.visitWebsite("/");
    };
    resetFilters(){
      cy.get(FiltersElements.cssButton_ResetFilter).eq(0).click();
    };
    openProductListingPage(){
        cy.get(FiltersElements.cssButton_PrintersList).eq(2).click();
    };
    goBackToPreviousPage(){
        cy.wait(1000);
        cy.go("back");
        cy.wait(1000);
    };
    acceptWebsiteCookies(){
        cy.get(CommonElements.idModal_AcceptCookies).click();
    };



}
export default CommonActions