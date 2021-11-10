import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";
import CommonActions from "../../framework/page_actions/CommonActions";


describe("Open Cart and make some manipulations", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    it('should login, add printer to Cart and Update it - change and delete', function () {
        perform.signInActions.openWebsiteAndLogin();

        perform.commonActions.openWebsiteOnASpecificPrinter();
        perform.buyNowPDPActions.clickBuyNowBtnOnPDPPage();
        perform.consumablesActions.clickCheckoutBtnOnConsumablesPage();
        check.cartAsserts.checkUserOpenCartSection();
        check.cartAsserts.checkPrintersQuantityIsOne();
        check.cartAsserts.checkPrintersPriceForOneItem();

        perform.cartActions.clickToRaisePrintersQuantity();
        check.cartAsserts.checkQuantityIsTwo();
        check.cartAsserts.checkPrintersPriceForTwoItems();

        perform.cartActions.deleteFirstItemFromCart();
        check.cartAsserts.checkErrorMessage();
        check.cartAsserts.checkThatCartIsEmpty();
    });
    it('should login, add printer to Cart and use a voucher to change the price', function () {
        perform.signInActions.openWebsiteAndLogin();

        perform.commonActions.openWebsiteOnASpecificPrinter();
        perform.buyNowPDPActions.clickBuyNowBtnOnPDPPage();
        perform.consumablesActions.clickCheckoutBtnOnConsumablesPage();
        check.cartAsserts.checkUserOpenCartSection()
        check.cartAsserts.checkPrintersPriceForOneItem();

        perform.cartActions.putVoucherCodeAndApply();
        check.cartAsserts.checkThatPriseHasChanged();
        perform.cartActions.removeDiscountFromPrinter();
        check.cartAsserts.checkPrintersPriceForOneItem();

        perform.cartActions.deleteFirstItemFromCart();
        check.cartAsserts.checkErrorMessage();
        check.cartAsserts.checkThatCartIsEmpty();
    });
});