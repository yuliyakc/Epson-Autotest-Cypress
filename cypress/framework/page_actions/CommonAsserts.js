import CheckoutElements from "../locators/06_checkout/CheckoutElements";
import checkoutsData from "../../data/checkouts";
import CommonElements from "../locators/CommonElements";
import productsData from "../../data/products";
import PLPInfoElements from "../locators/04_productListingPage/PLPInfoElements";
import BuyNowPLPElements from "../locators/04_productListingPage/BuyNowPLPElements";

class CommonAsserts {
    checkPrinterHasDiscountPrice(){
        cy.get("div").should("have.class", "product-pricing__price--discount")
    };
    checkPriceWithDiscount(){
        cy.get(CheckoutElements.cssItem_TotalDiscountCart).should('contain', checkoutsData.discount.price)
    };
    checkZeroPriceInCartSection(){
        cy.get(CheckoutElements.cssItem_TotalDiscountCart).should("contain", checkoutsData.discount.zeroPrice)
    };
    checkTotalOnPaymentSelectPage(){
      cy.get(".checkout-summary__product").should('contain', checkoutsData.discount.price)
    };
    checkGlobalAlertIsDisplayed(){
      cy.get(CommonElements.cssGlobal_Message).should("be.visible");
    };
    checkPrintersImageIsVisible(){
        cy.get(PLPInfoElements.cssBlock_Image).find('img').should('have.attr', 'src');
    };
    checkProductPricingActualIsVisible(){
        cy.get(CommonElements.cssBlock_Price).find(CommonElements.cssBlock_RealPrice).should('be.visible');
    };
    checkProductPricingTaxIsVisible(){
        cy.get(CommonElements.cssBlock_Price).find(CommonElements.cssBlock_TaxPrice).should('be.visible');
    };
    checkStatusInStockIfBuyNowBtnIsVisible(){

        cy.get(BuyNowPLPElements.idBtn_BuyNow).then($button =>
        {
            if ($button.is(':visible'))
            {
                cy.get(CommonElements.cssBlock_InStock).find(CommonElements.cssBlock_InStockStatus).should("be.visible");
            }
        });
    };




}
export default CommonAsserts