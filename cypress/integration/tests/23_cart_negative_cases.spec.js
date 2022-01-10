import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe("Find specific printer, add to cart and perform quantity checking", ()=> {
    let perform = new Actions();
    let check = new Asserts();

    it('should show errors when printers quantity change to incorrect one', function () {
        perform.signInActions.openWebsiteAndLogin();
        perform.productLinksForPDP.openDotMatrixPrinter();
        perform.buyNowPDPActions.clickBuyNowBtnOnPDPPage();
        perform.consumablesActions.clickCheckoutBtnOnConsumablesPage();
        check.cartAsserts.checkCartSection();
        perform.cartActions.clickToRaisePrintersQuantity();
        check.commonAsserts.checkGlobalAlertIsDisplayed();

        perform.cartActions.clickPrintersQuantityAndChangeIt();
        check.commonAsserts.checkGlobalAlertIsDisplayed();
        check.cartAsserts.checkPrintersQuantityIsNotWithMinus();
        perform.cartActions.deleteFirstItemFromCart();
        check.commonAsserts.checkGlobalAlertIsDisplayed();
    });
});

