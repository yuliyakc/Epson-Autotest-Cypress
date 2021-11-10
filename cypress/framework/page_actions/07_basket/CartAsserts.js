import CartElements from "../../locators/07_basket/CartElements";
import CheckoutElements from "../../locators/06_checkout/CheckoutElements";
import checkoutsData from "../../../data/checkouts";
import CommonElements from "../../locators/CommonElements";

class CartAsserts {
    checkUserOpenCartSection(){
        cy.get("div").should("have.class", "product-card--cart")
            .and("have.class", "cart__total-price")
    };
    checkPrintersQuantityIsOne(){
        cy.get(CartElements.idNum_Quantity1)
            .should("have.value", 1)
    };
    checkQuantityIsTwo(){
        cy.get(CartElements.idNum_Quantity1)
            .should("have.value", 2)
    };
    checkPrintersPriceForOneItem(){
        cy.get(CheckoutElements.cssItem_TotalCart).should('contain', checkoutsData.price.forOne)
    };
    checkPrintersPriceForTwoItems(){
        cy.get(CheckoutElements.cssItem_TotalCart).should('contain', checkoutsData.price.forTwo)
    };
    checkErrorMessage(){
        cy.get(CommonElements.cssAlert_Message).should("contain", "Product has been removed from your cart.")
    };
    checkThatCartIsEmpty(){
        cy.get("div").should("have.class", "empty-cart")
    };
    checkThatPriseHasChanged(){
        cy.get(CheckoutElements.cssItem_TotalCart).should('contain', checkoutsData.price.withVoucher)
    };
    checkCartPage(){
        cy.url().should("include", "/cart");
    };
    checkCartSection(){
        cy.get(CheckoutElements.cssBlock_CartHeaders).should("be.visible");
    };
}
export default CartAsserts