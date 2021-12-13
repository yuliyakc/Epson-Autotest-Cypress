import BuyAccessoriesElements from "../../locators/18_buy_accessories_page/BuyAccessoriesElements";

class BuyAccessoriesActions {
    clickFirstAccessoryButton(){
      cy.get(BuyAccessoriesElements.cssBtn_FirstAccessory).click({force:true});
    };
    clickFirstSupportButton(){
      cy.get(BuyAccessoriesElements.cssBlock_ProductList).find(".myproducts__support").first().click({force:true});
    };
    clickFirstProductName(){
        cy.get(BuyAccessoriesElements.cssBlock_ProductList).find(".myproducts__name").first().click({force:true});
    };
    clickRegisterNewDeviceBtn(){
      cy.get(BuyAccessoriesElements.cssBtn_Register).click();
    };
}
export default BuyAccessoriesActions