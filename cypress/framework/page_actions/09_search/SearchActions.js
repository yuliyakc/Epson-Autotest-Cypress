import CommonElements from "../../locators/CommonElements";
import printersData from "../../../data/printers";
import productsData from "../../../data/products";

class SearchActions {
    searchInkPrinterPLP(){
        cy.get(CommonElements.cssBtn_SearchLabel).click();
        cy.get(CommonElements.cssInput_SearchForText).click().type(printersData.inkJet.name);
        cy.wait(2000)
    };
    searchInkEcoPrinterPLP(){
        cy.get(CommonElements.cssBtn_SearchLabel).click();
        cy.get(CommonElements.cssInput_SearchForText).click().type(printersData.inkJet.ink);
    };
    searchDotPrinterPLP(){
        cy.get(CommonElements.cssBtn_SearchLabel).click();
        cy.get(CommonElements.cssInput_SearchForText).click().type(printersData.dotMatrix.name);
    };
    searchLaserPrinters(){
        cy.get(CommonElements.cssBtn_SearchLabel).click();
        cy.get(CommonElements.cssInput_SearchForText).click().type(printersData.laserPrinters.name);
    };
    searchCoverPlusProducts(){
        cy.get(CommonElements.cssBtn_SearchLabel).click();
        cy.get(CommonElements.cssInput_SearchForText).click().type(productsData.coverplus.name);
    };
    searchOptionsProducts(){
        cy.get(CommonElements.cssBtn_SearchLabel).click();
        cy.get(CommonElements.cssInput_SearchForText).click().type(productsData.options.name);
    };



}
export default SearchActions