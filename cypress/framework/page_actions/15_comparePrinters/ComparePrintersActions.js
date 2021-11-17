import ComparePrintersElements from "../../locators/15_comparePrinters/ComparePrintersElements";

class ComparePrintersActions {
    addFirstPrinterToCompareBlock(){
      cy.get(ComparePrintersElements.cssCheckbox_Compare).click();
      cy.wait(1000);
    };
    clickHideBtnForCompareBlock(){
        cy.get(ComparePrintersElements.cssBtn_HideSwitcher).click();
    };
    clickShowBtnForCompareBlock(){
      cy.get(ComparePrintersElements.cssBtn_ShowSwitcher).click();
    };
    clickCompareBtnToComparePrinters(){
        cy.get(ComparePrintersElements.cssBtn_Compare).click();
    };
    deletePrintersOneByOneFromComparePage(){
      cy.get(ComparePrintersElements.cssBtn_DeletePrinterFromComparePage).eq(5).click();
      cy.wait(200);
      cy.get(ComparePrintersElements.cssBtn_DeletePrinterFromComparePage).eq(3).click();
      cy.wait(200)
      cy.get(ComparePrintersElements.cssBtn_DeletePrinterFromComparePage).eq(1).click();
      cy.wait(1000);
    };
    deletePrintersOneByOneFromCompareMenu(){
        cy.get(ComparePrintersElements.cssBtn_DeletePrintersFromCompareMenu).click();
        cy.wait(200)
        cy.get(ComparePrintersElements.cssBtn_DeletePrintersFromCompareMenu).click();
        cy.wait(1000);
    };
    clickFirstLinkToOpenProductInfoPage(){
        cy.get(ComparePrintersElements.cssLink_ProductHome).click();
    };
    clickProductLinkToOpenProductInfoPage(){
        cy.get(ComparePrintersElements.cssLink_ProductLink).click();
    };

}
export default ComparePrintersActions