import CartElements from "../../locators/07_basket/CartElements";
import ConsumablesElements from "../../locators/08_extraAccessories/ConsumablesElements";

class ConsumablesAsserts {
    checkUserIsOnConsumablesPage(){
        cy.url().should("include", "/add-consumables");
    };
    checkConsumablesQuantityIsTwo(){
        cy.wait(1000)
        cy.get(CartElements.IdNum_Quantity3)
            .should("have.value", 2)
    };
    checkProductInsideToggleMenu(){
      cy.get(ConsumablesElements.cssToggle_MediaSecond).should("have.class", "cross-sell-list__items")
    };
}
export default ConsumablesAsserts