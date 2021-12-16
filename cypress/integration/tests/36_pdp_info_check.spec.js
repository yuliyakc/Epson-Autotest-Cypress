import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe("Login and check all info on PDP page", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    it('should login, find printer, open PDP and check inner data', function () {
        perform.signInActions.openWebsiteAndLogin();

        perform.productLinksForPDP.openWorkForcePrinterPDP();
        check.commonAsserts.checkPrintersImageIsVisible();
        check.commonAsserts.checkProductPricingActualIsVisible();
        check.commonAsserts.checkProductPricingTaxIsVisible();
        check.commonAsserts.checkStatusInStockIfBuyNowBtnIsVisible();

        perform.pdpActions.clickSupportButtonInProductSection();
        perform.pdpActions.clickSupportBtnAtSupportTab();
        check.supportAsserts.checkSearchSupportPageIsOpened();

    });
});