import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe ("Checking information on Checkout pages", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    beforeEach(function () {
        cy.clearCookies();
        cy.viewport(1200, 800);
        perform.signInActions.openWebsiteAndLogin();
    });
    it('should check main info about the order and a buyer', function () {
        perform.homePageMenuActions.openDotMatrixMainPage();
        perform.plpInfoActions.clickBuyNowBtnPLP();
        //perform.consumablesActions.clickCheckoutBtnOnConsumablesPage();
        perform.cartActions.clickCheckoutBtnOnBasketPage();
        perform.checkoutActions.clickProductNameToCheckRedirectOnPdpPage();
        check.pdpAssertions.checkThatSKUIsDisplayed();
        perform.checkoutActions.goBackToCartSection();
        perform.cartActions.clickCheckoutBtnOnBasketPage();
        check.checkoutAsserts.checkSelectedCountry();
        check.signAsserts.checkOldEmailOnCheckoutPage();
        check.checkoutAsserts.checkQuantityOfProducts();
        perform.checkoutActions.saveAndGoToNextStep();
        check.checkoutAsserts.checkShippingName();
        check.checkoutAsserts.checkShippingTelephone();
        check.checkoutAsserts.checkShippingAddress();
        perform.checkoutActions.goNextToBilling();
        check.checkoutAsserts.checkShippingName();
        check.checkoutAsserts.checkShippingTelephone();
        check.checkoutAsserts.checkShippingAddress();
        perform.checkoutActions.saveAndGoToNextStep();
        check.checkoutAsserts.checkBillingInfoBlockIsVisible();
        perform.checkoutActions.performPayoutWithCreditCardMethod();
        perform.checkoutActions.setCardName();
        perform.checkoutActions.goNext();
        check.checkoutAsserts.checkPaymentMethodIsPresent();
        perform.checkoutActions.agreeTermsAndPlaceAnOrder();
        check.checkoutAsserts.checkDeliveryDetailsBlockOnThankYouPage();
        check.checkoutAsserts.checkShippingMethodBlockOnThankYouPage();
        check.checkoutAsserts.checkPaymentDetailsBlockOnThankYouPage();
        check.checkoutAsserts.checkPaymentMethodBlockOnThankYouPage();
        check.checkoutAsserts.checkOrderEntriesBlockIsVisible();
        check.checkoutAsserts.checkOrderTotalOverviewBlockIsVisible();
        check.checkoutAsserts.checkReturnToStoreBtnIsVisible();

        perform.myAccountActions.openMyAccountMenu();
        perform.orderHistoryActions.openOrderHistoryTab();
        perform.orderHistoryActions.openOrderNumberLink();
        perform.commonActions.goBackToPreviousPage();
        check.orderHistoryAsserts.checkOrderStatusInProgress();
    });
});
