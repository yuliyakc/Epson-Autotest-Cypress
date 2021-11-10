import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe("Check different types of shopping methods", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    it('should check Shopping Method "Standard" when add Hardware to the Cart', function () {
        perform.signInActions.openWebsiteAndLogin();
        perform.searchActions.searchInkEcoPrinterPLP();
        perform.buyNowPLPActions.clickBuyNowBtnPLP();
        perform.consumablesActions.clickCheckoutBtnOnConsumablesPage();
        check.cartAsserts.checkCartSection();
        perform.cartActions.clickCheckoutBtnOnBasketPage();
        check.checkoutAsserts.checkSelectedCountry();
        perform.checkoutActions.fillRequiredInfo();
        perform.checkoutActions.searchAndSetAnAddress();
        perform.checkoutActions.saveAndGoToNextStep();
        perform.checkoutActions.selectAndCheckStandardMethod();

        perform.checkoutActions.goBackToCartSection();
        perform.cartActions.deleteFirstItemFromCart();
        check.cartAsserts.checkErrorMessage();
    });
    it('should check Shopping Method "Electronic" when add CoverPlus to the Cart', function () {
        perform.signInActions.openWebsiteAndLogin();
        perform.searchActions.searchCoverPlusProducts();
        perform.buyNowPLPActions.clickBuyNowBtnPLP();
        check.cartAsserts.checkCartSection();
        perform.cartActions.clickCheckoutBtnOnBasketPage();
        check.checkoutAsserts.checkSelectedCountry();
        perform.checkoutActions.fillRequiredInfo();
        perform.checkoutActions.searchAndSetAnAddress();
        perform.checkoutActions.saveAndGoToNextStep();
        perform.checkoutActions.selectAndCheckElectronicMethod();

        perform.checkoutActions.goBackToCartSection();
        perform.cartActions.deleteFirstItemFromCart();
        check.cartAsserts.checkErrorMessage();
    });
    it('should check Shipping Method "Standard" when add Option to the Cart', function () {
        perform.signInActions.openWebsiteAndLogin();
        perform.productLinksForPDP.openSpecificOptionPDPPage();
        perform.buyNowPDPActions.clickBuyNowBtnOnPDPPage();
        check.cartAsserts.checkCartSection();
        perform.cartActions.clickCheckoutBtnOnBasketPage();
        check.checkoutAsserts.checkSelectedCountry();
        perform.checkoutActions.fillRequiredInfo();
        perform.checkoutActions.searchAndSetAnAddress();
        perform.checkoutActions.saveAndGoToNextStep();
        perform.checkoutActions.selectAndCheckStandardMethod();

        perform.checkoutActions.goBackToCartSection();
        perform.cartActions.deleteFirstItemFromCart();
        check.cartAsserts.checkErrorMessage();
    });
    it('should check Shipping Method "Deutsche Post" when add EasyMail to purchase', function () {
        perform.signInActions.openWebsiteAndLogin();
        perform.productLinksForPDP.openEasyMailProduct();
        perform.buyNowPDPActions.clickBuyNowBtnOnPDPPage();
        check.cartAsserts.checkCartSection();
        perform.cartActions.clickCheckoutBtnOnBasketPage();
        check.checkoutAsserts.checkSelectedCountry();
        perform.checkoutActions.fillRequiredInfo();
        perform.checkoutActions.searchAndSetAnAddress();
        perform.checkoutActions.saveAndGoToNextStep();
        perform.checkoutActions.selectAndCheckEasyMailMethod();

        perform.checkoutActions.goNextToBilling();
        perform.checkoutActions.saveAndGoToNextStep();
        cy.selectCardToPay();
        perform.checkoutActions.setCardName();
        perform.checkoutActions.goNext();
        perform.checkoutActions.agreeTermsAndPlaceAnOrder();
        check.checkoutAsserts.checkThankYouPageAfterPurchasing();
        check.checkoutAsserts.checkOrderInfoBlockIsVisible();
    });
    it('should check Shipping Method "Standard" when add Multiple Consumables to purchase', function () {
        perform.signInActions.openWebsiteAndLogin();
        perform.productLinksForPDP.openEcoTankPrinterPDPPage();
        perform.consumablesActions.clickAccessoriesTab();
        perform.consumablesActions.selectConsumablesEcoTank();
        perform.consumablesActions.clickBuyNowBtnForConsumablesAndContinueShopping();
        perform.consumablesActions.selectCoverPlusConsumable();
        perform.consumablesActions.clickBuyNowForCoverPlusAndGoToCart();
        check.cartAsserts.checkCartSection();
        perform.cartActions.clickCheckoutBtnOnBasketPage();
        check.checkoutAsserts.checkSelectedCountry();
        perform.checkoutActions.fillRequiredInfo();
        perform.checkoutActions.searchAndSetAnAddress();
        perform.checkoutActions.saveAndGoToNextStep();
        perform.checkoutActions.selectAndCheckStandardMethod();

        perform.checkoutActions.goNextToBilling();
        perform.checkoutActions.saveAndGoToNextStep();
        cy.selectCardToPay();
        perform.checkoutActions.setCardName();
        perform.checkoutActions.goNext();
        perform.checkoutActions.agreeTermsAndPlaceAnOrder();
        check.checkoutAsserts.checkThankYouPageAfterPurchasing();
        check.checkoutAsserts.checkOrderInfoBlockIsVisible();
    });
    it('should check Shipping Method "Standard" when add Hardware with CoverPlus to purchase', function () {
        perform.signInActions.openWebsiteAndLogin();

        perform.productLinksForPDP.openEcoTankPrinterPDPPage();
        perform.buyNowPDPActions.clickBuyNowBtnOnPDPPage();
        perform.consumablesActions.selectCoverPlusConsumable();
        perform.consumablesActions.clickBuyNowForCoverPlusAndGoToCart();
        check.cartAsserts.checkCartSection();
        perform.cartActions.clickCheckoutBtnOnBasketPage();
        check.checkoutAsserts.checkSelectedCountry();
        perform.checkoutActions.fillRequiredInfo();
        perform.checkoutActions.searchAndSetAnAddress();
        perform.checkoutActions.saveAndGoToNextStep();
        perform.checkoutActions.selectAndCheckStandardMethod();

        perform.checkoutActions.goNextToBilling();
        perform.checkoutActions.saveAndGoToNextStep();
        cy.selectCardToPay();
        perform.checkoutActions.setCardName();
        perform.checkoutActions.goNext();
        perform.checkoutActions.agreeTermsAndPlaceAnOrder();
        check.checkoutAsserts.checkThankYouPageAfterPurchasing();
        check.checkoutAsserts.checkOrderInfoBlockIsVisible();
    });
});
