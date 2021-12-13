import Actions from "../../framework/Actions.js"
import Asserts from "../../framework/Asserts.js"

describe("Checking Update Details Tab", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    it('should check that new Details are saved successfully', function () {
        perform.signInActions.openWebsiteAndLogin();
        perform.myAccountActions.openMyAccountMenu();
        perform.updateDetailsActions.openUpdateDetailsTab();
        perform.updateDetailsActions.saveChangesWithoutAName();
        perform.updateDetailsActions.clickUpdateInfoBtn();
        check.commonAsserts.checkGlobalAlertIsDisplayed();
        check.checkoutAsserts.checkErrorIfFirstNameIsEmpty();
        check.checkoutAsserts.checkErrorIfLastNameIsEmpty();

        perform.updateDetailsActions.enterFirstAndLastNames();
        perform.updateDetailsActions.selectAndAddDateOfBirth();
        perform.updateDetailsActions.changeTelephoneNumber();
        perform.updateDetailsActions.clickUpdateInfoBtn();
        check.commonAsserts.checkGlobalAlertIsDisplayed();
    });
});