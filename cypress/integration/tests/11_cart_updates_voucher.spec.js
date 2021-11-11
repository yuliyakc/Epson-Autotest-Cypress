// import Actions from "../../framework/Actions";
// import Asserts from "../../framework/Asserts";
//
// describe("Open Cart and make some manipulations", ()=> {
//     let perform = new Actions();
//     let check = new Asserts();
//     beforeEach(function () {
//         cy.clearCookies();
//         cy.viewport(1200, 800);
//         perform.signInActions.openWebsiteAndLogin();
//         perform.productLinksForPDP.openEcoTankPrinter();
//     });
//     it('should login, add printer to Cart and Update it - change and delete', function () {
//         perform.buyNowPDPActions.clickBuyNowBtnOnPDPPage();
//         perform.consumablesActions.clickCheckoutBtnOnConsumablesPage();
//         check.cartAsserts.checkUserOpenCartSection();
//         check.cartAsserts.checkPrintersQuantityIsOne();
//         check.cartAsserts.checkPrintersPriceForOneItem();
//
//         perform.cartActions.clickToRaisePrintersQuantity();
//         check.cartAsserts.checkQuantityIsTwo();
//         check.cartAsserts.checkPrintersPriceForTwoItems();
//
//         perform.cartActions.deleteFirstItemFromCart();
//         check.cartAsserts.checkErrorMessage();
//         check.cartAsserts.checkThatCartIsEmpty();
//     });
//     it('should login, add printer to Cart and use a voucher to change the price', function () {
//         perform.buyNowPDPActions.clickBuyNowBtnOnPDPPage();
//         perform.consumablesActions.clickCheckoutBtnOnConsumablesPage();
//         check.cartAsserts.checkUserOpenCartSection()
//         check.cartAsserts.checkPrintersPriceForOneItem();
//
//         perform.cartActions.putVoucherCodeAndApply();
//         check.cartAsserts.checkThatPriseHasChanged();
//         perform.cartActions.removeDiscountFromPrinter();
//         check.cartAsserts.checkPrintersPriceForOneItem();
//
//         perform.cartActions.deleteFirstItemFromCart();
//         check.cartAsserts.checkErrorMessage();
//         check.cartAsserts.checkThatCartIsEmpty();
//     });
// });