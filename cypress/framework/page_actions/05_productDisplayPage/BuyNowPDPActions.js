import BuyNowPDPElements from "../../locators/05_productDisplayPage/BuyNowPDPElements";

class BuyNowPDPActions {
    clickBuyNowBtnOnPDPPage(){
        cy.get(BuyNowPDPElements.cssButton_BuyNowPDP).click();
    };
    clickAccessoriesTab(){
        cy.xpath(BuyNowPDPElements.xpathTab_Accessories).click()
    };
}
export default BuyNowPDPActions