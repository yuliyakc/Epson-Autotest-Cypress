import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe ("Checking of Cookies banner correct work", ()=> {
    let perform = new Actions();
    let check = new Asserts();

    it('should click Cookies Info link and check correct page', function () {
        perform.commonActions.openWebsite();
        perform.cookiesDialogActions.clickCookiesInfoLink();
        check.cookiesDialogAsserts.checkCookiesLinkWasOpened();
        check.cookiesDialogAsserts.checkCookiesBlockIsVisible();
    });
    it('should click Cookies settings, Allow All switches and confirm', function () {
        perform.commonActions.openWebsite();
        perform.cookiesDialogActions.clickCookiesSettingsBtn();
        perform.cookiesDialogActions.scrollDownTheModalWindow();
        perform.cookiesDialogActions.setAllSwitchesOn();
        perform.cookiesDialogActions.confirmSettings();
        check.cookiesDialogAsserts.checkCookiesBannerIsNotVisible();
    });
});