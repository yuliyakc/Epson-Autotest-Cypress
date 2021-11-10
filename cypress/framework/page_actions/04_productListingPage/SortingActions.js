import SortingElements from "../../locators/04_productListingPage/SortingElements";

class SortingActions {
    selectSortingPriceAscending(){
      cy.get(SortingElements.cssDropdown_Sorting).select("price-asc").should("have.value", "price-asc")
    };
    selectSortingPriceDescending(){
        cy.get(SortingElements.cssDropdown_Sorting).select("price-desc").should("have.value", "price-desc");
    };
    selectSortingNameAscending(){
        cy.get(SortingElements.cssDropdown_Sorting).select("name-asc").should("have.value", "name-asc");
    };
    selectSortingNameDescending(){
        cy.get(SortingElements.cssDropdown_Sorting).select("name-desc").should("have.value", "name-desc");
    };
    scrollDownToTheMiddleOfThePage(){
        //cy.scrollTo('500px')
      cy.get(".filter__container").scrollTo(0,500);
      cy.wait(1000);
    };
}
export default SortingActions