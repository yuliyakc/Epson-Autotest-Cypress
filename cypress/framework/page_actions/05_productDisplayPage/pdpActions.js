import PdpElements from "../../locators/05_productDisplayPage/pdpElements";

class PdpActions {
    clickBuyNowBtnOnPDPPage(){
        cy.get(PdpElements.cssButton_BuyNowPDP).click();
    };
    clickAccessoriesTab(){
        cy.xpath(PdpElements.xpathTab_Accessories).click()
    };

}
export default PdpActions