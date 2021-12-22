import FiltersElements from "../locators/04_productListingPage/FiltersElements";
import CookiesDialogElements from "../locators/17_cookiesDialog/CookiesDialogElements";
import HomePageMenuElements from "../locators/03_homepageMenu/HomePageMenuElements";

class CommonActions {
    clickCreateNewAccountBtn(){
      cy.get(HomePageMenuElements.cssButton_CreateAccount).click();
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