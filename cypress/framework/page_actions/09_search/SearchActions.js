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
        cy.get(SearchElements.cssInput_SearchForText).click().type(printersData.inkJet.individual);
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
    clickPrinterInSearchWidget(){
        cy.get(SearchElements.cssBtn_SearchLabel).click();
        cy.get(SearchElements.cssInput_SearchForText).click().type(printersData.consumer.search, {delay:100});
        cy.get(SearchElements.cssBlock_AutocompleteWidget).get("li").get(".ui-menu-item").eq(0).click();
    };
    clickLeanMoreButtonInSearchWidget(){
        cy.get(SearchElements.cssBtn_SearchLabel).click();
        cy.get(SearchElements.cssInput_SearchForText).click().type(printersData.consumer.search, {delay:100});
        cy.get(SearchElements.cssBlock_AutocompleteWidget).get("li").get(".autocomplete__sublink").eq(0).click();
    };
    clickSuggestionInSearchWidget(){
        cy.get(SearchElements.cssBtn_SearchLabel).click();
        cy.get(SearchElements.cssInput_SearchForText).click().type(printersData.dotMatrix.search, {delay:100});
        cy.get(SearchElements.cssBlock_AutocompleteWidget).get("li").get(".ui-menu-item").eq(0).click();
    };
    closeSearchFieldByClickOnXBt(){
      cy.get(SearchElements.cssBtn_CloseSearch).click();
    };

}
export default SearchActions