import PdpActions from "./pdpActions";
import PdpElements from "../../locators/05_productDisplayPage/pdpElements";

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
}
export default PdpAssertions