class OrderHistoryElements {
    static xpathLink_OrderNumber = "//tr[@class='order-history__table-row'][1]//a[@class='order-history__order-id']";
    static xpathRow_OrderStatus = "//tr[@class='order-history__table-row'][1]//td[2]";
    static cssBtn_Reorder = ".order-details__buttons:nth-child(2) > .order-details__buttons-container--right > .btn";
    static cssBtn_BackToMyAccountPage = "div:nth-child(2) > div > div:nth-child(1) > a";
    static cssBtn_BakToOrderHistoryListPage = "div.yCmsContentSlot.account-section-content > div > div > div:nth-child(2) > div:nth-child(1) > a"

}
export default OrderHistoryElements