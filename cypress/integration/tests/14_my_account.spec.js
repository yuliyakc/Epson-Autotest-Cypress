import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";
import UpdateDataActions from "../../framework/page_actions/14_updateData/UpdateDataActions";
import UpdateDataAsserts from "../../framework/page_actions/14_updateData/UpdateDataAsserts";

describe("Checking tabs on My Account menu", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    beforeEach(function () {
        cy.clearCookies();
        cy.viewport(1200, 800);
        perform.signInActions.openWebsiteAndLogin();
        perform.myAccountActions.openMyAccountMenu();
        perform.myAccountActions.openMyAccountTab();
    });
    it('should check that tabs on My account menu is opened and correct ones', function () {
        check.myAccAsserts.checkMyAccountTabIsOpened();

        perform.myAccountActions.openMyAccountMenu();
        perform.updateDetailsActions.openUpdateDetailsTab();
        check.updateDataAsserts.checkUpdateDetailsTabIsOpened();

        perform.myAccountActions.openMyAccountMenu();
        perform.updateDetailsActions.openUpdateEmailTab();
        check.updateDataAsserts.checkUpdateEmailTabIsOpened();

        perform.myAccountActions.openMyAccountMenu();
        perform.updateDataActions.openChangePasswordTab();
        check.updateDataAsserts.checkChangePassTabIsOpened();

        perform.myAccountActions.openMyAccountMenu();
        perform.orderHistoryActions.openOrderHistoryTab();
        check.orderHistoryAsserts.checkOrderHistoryTabIsOpened();

        perform.myAccountActions.openMyAccountMenu();
        perform.addressBookActions.openAddressBookTab();
        check.myAccAsserts.checkAddressBookTabIsOpened();
    });
    it('should open My Accounts tab and check Inner blocks', function () {
        perform.myAccountActions.openOrderHistoryPage();
        check.orderHistoryAsserts.checkThatUserTransferToOrdersHistoryPage();

        perform.orderHistoryActions.clickBackToYourAccountBtn();
        perform.myAccountActions.openUpdatePersonalDetailsPage();
        check.myAccAsserts.checkThatUserTransferToUpdateProfilePage();

        perform.commonActions.goBackToPreviousPage();
        perform.myAccountActions.openUpdateEmailPage();
        check.myAccAsserts.checkThatUserTransferToUpdateEmailPage();

        perform.commonActions.goBackToPreviousPage();
        perform.myAccountActions.openUpdatePasswordPage();
        check.myAccAsserts.checkThatUserTransferToUpdatePasswordPage();

        perform.commonActions.goBackToPreviousPage();
        perform.myAccountActions.openAddressBookPage();
        check.myAccAsserts.checkThatUserTransferToAddressBookPage();

        perform.commonActions.goBackToPreviousPage();
        perform.myAccountActions.openBuyAccessoriesPage();
        check.myAccAsserts.checkThatUserTransferToAccessoriesPage();
    });
});