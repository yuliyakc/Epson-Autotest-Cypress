// import Actions from "../../framework/Actions";
// import Asserts from "../../framework/Asserts";
//
// describe("Login and buy a printer", ()=> {
//     let perform = new Actions();
//     let check = new Asserts();
//     it('should login and buy a printer from PLP using credit card', function () {
//         perform.signInActions.openWebsiteAndLogin();
//
//         perform.searchActions.searchInkPrinterPLP();
//         perform.buyNowPLPActions.clickBuyNowBtnPLP();
//         //assertions.checkConsumablePage();
//         //commonActions.clickCheckoutBtnOnConsumablesPage();
//         perform.consumablesActions.clickCheckoutBtnOnConsumablesPage();
//         perform.cartActions.clickCheckoutBtnOnBasketPage();
//
//         check.checkoutAsserts.checkSelectedCountry();
//         perform.checkoutActions.fillRequiredInfo();
//         perform.checkoutActions.searchAndSetAnAddress();
//         perform.checkoutActions.setDefaultCheckboxes();
//         perform.checkoutActions.saveAndGoToNextStep();
//         perform.checkoutActions.goNextToBilling();
//         perform.checkoutActions.saveAndGoToNextStep();
//         cy.selectCardToPay();
//         perform.checkoutActions.setCardName();
//         perform.checkoutActions.goNext();
//         perform.checkoutActions.agreeTermsAndPlaceAnOrder();
//         check.checkoutAsserts.checkThankYouPageAfterPurchasing();
//         check.checkoutAsserts.checkOrderInfoBlockIsVisible();
//
//         perform.myAccountActions.openMyAccountMenu();
//         perform.orderHistoryActions.openOrderHistoryTab();
//         perform.orderHistoryActions.openOrderNumberLink();
//         perform.commonActions.goBackToPreviousPage();
//         check.orderHistoryAsserts.checkOrderStatusInProgress();
//     });
// });
