import CheckoutElements from "../locators/06_checkout/CheckoutElements";
import checkoutsData from "../../data/checkouts";
import CommonElements from "../locators/CommonElements";

class CommonAsserts {
    checkPrinterHasDiscountPrice(){
        cy.get("div").should("have.class", "product-pricing__price--discount")
    };
    checkPriceWithDiscount(){
        cy.get(CheckoutElements.cssItem_TotalCart).should('contain', checkoutsData.discount.price)
    };
    checkTotalOnPaymentSelectPage(){
      cy.get(".checkout-summary__product").should('contain', checkoutsData.discount.price)
    };
    checkChangePassTabIsOpened(){
        cy.url().should("include", "my-account/update-password");
        cy.get("div").should("have.class", "update-password");
    };
    checkGlobalAlertIsDisplayed(){
      cy.get(CommonElements.cssGlobal_Message).should("be.visible");

    };



}
export default CommonAsserts