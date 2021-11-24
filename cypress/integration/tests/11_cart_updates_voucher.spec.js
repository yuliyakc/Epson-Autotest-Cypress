import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe("Open Cart and make some manipulations", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    beforeEach(function () {
        cy.clearCookies();
        cy.viewport(1200, 800);
        perform.signInActions.openWebsiteAndLogin();
        perform.productLinksForPDP.openEcoTankPrinter();
        perform.buyNowPDPActions.clickBuyNowBtnOnPDPPage();
        perform.consumablesActions.clickCheckoutBtnOnConsumablesPage();
        check.cartAsserts.checkUserOpenCartSection()
        check.cartAsserts.checkPrintersPriceForOneItem();
    });
    it('should login, add printer to Cart and Update it - change and delete', function () {
        perform.cartActions.clickToRaisePrintersQuantity();
        check.cartAsserts.checkQuantityIsTwo();
        check.cartAsserts.checkPrintersPriceForTwoItems();

        perform.cartActions.deleteFirstItemFromCart();
        check.commonAsserts.checkGlobalAlertIsDisplayed();
        check.cartAsserts.checkThatCartIsEmpty();
    });
    it('should login, add printer to Cart and use a voucher to change the price', function () {
        perform.cartActions.putVoucherCodeAndApply();
        check.cartAsserts.checkThatVoucherIsApplied();
        perform.cartActions.removeDiscountFromPrinter();
        check.cartAsserts.checkPrintersPriceForOneItem();

        perform.cartActions.deleteFirstItemFromCart();
        check.commonAsserts.checkGlobalAlertIsDisplayed();
        check.cartAsserts.checkThatCartIsEmpty();
    });
});