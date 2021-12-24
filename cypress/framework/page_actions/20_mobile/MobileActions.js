import MobileElements from "../../locators/20_mobile/MobileElements";

class MobileActions {
    changeScreenResolutionToIphone(){
        cy.viewport(414, 736);
    };
    clickMobileBurgerMenu(){
        cy.get(MobileElements.cssBtn_MobileMenu).click();
    };
    clickMobileMyAccountBtn(){
        cy.get(MobileElements.cssTab_MobileMyAccount).click();
    };
    clickMyAccountBtnMenu(){
        cy.get(MobileElements.cssTab_MyAccountMenu).click();
    };
    clickMobileLogInBtn(){
        cy.get(MobileElements.cssBtn_MobileLogin).click();
    };
    clickMobilePrintersTab(){
        cy.get(MobileElements.cssTab_MobilePrinters).click();
    };
    clickDotMatrixSubTab(){
        cy.get(MobileElements.cssSubTab_Mobile_SubTab).eq(4).click();
    };
    clickAddressBookTab(){
      cy.get(MobileElements.cssSubSubTab_MobSubSubTab).eq(0).click();
    };
    clickOrderHistoryTab(){
        cy.get(MobileElements.cssSubSubTab_MobSubSubTab).eq(1).click();
    };
    clickChangePasswordTab(){
        cy.get(MobileElements.cssSubSubTab_MobSubSubTab).eq(2).click();
    };
    clickUpdateDetailsTab(){
        cy.get(MobileElements.cssSubSubTab_MobSubSubTab).eq(3).click();
    };
    clickUpdateEmailTab(){
        cy.get(MobileElements.cssSubSubTab_MobSubSubTab).eq(4).click();
    };
    clickMyAccountInnerTab(){
        cy.get(MobileElements.cssSubSubTab_MobSubSubTab).eq(5).click();
    };
}
export default MobileActions