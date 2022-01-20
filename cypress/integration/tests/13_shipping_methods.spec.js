import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe("Check different types of Shipping Methods", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    beforeEach(function () {
        cy.clearCookies();
        cy.viewport(1200, 800);
        perform.signInActions.openWebsiteAndLogin();
    });
    it('should check Shipping Method "Standard" when add Hardware to the Cart', function () {
        perform.productLinksForPDP.openEcoTankPrinterPDPPage();
        perform.buyNowPDPActions.clickBuyNowBtnOnPDPPage();
        perform.consumablesActions.clickCheckoutBtnOnConsumablesPage();
        check.cartAsserts.checkCartSection();
        perform.cartActions.clickCheckoutBtnOnBasketPage();
        perform.checkoutActions.fillRequiredInfo();
        perform.checkoutActions.searchAndSetAnAddress();
        perform.checkoutActions.saveAndGoToNextStep();
        perform.checkoutActions.selectAndCheckStandardMethod();

        perform.checkoutActions.goBackToCartSection();
        perform.cartActions.deleteFirstItemFromCart();
        check.commonAsserts.checkGlobalAlertIsDisplayed();
    });
    it('should check Shipping Method "Electronic" when add CoverPlus to the Cart', function () {
        perform.searchActions.searchCoverPlusProducts();
        perform.plpInfoActions.clickBuyNowBtnPLP();
        check.cartAsserts.checkCartSection();
        perform.cartActions.clickCheckoutBtnOnBasketPage();
        perform.checkoutActions.fillRequiredInfo();
        perform.checkoutActions.searchAndSetAnAddress();
        perform.checkoutActions.saveAndGoToNextStep();
        perform.checkoutActions.selectAndCheckElectronicMethod();

        perform.checkoutActions.goBackToCartSection();
        perform.cartActions.deleteFirstItemFromCart();
        check.commonAsserts.checkGlobalAlertIsDisplayed();
    });
    it('should check Shipping Method "Standard" when add Option to the Cart', function () {
        perform.productLinksForPDP.openSpecificOptionPDPPage();
        perform.buyNowPDPActions.clickBuyNowBtnOnPDPPage();
        check.cartAsserts.checkCartSection();
        perform.cartActions.clickCheckoutBtnOnBasketPage();
        perform.checkoutActions.fillRequiredInfo();
        perform.checkoutActions.searchAndSetAnAddress();
        perform.checkoutActions.saveAndGoToNextStep();
        perform.checkoutActions.selectAndCheckStandardMethod();

        perform.checkoutActions.goBackToCartSection();
        perform.cartActions.deleteFirstItemFromCart();
        check.commonAsserts.checkGlobalAlertIsDisplayed();
    });
    it('should check Shipping Method "Standard" when add Multiple Consumables to purchase', function () {
        perform.productLinksForPDP.openEcoTankPrinterPDPPage();
        perform.buyNowPDPActions.clickAccessoriesTab();
        perform.consumablesActions.selectCoverPlusAccessory();
        perform.consumablesActions.clickBuyNowBtnForCoverPlusAndContinueShopping();
        perform.consumablesActions.selectConsumablesEcoTank();
        perform.consumablesActions.clickBuyNowForSecondBlockOfAccessoriesAndGoToCart();
        check.cartAsserts.checkCartSection();
        perform.cartActions.clickCheckoutBtnOnBasketPage();
        perform.checkoutActions.fillRequiredInfo();
        perform.checkoutActions.searchAndSetAnAddress();
        perform.checkoutActions.saveAndGoToNextStep();
        perform.checkoutActions.selectAndCheckStandardMethod();

        perform.checkoutActions.goBackToCartSection();
        perform.cartActions.deleteTwoItemsFromCart();
        check.commonAsserts.checkGlobalAlertIsDisplayed();

        // perform.checkoutActions.goNextToBilling();
        // perform.checkoutActions.saveAndGoToNextStep();
        // perform.checkoutActions.performPayoutWithCreditCardMethod();
        // perform.checkoutActions.setCardName();
        // perform.checkoutActions.goNext();
        // perform.checkoutActions.agreeTermsAndPlaceAnOrder();
        // check.checkoutAsserts.checkThankYouPageAfterPurchasing();
    });
    it('should check Shipping Method "Standard" when add Hardware with CoverPlus to purchase', function () {
        perform.productLinksForPDP.openEcoTankPrinterPDPPage();
        perform.buyNowPDPActions.clickBuyNowBtnOnPDPPage();
        perform.consumablesActions.selectCoverPlusAccessory();
        perform.consumablesActions.clickBuyNowForCoverPlusAndGoToCart();
        check.cartAsserts.checkCartSection();
        perform.cartActions.clickCheckoutBtnOnBasketPage();
        perform.checkoutActions.fillRequiredInfo();
        perform.checkoutActions.searchAndSetAnAddress();
        perform.checkoutActions.saveAndGoToNextStep();
        perform.checkoutActions.selectAndCheckStandardMethod();

        perform.checkoutActions.goBackToCartSection();
        perform.cartActions.deleteTwoItemsFromCart();
        check.commonAsserts.checkGlobalAlertIsDisplayed();

        // perform.checkoutActions.goNextToBilling();
        // perform.checkoutActions.saveAndGoToNextStep();
        // perform.checkoutActions.performPayoutWithCreditCardMethod();
        // perform.checkoutActions.setCardName();
        // perform.checkoutActions.goNext();
        // perform.checkoutActions.agreeTermsAndPlaceAnOrder();
        // check.checkoutAsserts.checkThankYouPageAfterPurchasing();

    });
    it('should check Shipping Method "Deutsche Post" when add EasyMail to purchase', function () {
        perform.productLinksForPDP.openEasyMailProduct();
        perform.buyNowPDPActions.clickBuyNowBtnOnPDPPage();
        check.cartAsserts.checkCartSection();
        perform.cartActions.clickCheckoutBtnOnBasketPage();
        perform.checkoutActions.fillRequiredInfo();
        perform.checkoutActions.searchAndSetAnAddress();
        perform.checkoutActions.saveAndGoToNextStep();
        perform.checkoutActions.selectAndCheckEasyMailMethod();

        perform.checkoutActions.goBackToCartSection();
        perform.cartActions.clickProductTitleToOpenPdpPage()
        check.pdpAssertions.checkThatSKUIsDisplayed();

        perform.checkoutActions.goBackToCartSection();
        perform.cartActions.deleteFirstItemFromCart();
        check.commonAsserts.checkGlobalAlertIsDisplayed();

        // perform.checkoutActions.goNextToBilling();
        // perform.checkoutActions.saveAndGoToNextStep();
        // perform.checkoutActions.performPayoutWithCreditCardMethod();
        // perform.checkoutActions.setCardName();
        // perform.checkoutActions.goNext();
        // perform.checkoutActions.agreeTermsAndPlaceAnOrder();
        // check.checkoutAsserts.checkThankYouPageAfterPurchasing();
    });
});
