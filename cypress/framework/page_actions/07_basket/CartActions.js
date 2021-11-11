import CartElements from "../../locators/07_basket/CartElements";
import CheckoutElements from "../../locators/06_checkout/CheckoutElements";
import checkoutsData from "../../../data/checkouts";

class CartActions {
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
        // cy.get(CommonElements.idModal_AcceptCookies).click();
    };
    deleteFirstItemFromCart() {
        cy.get(CartElements.cssBtn_DeleteFirstItem).click({ multiple: true });
    };
    putVoucherCodeAndApply(){
        cy.xpath(CartElements.xpathInput_VoucherCode).click().type(checkoutsData.discount.name);
        cy.xpath(CartElements.cssBtn_VoucherRedeem).click();
    };
    removeDiscountFromPrinter(){
        cy.xpath(CartElements.cssBtn_RemoveDiscount).click();
    };

}
export default CartActions