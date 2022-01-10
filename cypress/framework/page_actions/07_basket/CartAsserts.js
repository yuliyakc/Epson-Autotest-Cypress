import CartElements from "../../locators/07_basket/CartElements";
import CheckoutElements from "../../locators/06_checkout/CheckoutElements";
import checkoutsData from "../../../data/checkouts";
import printersData from "../../../data/printers";

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
    checkThatCartIsEmpty(){
        cy.get("div").should("have.class", "empty-cart")
    };
    checkThatVoucherIsApplied(){
        cy.get(CheckoutElements.cssItem_VoucherMessage).should("be.visible");
    };
    checkCartPage(){
        cy.url().should("include", "/cart");
    };
    checkCartSection(){
        cy.get(CheckoutElements.cssBlock_CartHeaders).should("be.visible");
    };
    checkAlertForSpecificPrinter(){
        cy.get("div.global-alerts a").should("be.visible")
    };
    checkPrintersQuantityIsNotWithMinus(){
        cy.xpath(CartElements.xpathInput_ItemsQuantity).should("include.value", 2);
    };
    checkPriceWithVoucherCode30(){
        cy.get(CheckoutElements.cssItem_TotalDiscount).should('contain', checkoutsData.price.withVoucher30)
    };
    checkPriceWithVoucherCode100(){
        cy.get(CheckoutElements.cssItem_TotalDiscount).should('contain', checkoutsData.price.withVoucher100)
    };
    checkFixedVoucherCode30IsApply(){
        cy.get(CheckoutElements.cssItem_VoucherMessage).should("be.visible").and("contain.text", checkoutsData.discount.applyTextFor30);
    };
    checkFixedVoucherCode100IsApply(){
        cy.get(CheckoutElements.cssItem_VoucherMessage).should("be.visible").and("contain.text", checkoutsData.discount.applyTextFor100);
    };
    checkPercentageVoucherCodeIsApply(){
        cy.get(CheckoutElements.cssItem_VoucherMessage).should("be.visible").and("contain.text", checkoutsData.discount.applyTextForPercentage);
    };
    checkPriceWithPercentageVoucherCode(){
        cy.get(CheckoutElements.cssItem_TotalDiscount).should('contain', checkoutsData.price.percentagePrice)
    };

}
export default CartAsserts