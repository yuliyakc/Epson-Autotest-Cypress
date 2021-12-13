import Actions from "../../framework/Actions.js"
import Asserts from "../../framework/Asserts.js"

describe("Checking Order History Tab", ()=> {
let perform = new Actions();
let check = new Asserts();
    beforeEach(function () {
        cy.clearCookies();
        cy.viewport(1200, 800);
        perform.signInActions.openWebsiteAndLogin();
        perform.myAccountActions.openMyAccountMenu();
        perform.orderHistoryActions.openOrderHistoryTab();
    });
    it('should check Sorting on Order History page', function () {
        perform.orderHistoryActions.selectSortingByOrderNumber();
        check.orderHistoryAsserts.checkOrderNumberSortingWasApplied();
        perform.orderHistoryActions.selectSortingByDate();
        check.orderHistoryAsserts.checkOrderDateSortingWasApplied();
    });
    it('should check Pagination on Order History page', function () {
        perform.paginationActions.clickTopPaginationButtonNext();
        check.orderHistoryAsserts.checkSecondPageIsOpened();
        perform.paginationActions.clickTopPaginationButtonPrev();
        check.orderHistoryAsserts.checkFirstPageIsOpened();
    });
   //  it('should open Order Number page and reorder an order', function () {
   //      perform.orderHistoryActions.openOrderNumberLink();
   //      perform.orderHistoryActions.clickReorderBtn();
   //      check.cartAsserts.checkCartPage();
   //      check.cartAsserts.checkCartSection();
   //      perform.cartActions.clickCheckoutBtnOnBasketPage();
   //
   //      check.checkoutAsserts.checkSelectedCountry();
   //      perform.checkoutActions.fillRequiredInfo();
   //      perform.checkoutActions.searchAndSetAnAddress();
   //      perform.checkoutActions.setDefaultCheckboxes();
   //      perform.checkoutActions.saveAndGoToNextStep();
   //      perform.checkoutActions.goNextToBilling();
   //      perform.checkoutActions.saveAndGoToNextStep();
   //      perform.checkoutActions.performPayoutWithCreditCardMethod();
   //      perform.checkoutActions.setCardName();
   //      perform.checkoutActions.goNext();
   //      perform.checkoutActions.agreeTermsAndPlaceAnOrder();
   //      check.checkoutAsserts.checkThankYouPageAfterPurchasing();
   //
   // });
    it('should check Order History "Back" button', function () {
        perform.orderHistoryActions.openOrderNumberLink();
        check.orderHistoryAsserts.checkThatUserTransferToOrderPage();
        perform.orderHistoryActions.clickBackToOrderHistoryBtn();
        check.orderHistoryAsserts.checkThatUserTransferToOrdersHistoryPage();
        perform.orderHistoryActions.clickBackToYourAccountBtn();
        check.orderHistoryAsserts.checkThatUserTransferToMyAccHomePage();
    });
});