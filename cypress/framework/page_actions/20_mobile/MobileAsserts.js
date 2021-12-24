import MobileElements from "../../locators/20_mobile/MobileElements";

class MobileAsserts {
    checkMobileEpsonLogo(){
        cy.get(MobileElements.cssLogo_MobileEpsonLogo).should("be.visible");
    };
    checkPageTitleOnCartSection(){
        cy.get(MobileElements.cssTitle_Mobile_PageTitle).should("be.visible");
    };
    checkMobAddressBookTitle(){
        cy.wait(1000);
        cy.get(MobileElements.cssTitle_MobAddressBook).should("be.visible");
    };
    checkOrderHistoryTitle(){
        cy.wait(1000);
        cy.get(MobileElements.cssTitle_MobOrderHistory).should("be.visible");
    };
    checkTitleIsVisible(){
        cy.wait(1000);
        cy.get(MobileElements.cssTitle_Mobile_PageTitle).should("be.visible");
    };
    checkMyAccountTitle(){
        cy.wait(1000);
        cy.get(MobileElements.cssTitle_MobMyAccount).should("be.visible");
    };


}
export default MobileAsserts