import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe("User should have an ability to purchase as Guest", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    beforeEach(function () {
        cy.clearCookies();
        cy.viewport(1200, 800);
    });
    it('should open website, add product to Cart and register with existed email', function () {
        perform.commonActions.openWebsite();
        perform.commonActions.acceptWebsiteCookies();

        perform.productLinksForPDP.openEcoTankPrintersPdp();
        perform.pdpActions.clickBuyNowBtnOnPDPPage();
        perform.consumablesActions.clickCheckoutBtnOnConsumablesPage();
        perform.cartActions.clickCheckoutBtnOnBasketPage();

        perform.signUpActions.enterExistedEmailFromData();
        perform.signUpActions.clickCheckoutAsGuestBtn();
        check.signAsserts.checkCorrectPageWasOpened();
        check.signAsserts.checkOldEmailOnCheckoutPage();
        check.checkoutAsserts.checkSelectedCountry();

        perform.checkoutActions.fillRequiredInfo();
        perform.checkoutActions.searchAndSetAnAddress();
        perform.checkoutActions.saveAndGoToNextStep();
        perform.checkoutActions.goNextToBilling();
        perform.checkoutActions.setBusinessCustomerOff();
        perform.checkoutActions.saveAndGoToNextStep();
        perform.checkoutActions.performPayoutWithCreditCardMethod();
        perform.checkoutActions.setCardName();
        perform.checkoutActions.goNext();
        perform.checkoutActions.agreeTermsAndPlaceAnOrder();
        check.checkoutAsserts.checkThankYouPageAfterPurchasing();

        perform.signUpActions.enterEmailAndPasswordForOldUser();
        perform.signUpActions.acceptTermsAsAGuest();
        perform.signUpActions.createNewAccount();
        check.signAsserts.checkAlertWithOldEmail();
    });
    // it('should open website, add product to Cart and register with new email', function () {
    //     perform.commonActions.openWebsite();
    //     perform.commonActions.acceptWebsiteCookies();
    //
    //     perform.searchActions.searchInkPrinterPLP();
    //     perform.buyNowPLPActions.clickBuyNowBtnPLP();
    //     perform.consumablesActions.clickCheckoutBtnOnConsumablesPage();
    //     perform.cartActions.clickCheckoutBtnOnBasketPage();
    //
    //     perform.signUpActions.enterNewEmailFromData();
    //     perform.signUpActions.clickCheckoutAsGuestBtn();
    //     check.signAsserts.checkCorrectPageWasOpened();
    //     check.signAsserts.checkNewEmailOnCheckoutPage();
    //     check.checkoutAsserts.checkSelectedCountry();
    //
    //     perform.checkoutActions.fillRequiredInfo();
    //     perform.checkoutActions.searchAndSetAnAddress();
    //     perform.checkoutActions.saveAndGoToNextStep();
    //     perform.checkoutActions.goNextToBilling();
    //     perform.checkoutActions.setBusinessCustomerOff();
    //     perform.checkoutActions.saveAndGoToNextStep();
    //     perform.checkoutActions.performPayoutWithCreditCardMethod();
    //     perform.checkoutActions.setCardName();
    //     perform.checkoutActions.goNext();
    //     perform.checkoutActions.agreeTermsAndPlaceAnOrder();
    //     check.checkoutAsserts.checkThankYouPageAfterPurchasing();
    //
    //     perform.signUpActions.enterEmailAndPasswordForAGuest();
    //     perform.signUpActions.acceptTermsAsAGuest();
    //     perform.signUpActions.createNewAccount();
    //     check.signAsserts.checkAlertWithGuestEmail();
    // });
});