import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";
import CommonAsserts from "../../framework/page_actions/CommonAsserts";

describe("Login and check info on PLP page", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    it('should login and check inner data for plp printer', function () {
        perform.signInActions.openWebsiteAndLogin();

        perform.searchActions.searchMicroBusinessPrinterBySku();
        check.commonAsserts.checkPrintersImageIsVisible();
        check.assertions.checkProductPricingDiscountIsVisible();
        check.commonAsserts.checkProductPricingActualIsVisible();
        check.commonAsserts.checkProductPricingTaxIsVisible();
        check.commonAsserts.checkStatusInStockIfBuyNowBtnIsVisible();
    });
});