import ConsumablesElements from "../../locators/08_extraAccessories/ConsumablesElements";
import CommonElements from "../../locators/CommonElements";
import CheckoutElements from "../../locators/06_checkout/CheckoutElements";

class ConsumablesActions {
    clickCheckoutBtnOnConsumablesPage(){
        cy.get(CheckoutElements.cssButton_ConsumablesCheckout).click();
        // cy.get(CommonElements.idModal_AcceptCookies).click();
    };

    selectMediaBusinessPaper(){
        cy.wait(3000)
        cy.scrollTo(0, 500)
        cy.get(CommonElements.cssBtn_BtnPrimary).eq(4).click();
    };
    clickBuyNowForMediaAndContinueShopping(){
        cy.get(CommonElements.cssBtn_BuyNowForFirstBlock).click();
        cy.xpath(CommonElements.xpathBtn_ContinueShopping).click();
    };
    selectConsumablesColourMultiPac(){
        cy.wait(2000)
        cy.scrollTo("center")
        cy.get(CommonElements.cssBtn_BtnPrimary).eq(81).click();
    };
    clickBuyNowForConsumablesAndContinueShopping(){
        cy.get(CommonElements.cssBtn_BuyNowForConsumables).click();
        cy.xpath(CommonElements.xpathBtn_ContinueShopping).click();
    };
    selectCoverPlusZeroFiveYears(){
        cy.wait(2000)
        cy.get(CommonElements.cssBtn_BtnPrimary).eq(99).click();
    };
    clickBuyNowForCoverPlusAndGoToCart(){
        cy.get(CommonElements.cssBtn_BuyNowForCoverPlus).click();
        cy.xpath(CommonElements.xpathBtn_GoToCheckout).click();
    };
    addAnotherConsumable(){
      cy.get("#updateCartForm3 > .product-card__qty-inc > .glyphicon").click();
    };

    clickAccessoriesTab(){
        cy.xpath(CommonElements.xpathTab_Accessories).click()
    };
    selectConsumablesEcoTank() {
        cy.wait(2000)
        cy.get(CommonElements.cssBtn_BtnPrimary).eq(6).click();
    };
    selectCoverPlusConsumable() {
        cy.wait(1000)
        cy.get(CommonElements.cssBtn_BtnPrimary).eq(13).click();
    };
    clickBuyNowBtnForConsumablesAndContinueShopping(){
       cy.get(CommonElements.cssBtn_BuyNowForConsumable).click()
        cy.xpath(CommonElements.xpathBtn_ContinueShopping).click();
    };
    minimizeMediaAccordion(){
        cy.xpath(ConsumablesElements.xpathToggle_Media).click();
    };
    minimizeConsumablesAccordion(){
      cy.get(ConsumablesElements.cssToggle_Consumables).click();
    };



}
export default ConsumablesActions