import MyAccountElements from "../../locators/11_myAccount/MyAccountElements";
import OrderHistoryElements from "../../locators/12_orderHistory/OrderHistoryElements";
import SortingElements from "../../locators/04_productListingPage/SortingElements";

class OrderHistoryActions {
    openOrderHistoryTab(){
        cy.get(MyAccountElements.cssTab_OrderHistory).click();
    };
    openOrderNumberLink(){
        cy.wait(5000)
        cy.xpath(OrderHistoryElements.xpathLink_OrderNumber).click();
    };
    selectSortingByOrderNumber(){
        cy.get(SortingElements.cssDropdown_Sorting).select("byOrderNumber").should("have.value", "byOrderNumber");
    };
    selectSortingByDate(){
        cy.get(SortingElements.cssDropdown_Sorting).select("byDate").should("have.value", "byDate");
    };
    clickReorderBtn(){
      cy.get(OrderHistoryElements.cssBtn_Reorder).click();
    };
    clickBackToOrderHistoryBtn(){
      cy.get(OrderHistoryElements.cssBtn_BackToPreviousPage).eq(0).click();
    };
    clickBackToYourAccountBtn(){
        cy.get(OrderHistoryElements.cssBtn_BackToPreviousPage).eq(0).click();
    };
}
export default OrderHistoryActions