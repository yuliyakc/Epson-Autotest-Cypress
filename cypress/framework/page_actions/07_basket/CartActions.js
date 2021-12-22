import CartElements from "../../locators/07_basket/CartElements";
import checkoutsData from "../../../data/checkouts";
import HomePageMenuElements from "../../locators/03_homepageMenu/HomePageMenuElements";

class CartActions {
    openCartPage(){
      cy.visitWebsite("/cart");
    };
    clickToRaisePrintersQuantity(){
      cy.get(CartElements.cssBtn_RaisePrintersQuantity).click();
    };
    deleteTwoItemsFromCart() {
        cy.get(CartElements.cssBtn_DeleteSecondItem).click()
        cy.get(CartElements.cssBtn_DeleteFirstItem).click();
    };
    deleteThreeItemsFromCart() {
        cy.get(CartElements.cssBtn_DeleteThirdItem).click()
        cy.get(CartElements.cssBtn_DeleteSecondItem).click()
        cy.get(CartElements.cssBtn_DeleteFirstItem).click();
    };
    clickCheckoutBtnOnBasketPage(){
        cy.wait(1000)
        cy.get(CartElements.cssButton_BasketCheckout).click()
    };
    deleteFirstItemFromCart() {
        cy.get(CartElements.cssBtn_DeleteFirstItem).click({ multiple: true });
    };
    putFixed30VoucherCodeAndApply(){
        cy.xpath(CartElements.xpathInput_VoucherCode).click().type(checkoutsData.discount.fixedCode30);
        cy.get(CartElements.cssBtn_VoucherRedeem).click();
    };
    putFixed100VoucherCodeAndApply(){
        cy.xpath(CartElements.xpathInput_VoucherCode).click().type(checkoutsData.discount.fixed100);
        cy.get(CartElements.cssBtn_VoucherRedeem).click();
    };
    removeDiscountFromPrinter(){
        cy.get(CartElements.cssBtn_RemoveDiscount).click();
    };
    clickPrintersQuantityAndChangeIt(){
        cy.xpath(CartElements.xpathInput_ItemsQuantity).click().clear().type(checkoutsData.quantity.num);
    };
    clickOnCartMiniBtn(){
        cy.wait(1000);
        cy.get(HomePageMenuElements.cssButton_MiniCart).click({force:true});
    };
    clickCheckoutBtnOnPopup(){
        cy.get(CartElements.cssBtn_Checkout).click();
    };
    clickProductTitleToOpenPdpPage(){
      cy.get(CartElements.cssLink_CardTitle).click();
    };
    putPercentageVoucherCodeAndApply(){
        cy.xpath(CartElements.xpathInput_VoucherCode).click().type(checkoutsData.discount.percentageCode);
        cy.get(CartElements.cssBtn_VoucherRedeem).click();
    };

}
export default CartActions