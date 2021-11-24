class CheckoutElements {
    static cssButton_ConsumablesCheckout = "div.consumables-page__checkout.consumables-page__checkout--header > button";
    static cssBlock_ConsumablesPage = "div.consumables-page";
    static cssBlock_CartHeaders = ".cart__column-headers";
    static idInput_Nickname = "input[id='nickname']";
    static idInput_FirstName = "input[id='first-name']";
    static idInput_LastName = "input[id='last-name']";
    static idInput_Telephone = "input[id='telephone']";
    static idInput_CompanyName = "input[id='company-name']";
    static idInput_AddressFinder = "input[id='address-finder']";
    static cssButton_Submit = "div.address-form__footer > button[type='submit']";
    static cssButton_PlaceAnOrder = "div.place-order-form > button[type='submit']"
    static idButton_SubmitDeliveryMethod = "button[id='deliveryMethodSubmit']";
    static cssButton_ToNextStep = "div.checkout-section__step-body > button";
    static idInput_Address1 = "input[id='line-1']";
    static idInput_Town = "input[id='town']";
    static idInput_Postcode = "input[id='postcode']";
    static cssInput_CardName = "label > div > input";
    static cssInput_Klarna = "input[value='klarna']";
    static cssCheckbox_AgreeTerms = ".form-group:nth-child(1) .checkbox";
    static cssCheckbox_MarketingEmails = ".form-group:nth-child(2) .checkbox";
    static cssButton_AddAddressManually = "a[class='address-form__address-finder-toggler js-address-finder-toggler']";
    static cssItem_TotalCart = "div.js-cart-totals > div:nth-child(1) > div.col-xs-6.col-md-4.text-right";
    static cssItem_VoucherMessage = ".basket-voucher__voucher-msg";
    static xpathDropdown_DeliveryMethod = "//select[@id='delivery_method']";
    static cssText_ProductQuantity = ".checkout-summary__product-quantity";
    static cssText_CheckoutSummaryPrice = "div > div.checkout-summary__row.checkout-summary__price.checkout-summary__price--total";
    static cssText_CheckoutFinalPage = ".order-totals__row:nth-child(2)";
    static cssText_ShipToName = "div:nth-child(2) > div.checkout-summary__section-content > div";
    static cssText_ShipToAddress = "div:nth-child(2) > div.checkout-summary__section-content > div > div:nth-child(5)";
    static cssText_ShipToTelephone = "div:nth-child(2) > div.checkout-summary__section-content > div > div:nth-child(6)";
    static cssBlock_BillingInfo = "div.checkout-section__review > div > div.checkout-summary__sections > div:nth-child(3)";
    static cssBlock_PaymentMethod = "div.checkout-section__review > div > div.checkout-summary__sections > div:nth-child(4)";
    static cssBlock_DeliveryDetails = ".order-summary__section:nth-child(1)";
    static cssBlock_ShipmentMethod = ".order-summary__section:nth-child(2))";
    static cssBlock_PaymentDetails = ".order-summary__section:nth-child(3)";
    static cssBlock_Payment = " div.order-summary.order-summary--grid.order-summary--order-confirmation > div:nth-child(4)";
    static cssBlock_OrderEntries = ".order-entries.order-entries--order-confirmation";
    static cssBlock_OrderTotalOverview = ".order-totals.order-totals--order-confirmation";
    static cssBtn_ReturnToStore = ".order-confirmation__buttons a";

}
export default CheckoutElements