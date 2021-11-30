import CookiesDialogElements from "../../locators/17_cookiesDialog/CookiesDialogElements";

class CookiesDialogAsserts {
    checkCookiesLinkWasOpened(){
        cy.url().should("contain", "legal/cookiepolicy");
    };
    checkCookiesBlockIsVisible(){
      cy.get(CookiesDialogElements.cssBlock_ContentBlock).should("be.visible");
    };
    checkCookiesBannerIsNotVisible(){
        cy.get(CookiesDialogElements.idBanner_ConfirmCookies).should("not.be.visible");
    };
}
export default CookiesDialogAsserts