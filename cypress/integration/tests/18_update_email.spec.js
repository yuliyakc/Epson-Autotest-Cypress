import Actions from "../../framework/Actions.js"
import Asserts from "../../framework/Asserts.js"

describe("Checking Update Email Tab", ()=> {
    let perform = new Actions();
    let check = new Asserts();

    it('should check that new Email is saved successfully', function () {
        perform.signInActions.openWebsiteAndLogin();
        perform.myAccountActions.openMyAccountMenu();
        perform.updateDetailsActions.openUpdateEmailTab()
        check.updateDataAsserts.checkUpdateEmailTabIsOpened();
        perform.updateDetailsActions.fillOldAndNewEmails();
        perform.updateDetailsActions.fillOldPassword();
        perform.updateDetailsActions.clickUpdateInfoBtn();
        check.commonAsserts.checkGlobalAlertIsDisplayed();
    });
});