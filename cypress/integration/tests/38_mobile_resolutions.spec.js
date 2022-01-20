import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe ("Check Mobile version correct working", ()=> {
    let perform = new Actions();
    let check = new Asserts();

    it('should change screen resolution, login successful and purchase', function () {
        perform.commonActions.openWebsite();
        perform.mobileActions.changeScreenResolutionToIphone();
        perform.cookiesDialogActions.confirmAllCookies();
        check.mobileAsserts.checkMobileEpsonLogo();
        perform.mobileActions.clickMobileBurgerMenu();
        perform.mobileActions.clickMobileMyAccountBtn();
        perform.mobileActions.clickMobileLogInBtn();
        perform.signInActions.enterEmailToLogin();
        perform.signInActions.enterPasswordToLogin();
        perform.signInActions.clickLogInBtn();

        perform.mobileActions.clickMobileBurgerMenu();
        perform.mobileActions.clickMobilePrintersTab();
        perform.mobileActions.clickDotMatrixSubTab();
        check.assertions.checkDotMatrixPrintersPageIsOpened();

        perform.plpInfoActions.clickBuyNowBtnPLP();

        //perform.consumablesActions.clickCheckoutBtnOnConsumablesPage();
        check.mobileAsserts.checkPageTitleOnCartSection();
        perform.cartActions.clickCheckoutBtnOnBasketPage();
        perform.checkoutActions.fillRequiredInfo();
        perform.checkoutActions.searchAndSetAnAddress();
        perform.checkoutActions.saveAndGoToNextStep();
        perform.checkoutActions.selectAndCheckStandardMethod();

        perform.checkoutActions.goNextToBilling();
        perform.checkoutActions.saveAndGoToNextStep();
        perform.checkoutActions.performPayoutWithCreditCardMethod();
        perform.checkoutActions.setCardName();
        perform.checkoutActions.goNext();
        perform.checkoutActions.agreeTermsAndPlaceAnOrder();
        check.checkoutAsserts.checkThankYouPageAfterPurchasing();
    });
    it('should change screen resolution, login and open My Account menu', function () {
        perform.commonActions.openWebsite();
        perform.mobileActions.changeScreenResolutionToIphone();
        perform.cookiesDialogActions.confirmAllCookies();
        check.mobileAsserts.checkMobileEpsonLogo();
        perform.mobileActions.clickMobileBurgerMenu();
        perform.mobileActions.clickMobileMyAccountBtn();
        perform.mobileActions.clickMobileLogInBtn();
        perform.signInActions.enterEmailToLogin();
        perform.signInActions.enterPasswordToLogin();
        perform.signInActions.clickLogInBtn();

        perform.mobileActions.clickMobileBurgerMenu();
        perform.mobileActions.clickMyAccountBtnMenu();
        perform.mobileActions.clickAddressBookTab();
        check.mobileAsserts.checkMobAddressBookTitle();

        perform.mobileActions.clickMobileBurgerMenu();
        perform.mobileActions.clickMyAccountBtnMenu();
        perform.mobileActions.clickOrderHistoryTab();
        check.mobileAsserts.checkOrderHistoryTitle();

        perform.mobileActions.clickMobileBurgerMenu();
        perform.mobileActions.clickMyAccountBtnMenu();
        perform.mobileActions.clickChangePasswordTab();
        check.mobileAsserts.checkTitleIsVisible();

        perform.mobileActions.clickMobileBurgerMenu();
        perform.mobileActions.clickMyAccountBtnMenu();
        perform.mobileActions.clickUpdateDetailsTab();
        check.mobileAsserts.checkTitleIsVisible();

        perform.mobileActions.clickMobileBurgerMenu();
        perform.mobileActions.clickMyAccountBtnMenu();
        perform.mobileActions.clickUpdateEmailTab();
        check.mobileAsserts.checkTitleIsVisible();

        perform.mobileActions.clickMobileBurgerMenu();
        perform.mobileActions.clickMyAccountBtnMenu();
        perform.mobileActions.clickMyAccountInnerTab();
        check.mobileAsserts.checkMyAccountTitle();
    });
});