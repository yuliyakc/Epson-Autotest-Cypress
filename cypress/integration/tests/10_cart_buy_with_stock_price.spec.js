// import Actions from "../../framework/Actions";
// import Asserts from "../../framework/Asserts";
// import CommonActions from "../../framework/page_actions/CommonActions";
//
// describe("Find discount price and purchase", ()=> {
//     let perform = new Actions();
//     let check = new Asserts();
//     it('should login, find printer with discount and purchase', function () {
//         perform.signInActions.openWebsiteAndLogin();
//
//         perform.commonActions.openSpecificPrinterPDP();
//         perform.buyNowPDPActions.clickBuyNowBtnOnPDPPage();
//         perform.consumablesActions.clickCheckoutBtnOnConsumablesPage();
//
//         check.cartAsserts.checkCartSection();
//         check.commonAsserts.checkPriceWithDiscount();
//         perform.cartActions.clickCheckoutBtnOnBasketPage();
//
//         check.checkoutAsserts.checkSelectedCountry();
//         perform.checkoutActions.fillRequiredInfo();
//         perform.checkoutActions.searchAndSetAnAddress();
//         perform.checkoutActions.saveAndGoToNextStep();
//         perform.checkoutActions.goNextToBilling();
//         check.checkoutAsserts.checkTotalPriceOnShipmentPage();
//         perform.checkoutActions.saveAndGoToNextStep();
//
//         cy.selectCardToPay();
//         perform.checkoutActions.setCardName();
//         perform.checkoutActions.goNext();
//         perform.checkoutActions.agreeTermsAndPlaceAnOrder();
//         check.checkoutAsserts.checkThankYouPageAfterPurchasing();
//         check.checkoutAsserts.checkTotalOnThankYouPage();
//     });
// });