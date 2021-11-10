import OrderHistoryElements from "../../locators/12_orderHistory/OrderHistoryElements";

class OrderHistoryAsserts {
    checkOrderStatusInProgress(){
        cy.wait(2000);
        cy.xpath(OrderHistoryElements.xpathRow_OrderStatus).should("include.text", "In Progress")
    };
    checkOrderNumberSortingWasApplied(){
      cy.url().should("include", "sort=byOrderNumber");
    };
    checkOrderDateSortingWasApplied(){
        cy.url().should("include", "sort=byDate");
    };
    checkThatUserTransferToOrderPage(){
        cy.url().should("include", "order/GB");
    };
    checkThatUserTransferToOrdersHistoryPage(){
        cy.url().should("include", "my-account/orders");
    };
    checkThatUserTransferToMyAccHomePage(){
        cy.url().should("include", "my-account/home");
    };
    checkOrderHistoryTabIsOpened(){
        cy.url().should("include", "my-account/orders");
        cy.get("div").should("have.class", "order-history");
    };
    checkSecondPageIsOpened(){
        cy.url()
            .should("include", "page=1");
    };
    checkFirstPageIsOpened(){
        cy.url()
            .should("include", "page=0");
    };
}
export default OrderHistoryAsserts