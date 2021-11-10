import Actions from "../../framework/Actions.js"
import Asserts from "../../framework/Asserts.js"

describe("Checking Address Book Tab", ()=> {
    let perform = new Actions();
    let check = new Asserts();

    it('should check negative testcases while creating new Address', function () {
        perform.signInActions.openWebsiteAndLogin();
        perform.myAccountActions.openMyAccountMenu();
        perform.addressBookActions.openAddressBookTab();
        check.myAccAsserts.checkThatUserTransferToAddressBookPage();
        perform.addressBookActions.scrollDownAndClickAddNewAddressBtn();
        check.addressBookAsserts.checkAddressCreationPageIsOpened();

        perform.addressBookActions.clickSubmitChanges();
        check.signAsserts.checkErrorMessage();

        perform.addressBookActions.enterCorrectDataForNewAddress();
        perform.addressBookActions.clickSubmitChanges();
        check.signAsserts.checkErrorMessage();

        perform.checkoutActions.searchAndSetAnAddress();
        perform.checkoutActions.setDefaultCheckboxes();
        perform.addressBookActions.clickSubmitChanges();

        check.addressBookAsserts.checkCreatedByDefaultAddress();
    });
    it('should edit created before Address and check for changes', function () {
        perform.signInActions.openWebsiteAndLogin();
        perform.myAccountActions.openMyAccountMenu();
        perform.addressBookActions.openAddressBookTab();
        check.myAccAsserts.checkThatUserTransferToAddressBookPage();

        perform.addressBookActions.clickEditAddressBtn();
        perform.addressBookActions.editDataForOldAddress();
        perform.addressBookActions.clickSubmitChanges();
        check.addressBookAsserts.checkNewDataWasSaved();
    });
    it('should delete created before Address', function () {
        perform.signInActions.openWebsiteAndLogin();
        perform.myAccountActions.openMyAccountMenu();
        perform.addressBookActions.openAddressBookTab();
        check.myAccAsserts.checkThatUserTransferToAddressBookPage();

        check.addressBookAsserts.checkCreatedByDefaultAddress();
        perform.addressBookActions.clickDeleteAddressBtn();
        perform.addressBookActions.clickCancelOnModalWindow();
        check.addressBookAsserts.checkCreatedByDefaultAddress();
        perform.addressBookActions.clickDeleteAddressBtn();
        perform.addressBookActions.clickDeleteOnModalWindow();
        check.addressBookAsserts.checkDefaultAddressIsAbsent();
    });
});