import CommonElements from "../../locators/CommonElements";
import usersData from "../../../data/users";
import ConsumablesElements from "../../locators/08_extraAccessories/ConsumablesElements";
import checkoutsData from "../../../data/checkouts";
import CheckoutElements from "../../locators/06_checkout/CheckoutElements";

class CheckoutAsserts {
    checkSelectedCountry(){
        cy.get(CommonElements.cssStaticField_Country)
            .should("have.value", usersData.purchase.country)
    };
    checkThankYouPageAfterPurchasing(){
        cy.get(CommonElements.cssStatic_ThankYouPage).should("be.visible");
    }
    checkAllItemsInCart(){
        cy.get(ConsumablesElements.cssBlock_CheckoutOrderList)
            .should('have.length', 4);
    };
    checkItemsInsideCheckout(){
        cy.get(ConsumablesElements.cssBlock_OrderList)
            .should('have.length', 4);
    };
    checkDeliveryItemsOnThankYouPage(){
        cy.get(ConsumablesElements.cssBlock_DeliveredItemsList)
            .should('have.length', 4);
    };
    checkTotalOnThankYouPage(){
        cy.get(CheckoutElements.cssText_CheckoutFinalPage)
            .should('contain', checkoutsData.discount.price)
    };
    checkTotalPriceOnShipmentPage(){
        cy.get(CheckoutElements.cssText_CheckoutSummaryPrice)
            .should('contain', checkoutsData.discount.price)
    };
    checkQuantityOfProducts(){
        cy.get(CheckoutElements.cssText_ProductQuantity).should("include.text", 1);
    };
    checkShippingName(){
      cy.get(CheckoutElements.cssText_ShipToName).should("contain.text", usersData.register.firstName)
          .and("contain.text", usersData.register.lastName)
    };
    checkShippingTelephone(){
        cy.get(CheckoutElements.cssText_ShipToTelephone).should("contain.text", usersData.purchase.fullPhone)
    };
    checkShippingAddress(){
      cy.get(CheckoutElements.cssText_ShipToAddress).should("contain.text", usersData.purchase.fullAddress)
    };
    checkBillingInfoBlockIsVisible(){
      cy.get(CheckoutElements.cssBlock_BillingInfo).should("be.visible");
    };
    checkPaymentMethodIsPresent(){
      cy.get(CheckoutElements.cssBlock_PaymentMethod).should("contain.text", "Card");
    };
    checkDeliveryDetailsBlockOnThankYouPage(){
      cy.get(CheckoutElements.cssBlock_DeliveryDetails).should("be.visible");
    };
    checkShippingMethodBlockOnThankYouPage(){
        cy.get(CheckoutElements.cssBlock_PaymentDetails).should("be.visible");
    };
    checkPaymentDetailsBlockOnThankYouPage(){
        cy.get(CheckoutElements.cssBlock_PaymentDetails).should("be.visible");
    };
    checkPaymentMethodBlockOnThankYouPage(){
        cy.get(CheckoutElements.cssBlock_Payment).should("be.visible");
    };
    checkOrderEntriesBlockIsVisible(){
        cy.get(CheckoutElements.cssBlock_OrderEntries).should("be.visible");
    };
    checkOrderTotalOverviewBlockIsVisible(){
        cy.get(CheckoutElements.cssBlock_OrderTotalOverview).should("be.visible");
    };
    checkReturnToStoreBtnIsVisible(){
        cy.get(CheckoutElements.cssBtn_ReturnToStore).should("be.visible");
    };
    checkErrorIfFirstNameIsEmpty(){
      cy.get(CheckoutElements.cssError_FirstNameError).should("be.visible");
    };
    checkErrorIfLastNameIsEmpty(){
        cy.get(CheckoutElements.cssError_LastNameError).should("be.visible");
    };
    checkErrorIfTelephoneIsEmpty(){
        cy.get(CheckoutElements.cssError_TelephoneError).should("be.visible");
    };
    checkErrorIfAddressIsEmpty(){
        cy.get(CheckoutElements.cssError_Address1Error).should("be.visible");
    };
    checkErrorIfTownIsEmpty(){
        cy.get(CheckoutElements.cssError_TownError).should("be.visible");
    };
    checkErrorIfPostcodeIsEmpty(){
        cy.get(CheckoutElements.cssError_PostcodeError).should("be.visible");
    };
    checkErrorIfCompanyNameIsEmpty(){
        cy.get(CheckoutElements.cssError_CompanyNameError).should("be.visible");
    };
    checkAlertsForEmptyCreditCard(){
      cy.get(CheckoutElements.cssError_CreditCardErrors).should("be.visible").and("have.length", 4)
    };
    checkOneAlertForEmptyCreditCard(){
        cy.get(CheckoutElements.cssError_CreditCardErrors).should("be.visible").and("have.length", 1)
    };
    checkThatShippingDataIsAbsent(){
      cy.get(CheckoutElements.idInput_Nickname).should("be.empty");
      cy.get(CheckoutElements.idInput_FirstName).should("be.empty");
      cy.get(CheckoutElements.idInput_LastName).should("be.empty");
    };
    checkSavedAddressesListModalIsDisplayed(){
      cy.get(CheckoutElements.idModal_SavedAddressesList).should("be.visible");
    };
    checkThatShippingDataIsPresent(){
        cy.get(CheckoutElements.idInput_Nickname).should("contain.value", usersData.purchase.addressNickname);
        cy.get(CheckoutElements.idInput_FirstName).should("contain.value", usersData.register.firstName);
        cy.get(CheckoutElements.idInput_LastName).should("contain.value", usersData.register.lastName);
    };




}
export default CheckoutAsserts