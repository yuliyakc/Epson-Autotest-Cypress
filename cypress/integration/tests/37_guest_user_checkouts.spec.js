import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe("Guest user performs purchase using discounts", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    beforeEach(function () {
        cy.clearCookies();
        cy.viewport(1200, 800);
        perform.commonActions.openWebsite();
        perform.commonActions.acceptWebsiteCookies();
    });
    it('should open website, find product with promotion, add extra voucher and apply', function () {
        perform.productLinksForPDP.openWorkForcePrinterPDP();
        perform.buyNowPDPActions.clickBuyNowBtnOnPDPPage();
        perform.consumablesActions.clickCheckoutBtnOnConsumablesPage();
        check.cartAsserts.checkCartSection();
        perform.cartActions.putFixed30VoucherCodeAndApply();
        check.commonAsserts.checkZeroPriceInCartSection();
    });
    it('should open website, find Promotion printer and add it to Cart', function () {
        perform.productLinksForPDP.openWorkForcePrinterPDP();
        perform.buyNowPDPActions.clickBuyNowBtnOnPDPPage();
        perform.consumablesActions.clickCheckoutBtnOnConsumablesPage();
        check.cartAsserts.checkCartSection();
        check.commonAsserts.checkPriceWithDiscount();
    });
    it('should open website, add printer to cart and apply Amount based voucher', function () {
        perform.productLinksForPDP.openEcoTankPrinter();
        perform.buyNowPDPActions.clickBuyNowBtnOnPDPPage();
        //perform.consumablesActions.clickCheckoutBtnOnConsumablesPage();
        check.cartAsserts.checkUserOpenCartSection();
        perform.cartActions.putFixed100VoucherCodeAndApply();
        check.cartAsserts.checkFixedVoucherCode100IsApply();
        check.cartAsserts.checkPriceWithVoucherCode100();
    });
    it('should open website, add printer to cart and apply Percentage based voucher', function () {
        perform.productLinksForPDP.openEcoTankPrinter();
        perform.buyNowPDPActions.clickBuyNowBtnOnPDPPage();
        //perform.consumablesActions.clickCheckoutBtnOnConsumablesPage();
        check.cartAsserts.checkUserOpenCartSection();
        perform.cartActions.putPercentageVoucherCodeAndApply();
        check.cartAsserts.checkPercentageVoucherCodeIsApply();
        check.cartAsserts.checkPriceWithPercentageVoucherCode();
    });
});