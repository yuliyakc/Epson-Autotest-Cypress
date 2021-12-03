import PdpElements from "../../locators/05_productDisplayPage/pdpElements";

class BuyAccessoriesAsserts {
    checkAccessoriesTabIsVisible(){
        cy.xpath(PdpElements.xpathTab_Accessories).should("be.visible");
    };
}
export default BuyAccessoriesAsserts