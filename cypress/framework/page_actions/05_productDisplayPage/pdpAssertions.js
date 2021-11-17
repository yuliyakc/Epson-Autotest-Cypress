import PdpActions from "./pdpActions";
import PdpElements from "../../locators/05_productDisplayPage/pdpElements";

class PdpAssertions {
    checkThatSKUIsDisplayed(){
        cy.get(PdpElements.cssText_SKU).should("be.visible")
    };
}
export default PdpAssertions