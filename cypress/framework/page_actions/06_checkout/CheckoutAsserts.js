import CommonElements from "../../locators/CommonElements";
import usersData from "../../../data/users";
import CheckoutElements from "../../locators/06_checkout/CheckoutElements";
import ConsumablesElements from "../../locators/08_extraAccessories/ConsumablesElements";
import checkoutsData from "../../../data/checkouts";

class CheckoutAsserts {
    checkSelectedCountry(){
        cy.get(CommonElements.cssStaticField_Country).should("have.value", usersData.purchase.country)
    };
    checkThankYouPageAfterPurchasing(){
        cy.get(CommonElements.cssStatic_ThankYouPage).should("be.visible");
    }
    checkOrderInfoBlockIsVisible(){
        cy.get(CommonElements.cssBlock_OrderBlock).should("be.visible");
        cy.get(CommonElements.cssBlock_OrderNumber).should("be.visible");
        cy.get(CommonElements.cssBlock_OrderConfirmTo).should("be.visible");
        cy.get(CommonElements.cssBlock_OrderDate).should("be.visible");
    };
    checkAllItemsInCart(){
        cy.get(ConsumablesElements.cssBlock_CheckoutOrderList).should('have.length', 4);
    };
    checkItemsInsideCheckout(){
        cy.get(ConsumablesElements.cssBlock_OrderList).should('have.length', 4);
    };
    checkDeliveryItemsOnThankYouPage(){
        cy.get(ConsumablesElements.cssBlock_DeliveredItemsList).should('have.length', 4);
    };
    checkTotalOnThankYouPage(){
        cy.get(".order-totals__row:nth-child(2)") .should('contain', checkoutsData.discount.price)
    };
    checkTotalPriceOnShipmentPage(){
        cy.get("div > div.checkout-summary__row.checkout-summary__price.checkout-summary__price--total").should('contain', checkoutsData.discount.price)
    };
}
export default CheckoutAsserts