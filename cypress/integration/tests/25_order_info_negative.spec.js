import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe("Open Cart and perform negative cases for Checkout", ()=> {
    let perform = new Actions();
    let check = new Asserts();

    it('should clear the data and try to go to step 2', function () {
        cy.clearCookies();
        cy.viewport(1200, 800);
        perform.signInActions.openWebsiteAndLogin();
        perform.productLinksForPDP.openEcoTankPrinter();
        perform.buyNowPDPActions.clickBuyNowBtnOnPDPPage();
        perform.consumablesActions.clickCheckoutBtnOnConsumablesPage();
        check.cartAsserts.checkUserOpenCartSection()
        check.cartAsserts.checkPrintersPriceForOneItem();
        perform.cartActions.clickCheckoutBtnOnBasketPage();

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

        perform.cartActions.openCartPage();
        perform.cartActions.deleteFirstItemFromCart();


    });
});
