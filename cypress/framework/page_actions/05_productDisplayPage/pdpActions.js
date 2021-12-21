import PdpElements from "../../locators/05_productDisplayPage/pdpElements";

class PdpActions {
    clickBuyNowBtnOnPDPPage(){
        cy.get(PdpElements.cssButton_BuyNowPDP).click();
    };
    clickTechSpecTab(){
      cy.xpath(PdpElements.xpathTab_TechSpec).click();
    };
    clickOverviewTab(){
        cy.xpath(PdpElements.xpathTab_Overview).click();
    };
    clickAccessoriesTab(){
        cy.xpath(PdpElements.xpathTab_Accessories).click();
    };
    clickSupportTab(){
      cy.xpath(PdpElements.xpathTab_Support).click();
    };
    scrollDownToTabBar(){
        cy.scrollTo(0,500);
        cy.wait(1000);
    };
    clickSupportBtnAtSupportBlock(){
      cy.get(PdpElements.cssBtn_GoToSupport).click();
    };
    clickCompatibilityTab(){
      cy.xpath(PdpElements.xpathTab_Compatibility).click() ;
    };
    clickCompatibilityLink(){
      cy.get(PdpElements.cssLink_CompatibilityPanel).click() ;
    };
    clickSeriesModelsTab(){
      cy.xpath(PdpElements.xpathLink_SeriesModels).click();
    };
    clickSupportButtonInProductSection(){
      cy.get(PdpElements.cssBtn_Support).click();
    };



}
export default PdpActions