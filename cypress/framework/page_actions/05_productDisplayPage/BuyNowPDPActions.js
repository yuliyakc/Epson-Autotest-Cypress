import BuyNowPDPElements from "../../locators/05_productDisplayPage/BuyNowPDPElements";

class BuyNowPDPActions {
    clickBuyNowBtnOnPDPPage(){
        cy.get(BuyNowPDPElements.cssButton_BuyNowPDP).click();
    };


}
export default BuyNowPDPActions