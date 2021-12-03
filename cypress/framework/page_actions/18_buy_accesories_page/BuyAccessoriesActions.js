import BuyAccessoriesElements from "../../locators/18_buy_accessories_page/BuyAccessoriesElements";

class BuyAccessoriesActions {
    clickFirstAccessoryButton(){
      cy.get(BuyAccessoriesElements.cssBtn_FirstAccessory).click({force:true});
    };
    clickFirstSupportButton(){
      cy.get(BuyAccessoriesElements.cssBtn_Support).click();
    };
    clickRegisterNewDeviceBtn(){
      cy.get(BuyAccessoriesElements.cssBtn_Register).click();
    };
}
export default BuyAccessoriesActions