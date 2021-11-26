import ConsumablesElements from "../../locators/08_extraAccessories/ConsumablesElements";
import CommonElements from "../../locators/CommonElements";
import CheckoutElements from "../../locators/06_checkout/CheckoutElements";
import PdpElements from "../../locators/05_productDisplayPage/pdpElements";

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
        cy.get(CommonElements.cssBtn_ContinueShopping).click();
    };
    selectConsumablesColourMultiPac(){
        cy.wait(2000)
        cy.scrollTo("center")
        cy.get(CommonElements.cssBtn_BtnPrimary).eq(81).click();
    };
    clickBuyNowForConsumablesAndContinueShopping(){
        cy.get(CommonElements.cssBtn_BuyNowForConsumables).click();
        cy.get(CommonElements.cssBtn_ContinueShopping).click();
    };
    selectCoverPlusZeroFiveYears(){
        cy.wait(2000)
        cy.get(CommonElements.cssBtn_BtnPrimary).eq(96).click();
    };
    clickBuyNowForCoverPlusAndGoToCart(){
        cy.get(CommonElements.cssBtn_BuyNowForCoverPlus).click();
        cy.get(CommonElements.cssBtn_GoToCheckout).click();
    };
    addAnotherConsumable(){
      cy.get("#updateCartForm3 > .product-card__qty-inc > .glyphicon").click();
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
        cy.get(CommonElements.cssBtn_ContinueShopping).click();
    };
    minimizeMediaAccordion(){
        cy.get(ConsumablesElements.cssToggle_Media).click();
    };
    minimizeConsumablesAccordion(){
      cy.get(ConsumablesElements.cssToggle_Consumables).click();
    };



}
export default ConsumablesActions