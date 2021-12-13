import Actions from "../../framework/Actions.js"
import Asserts from "../../framework/Asserts.js"

describe("Checking Address Book Tab", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    beforeEach(function () {
        cy.clearCookies();
        cy.viewport(1200, 800);
        perform.signInActions.openWebsiteAndLogin();
        perform.myAccountActions.openMyAccountMenu();
        perform.addressBookActions.openAddressBookTab();
        check.myAccAsserts.checkThatUserTransferToAddressBookPage();
    });
   it('should check negative testcases while creating new Address', function () {
        perform.addressBookActions.scrollDownAndClickAddNewAddressBtn();
        check.addressBookAsserts.checkAddressCreationPageIsOpened();

        perform.addressBookActions.clickSubmitChanges();
        check.commonAsserts.checkGlobalAlertIsDisplayed();

        perform.addressBookActions.fillAllInfoExceptFirstName();
        perform.checkoutActions.saveAndGoToNextStep();
        check.checkoutAsserts.checkErrorIfFirstNameIsEmpty();

        perform.addressBookActions.fillAllInfoExceptLastName();
        perform.checkoutActions.saveAndGoToNextStep();
        check.checkoutAsserts.checkErrorIfLastNameIsEmpty();

        perform.addressBookActions.fillAllInfoExceptAddress();
        perform.checkoutActions.saveAndGoToNextStep();
        check.checkoutAsserts.checkErrorIfAddressIsEmpty();

        perform.addressBookActions.fillAllInfoExceptTown();
        perform.checkoutActions.saveAndGoToNextStep();
        check.checkoutAsserts.checkErrorIfTownIsEmpty();

        perform.addressBookActions.fillAllInfoExceptPostcode();
        perform.checkoutActions.saveAndGoToNextStep();
        check.checkoutAsserts.checkErrorIfPostcodeIsEmpty();
        perform.addressBookActions.enterPostCode();

        perform.checkoutActions.setDefaultCheckboxes();

        perform.addressBookActions.clickSubmitChanges();
        check.commonAsserts.checkGlobalAlertIsDisplayed();

        check.addressBookAsserts.checkCreatedByDefaultAddress();
    });
    it('should edit created before Address by search with Postcode and check for changes', function () {
        perform.addressBookActions.clickEditAddressBtn();
        perform.addressBookActions.editDataForOldInfo();
        perform.addressBookActions.clickSearchAgainBtn();
        perform.addressBookActions.enterPostcodeToAddressAndSelect();

        perform.addressBookActions.clickSubmitChanges();
        check.addressBookAsserts.checkNewDataWasSaved();
    });
    it('should delete created before Address', function () {
        check.addressBookAsserts.checkCreatedByDefaultAddress();
        perform.addressBookActions.clickDeleteAddressBtn();
        perform.addressBookActions.clickCancelOnModalWindow();
        check.addressBookAsserts.checkCreatedByDefaultAddress();
        perform.addressBookActions.clickDeleteAddressBtn();
        perform.addressBookActions.clickDeleteOnModalWindow();
        check.commonAsserts.checkGlobalAlertIsDisplayed();
    });
});