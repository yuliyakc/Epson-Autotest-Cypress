import PdpElements from "../../locators/05_productDisplayPage/pdpElements";
import CommonElements from "../../locators/CommonElements";

class PdpAssertions {
    checkThatSKUIsDisplayed(){
        cy.get(PdpElements.cssText_SKU).should("be.visible")
    };
    checkOverviewBlock(){
        cy.get("div").should("have.class", "product-overview")
            .and("have.class","product-overview__section");
    };
    checkTechSpecBlock(){
        cy.get("div").should("have.class", "tab-panel__section-inner")
            .and("have.class","tech-specs");
    };
    checkAccessoriesBlock(){
        cy.get("div").should("have.class", "cross-sell-accordion")
            .and("have.class","accordion-toggle__content");
    };
    checkSupportBlock(){
        cy.get("div").should("have.class", "support-panel");
    };
    checkCompatibilityBlock(){
        cy.get("div").should("have.class", "compatibility-panel");
    };
    checkSeriesModelsBlock(){
        cy.get("div").should("have.class", "cross-sell-list--series-products");
    };
    checkTitleIsDisplayed(){
      cy.get(PdpElements.cssText_Title).should("be.visible");
    };
    checkMainBlockWithInformationIsDisplayed(){
      cy.get("div").should("have.class", "product-summary")
          .and("have.class", "product-summary__secondary-information")
          .and("have.class", "product-summary__sku");
    };
    checkThatPriceIsVisible(){
      cy.get(PdpElements.cssText_Price).should("be.visible")
    };
    checkThatInStockStatusIsVisible(){
      cy.get(CommonElements.cssBlock_InStock).should("be.visible");
    };
}
export default PdpAssertions