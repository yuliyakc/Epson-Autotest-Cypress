import FiltersElements from "../locators/04_productListingPage/FiltersElements";
import MyAccountElements from "../locators/11_myAccount/MyAccountElements";
import CommonElements from "../locators/CommonElements";
import ComparePrintersElements from "../locators/15_comparePrinters/ComparePrintersElements";
import HeaderElements from "../locators/00_header/HeaderElements";
import CookiesDialogElements from "../locators/17_cookiesDialog/CookiesDialogElements";
import PLPInfoElements from "../locators/04_productListingPage/PLPInfoElements";
import BuyNowPLPElements from "../locators/04_productListingPage/BuyNowPLPElements";

class CommonActions {
    clickCreateNewAccountBtn(){
      cy.get(HeaderElements.cssButton_CreateAccount).click();
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
        cy.get(CookiesDialogElements.idModal_AcceptCookies).click();
    };




}
export default CommonActions