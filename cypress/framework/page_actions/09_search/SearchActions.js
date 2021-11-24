import printersData from "../../../data/printers";
import productsData from "../../../data/products";
import SearchElements from "../../locators/09_search/SearchElements";

class SearchActions {
    searchInkPrinterPLPByFullName(){
        cy.get(SearchElements.cssBtn_SearchLabel).click();
        cy.get(SearchElements.cssInput_SearchForText).click().type(printersData.inkJet.name);
        cy.wait(2000)
    };
    searchInkPrinterPLP(){
        cy.get(SearchElements.cssBtn_SearchLabel).click();
        cy.get(SearchElements.cssInput_SearchForText).click().type(printersData.inkJet.name2);
        cy.wait(2000)
    };
    searchInkEcoPrinterPLP(){
        cy.get(SearchElements.cssBtn_SearchLabel).click();
        cy.get(SearchElements.cssInput_SearchForText).click().type(printersData.inkJet.ink);
    };
    searchDotPrinterPLP(){
        cy.get(SearchElements.cssBtn_SearchLabel).click();
        cy.get(SearchElements.cssInput_SearchForText).click().type(printersData.dotMatrix.name);
    };
    searchLaserPrinters(){
        cy.get(SearchElements.cssBtn_SearchLabel).click();
        cy.get(SearchElements.cssInput_SearchForText).click().type(printersData.laserPrinters.name);
    };
    searchCoverPlusProducts(){
        cy.get(SearchElements.cssBtn_SearchLabel).click();
        cy.get(SearchElements.cssInput_SearchForText).click().type(productsData.coverplus.name);
    };
    searchOptionsProducts(){
        cy.get(SearchElements.cssBtn_SearchLabel).click();
        cy.get(SearchElements.cssInput_SearchForText).click().type(productsData.options.name);
    };

}
export default SearchActions