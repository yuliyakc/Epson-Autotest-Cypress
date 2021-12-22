import CookiesDialogElements from "../../locators/17_cookiesDialog/CookiesDialogElements";

class CookiesDialogActions {
    confirmAllCookies(){
        cy.get(CookiesDialogElements.idModal_AcceptCookies).click();
    };
    clickCookiesInfoLink(){
      cy.get(CookiesDialogElements.cssBtn_CookiesInfo).click();
    };
    clickCookiesSettingsBtn(){
      cy.get(CookiesDialogElements.cssBtn_CookiesSettings).click();
    };
    scrollDownTheModalWindow(){
        cy.get(CookiesDialogElements.cssBlock_PrivacyBlock).scrollTo("bottom");
    };
    setAllSwitchesOn(){
        cy.get(CookiesDialogElements.cssSwitch_Toggle).eq(0).click();
        cy.get(CookiesDialogElements.cssSwitch_Toggle).eq(1).click();
        cy.get(CookiesDialogElements.cssSwitch_Toggle).eq(2).click();
    };
    confirmSettings(){
        cy.get(CookiesDialogElements.cssBtn_Confirm).click();
    };

}
export default CookiesDialogActions