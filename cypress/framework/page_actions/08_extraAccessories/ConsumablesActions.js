import CommonElements from "../../locators/CommonElements";
import CheckoutElements from "../../locators/06_checkout/CheckoutElements";

class ConsumablesActions {
    clickCheckoutBtnOnConsumablesPage(){
        cy.get(CheckoutElements.cssButton_ConsumablesCheckout).click();
    };
    selectMediaBusinessPaper(){
        cy.wait(3000)
        cy.scrollTo(0, 500)
        cy.get(CommonElements.cssBtn_BtnPrimary).eq(25).click();
    };
    clickBuyNowForMediaAndContinueShopping(){
        cy.get(CommonElements.cssBtn_BuyNowForSecondAccessory).click();
        cy.get(CommonElements.cssBtn_ContinueShopping).click();
    };
    selectConsumablesColourMultiPac(){
        cy.wait(2000)
        cy.scrollTo("center")
        cy.get(CommonElements.cssBtn_BtnPrimary).eq(95).click();
    };
    clickBuyNowForConsumablesAndContinueShopping(){
        cy.get(CommonElements.cssBtn_BuyNowForCoverPlus).click();
        cy.get(CommonElements.cssBtn_ContinueShopping).click();
    };
    selectCoverPlusZeroFiveYears(){
        cy.wait(2000)
        cy.get(CommonElements.cssBtn_BtnPrimary).eq(4).click();
    };
    clickBuyNowForSecondBlockOfAccessoriesAndGoToCart(){
        cy.get(CommonElements.cssBtn_BuyNowForSecondAccessory).click();
        cy.get(CommonElements.cssBtn_GoToCheckout).click();
    };
    clickBuyNowForCoverPlusAndGoToCart(){
        cy.get(CommonElements.cssBtn_BuyNowForCoverPlus).click();
        cy.get(CommonElements.cssBtn_GoToCheckout).click();
    };
    clickBuyNowForThirdBlockOfAccessoriesAndGoToCart(){
        cy.get(CommonElements.cssBtn_BuyNowForThirdAccessory).click();
        cy.get(CommonElements.cssBtn_GoToCheckout).click();
    };
    addAnotherConsumable(){
      cy.get("#updateCartForm3 > .product-card__qty-inc > .glyphicon").click();
    };
    selectConsumablesEcoTank() {
        cy.wait(2000)
        cy.get(CommonElements.cssBtn_BtnPrimary).eq(15).click();
    };
    selectCoverPlusAccessory() {
        cy.wait(1000)
        cy.get(CommonElements.cssBtn_BtnPrimary).eq(6).click();
    };
    clickBuyNowBtnForCoverPlusAndContinueShopping(){
       cy.get(CommonElements.cssBtn_BuyNowForCoverPlus).click()
        cy.get(CommonElements.cssBtn_ContinueShopping).click();
    };
}
export default ConsumablesActions