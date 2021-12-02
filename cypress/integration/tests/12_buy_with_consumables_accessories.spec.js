import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe("Add several consumables and  Accessories to cart ", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    it('should login, add printer, several accessories and purchase', function () {
        perform.signInActions.openWebsiteAndLogin();

        perform.productLinksForPDP.openEcoTankPrinter();
        perform.buyNowPDPActions.clickBuyNowBtnOnPDPPage();
        check.consumablesAsserts.checkUserIsOnConsumablesPage();
        perform.consumablesActions.selectMediaBusinessPaper();
        perform.consumablesActions.clickBuyNowForMediaAndContinueShopping();
        perform.consumablesActions.clickSecondMediaToggleToExpand();
        perform.consumablesActions.clickSecondMediaToggleToCollapse();
        perform.consumablesActions.selectConsumablesColourMultiPac();
        perform.consumablesActions.clickSecondConsumableToggleToExpand();
        perform.consumablesActions.clickSecondConsumableToggleToCollapse();
        perform.consumablesActions.clickBuyNowForConsumablesAndContinueShopping();
        perform.consumablesActions.selectCoverPlusZeroFiveYears();
        perform.consumablesActions.clickBuyNowForCoverPlusAndGoToCart();
        check.cartAsserts.checkCartPage();

        perform.consumablesActions.addAnotherConsumable();
        check.consumablesAsserts.checkConsumablesQuantityIsTwo();
        check.checkoutAsserts.checkAllItemsInCart();

        check.cartAsserts.checkCartSection();
        perform.cartActions.clickCheckoutBtnOnBasketPage();
        check.checkoutAsserts.checkItemsInsideCheckout();
        check.checkoutAsserts.checkSelectedCountry();
        perform.checkoutActions.fillRequiredInfo();
        perform.checkoutActions.searchAndSetAnAddress();
        perform.checkoutActions.saveAndGoToNextStep();
        perform.checkoutActions.goNextToBilling();
        perform.checkoutActions.saveAndGoToNextStep();
        // checkoutActions.agreeTermsAndPlaceAnOrder();
        perform.checkoutActions.performPayoutWithCreditCardMethod();
        perform.checkoutActions.setCardName();
        perform.checkoutActions.goNext();
        perform.checkoutActions.agreeTermsAndPlaceAnOrder();
        check.checkoutAsserts.checkThankYouPageAfterPurchasing();
        check.checkoutAsserts.checkDeliveryItemsOnThankYouPage();
    });
});