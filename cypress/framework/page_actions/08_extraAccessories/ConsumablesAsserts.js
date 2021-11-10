import CartElements from "../../locators/07_basket/CartElements";

class ConsumablesAsserts {
    checkUserIsOnConsumablesPage(){
        cy.url().should("include", "/add-consumables");
    };
    checkConsumablesQuantityIsTwo(){
        cy.wait(1000)
        cy.get(CartElements.IdNum_Quantity3)
            .should("have.value", 2)
    };
}
export default ConsumablesAsserts