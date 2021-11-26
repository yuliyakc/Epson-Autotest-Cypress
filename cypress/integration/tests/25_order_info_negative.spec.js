import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe("Open Cart and perform negative cases for Checkout", ()=> {
    let perform = new Actions();
    let check = new Asserts();

    it('should perform negative tests for all Checkout pages', function () {
        cy.clearCookies();
        cy.viewport(1200, 800);
        perform.signInActions.openWebsiteAndLogin();
        perform.productLinksForPDP.openEcoTankPrinter();
        perform.buyNowPDPActions.clickBuyNowBtnOnPDPPage();
        perform.consumablesActions.clickCheckoutBtnOnConsumablesPage();
        check.cartAsserts.checkUserOpenCartSection()
        check.cartAsserts.checkPrintersPriceForOneItem();
        perform.cartActions.clickCheckoutBtnOnBasketPage();

        // Shipping Address tests performing
        perform.checkoutActions.setShippingInfoEmpty();
        check.commonAsserts.checkGlobalAlertIsDisplayed();

        perform.checkoutActions.fillAllInfoOnShipInfoExceptFirstName();
        perform.checkoutActions.saveAndGoToNextStep();
        check.checkoutAsserts.checkErrorIfFirstNameIsEmpty();

        perform.checkoutActions.fillAllInfoOnShipInfoExceptLastName();
        perform.checkoutActions.saveAndGoToNextStep();
        check.checkoutAsserts.checkErrorIfLastNameIsEmpty();

        perform.checkoutActions.fillAllInfoOnShipInfoExceptTelephone();
        perform.checkoutActions.saveAndGoToNextStep();
        check.checkoutAsserts.checkErrorIfTelephoneIsEmpty();

        perform.checkoutActions.fillAllInfoOnShipInfoExceptAddress();
        perform.checkoutActions.saveAndGoToNextStep();
        check.checkoutAsserts.checkErrorIfAddressIsEmpty();

        perform.checkoutActions.fillAllInfoOnShipInfoExceptTown();
        perform.checkoutActions.saveAndGoToNextStep();
        check.checkoutAsserts.checkErrorIfTownIsEmpty();

        perform.checkoutActions.fillAllInfoOnShipInfoExceptPostcode();
        perform.checkoutActions.saveAndGoToNextStep();
        check.checkoutAsserts.checkErrorIfPostcodeIsEmpty();
        perform.checkoutActions.enterPostCode();

        perform.checkoutActions.saveAndGoToNextStep();
        perform.checkoutActions.goNextToBilling();

        // Billing details tests performing
        perform.checkoutActions.setBillingInfoEmpty();
        check.commonAsserts.checkGlobalAlertIsDisplayed();

        perform.checkoutActions.fillAllBillingIInfoExceptFirstName();
        perform.checkoutActions.saveAndGoToNextStep();
        check.checkoutAsserts.checkErrorIfFirstNameIsEmpty();

        perform.checkoutActions.fillAllBillingIInfoExceptLastName();
        perform.checkoutActions.saveAndGoToNextStep();
        check.checkoutAsserts.checkErrorIfLastNameIsEmpty();

        perform.checkoutActions.fillAllBillingIInfoExceptCompanyName();
        perform.checkoutActions.saveAndGoToNextStep();
        check.checkoutAsserts.checkErrorIfCompanyNameIsEmpty();

        perform.checkoutActions.fillAllBillingIInfoExceptAddress();
        perform.checkoutActions.saveAndGoToNextStep();
        check.checkoutAsserts.checkErrorIfAddressIsEmpty();

        perform.checkoutActions.fillAllBillingIInfoExceptTown();
        perform.checkoutActions.saveAndGoToNextStep();
        check.checkoutAsserts.checkErrorIfTownIsEmpty();

        perform.checkoutActions.fillAllBillingIInfoExceptPostcode();
        perform.checkoutActions.saveAndGoToNextStep();
        check.checkoutAsserts.checkErrorIfPostcodeIsEmpty();
        perform.checkoutActions.enterPostCode();

        perform.checkoutActions.saveAndGoToNextStep();


        /// Payment method tests performing
        perform.checkoutActions.openPaymentPage();
        perform.checkoutActions.SelectPaymentMethod();
        perform.checkoutActions.goNext();
        check.checkoutAsserts.checkAlertsForEmptyCreditCard();

        perform.checkoutActions.setAllDataExceptCardNumber();
        perform.checkoutActions.setCardName();
        perform.checkoutActions.goNext();
        check.checkoutAsserts.checkOneAlertForEmptyCreditCard();

        perform.checkoutActions.setAllDataExceptExpDate();
        perform.checkoutActions.setCardName();
        perform.checkoutActions.goNext();
        check.checkoutAsserts.checkOneAlertForEmptyCreditCard();

        perform.checkoutActions.setAllDataExceptCvvCode();
        perform.checkoutActions.setCardName();
        perform.checkoutActions.goNext();
        check.checkoutAsserts.checkOneAlertForEmptyCreditCard();

        perform.checkoutActions.performPayoutWithCreditCardMethod();
        perform.checkoutActions.deleteCardName();
        perform.checkoutActions.goNext();
        check.checkoutAsserts.checkOneAlertForEmptyCreditCard();

        perform.checkoutActions.performPayoutWithCreditCardMethod();
        perform.checkoutActions.setCardName();
        perform.checkoutActions.goNext();

        perform.checkoutActions.placeAnOrder();
        check.commonAsserts.checkGlobalAlertIsDisplayed();
        perform.checkoutActions.agreeWithMarketingEmails();
        perform.checkoutActions.placeAnOrder();
        check.commonAsserts.checkGlobalAlertIsDisplayed();
        perform.checkoutActions.agreeTermsAndPlaceAnOrder();
        check.checkoutAsserts.checkThankYouPageAfterPurchasing();
    });
});
