import CheckoutElements from "../../locators/06_checkout/CheckoutElements";
import usersData from "../../../data/users";
import checkoutsData from "../../../data/checkouts";

class CheckoutActions {
    fillRequiredInfo(){
        cy.get(CheckoutElements.idInput_Nickname).click().clear().type(usersData.purchase.addressNickname);
        cy.get(CheckoutElements.idInput_FirstName).click().clear().type(usersData.register.firstName);
        cy.get(CheckoutElements.idInput_LastName).click().clear().type(usersData.register.lastName);
        cy.get(CheckoutElements.idInput_Telephone).click().clear().type(usersData.purchase.telephone);
        cy.get(CheckoutElements.idInput_CompanyName).click().clear().type(usersData.purchase.companyName);
    };
    searchAndSetAnAddress(){
        let addressBox = cy.get(CheckoutElements.idInput_AddressFinder);
        cy.get("body").then($body => {
            cy.get(CheckoutElements.idInput_AddressFinder).then($header => {
                if ($header.is(':visible')){
                    addressBox.click().type(usersData.purchase.addressFinder);
                    cy.wait(3000);
                } else {
                    cy.get(CheckoutElements.idInput_Address1).click().clear().type(usersData.purchase.shippingAddress);
                    cy.get(CheckoutElements.idInput_Town).click().clear().type(usersData.purchase.town);
                    cy.get(CheckoutElements.idInput_Postcode).click().clear().type(usersData.purchase.postcode);
                }
            });
        });
    };
    setDefaultCheckboxes(){
        cy.get('.checkbox__input ').eq(0).click();
        cy.get('.checkbox__input ').eq(1).click();
    };
    saveAndGoToNextStep(){
      cy.get(CheckoutElements.cssButton_Submit).click();
    };
    goNextToBilling(){
      cy.get(CheckoutElements.idButton_SubmitDeliveryMethod).click();
    };
    setCardName(){
       cy.get(CheckoutElements.cssInput_CardName).click().clear().type(usersData.register.fullName);
    };
    goNext(){
      cy.get(CheckoutElements.cssButton_ToNextStep).click();
    };
    agreeTermsAndPlaceAnOrder(){
        cy.get(CheckoutElements.cssCheckbox_AgreeTerms).click();
        cy.get(CheckoutElements.cssCheckbox_MarketingEmails).click();
        cy.get(CheckoutElements.cssButton_PlaceAnOrder).click();
    };
    selectShipmentMethodUpsExpress(){
        cy.xpath(CheckoutElements.xpathDropdown_DeliveryMethod)
            .select("gb-ups-express-92");
    };
    selectAndCheckStandardMethod(){
      cy.xpath(CheckoutElements.xpathDropdown_DeliveryMethod)
          .select(checkoutsData.shippingMethods.standard).should("be.visible");
    };
    goBackToCartSection(){
        cy.visitWebsite("/cart");
    };
    selectAndCheckElectronicMethod(){
        cy.xpath(CheckoutElements.xpathDropdown_DeliveryMethod)
            .select(checkoutsData.shippingMethods.electronic).should("be.visible");
    };
    selectAndCheckEasyMailMethod(){
        cy.xpath(CheckoutElements.xpathDropdown_DeliveryMethod)
            .select(checkoutsData.shippingMethods.easymail).should("be.visible");
    };

}
export default CheckoutActions