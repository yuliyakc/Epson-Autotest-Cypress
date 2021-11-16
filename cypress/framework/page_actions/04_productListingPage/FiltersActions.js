import FiltersElements from "../../locators/04_productListingPage/FiltersElements";

class FiltersActions {
     useAppSegmentFilter(){
         cy.get(FiltersElements.cssCheckbox_AppSegmentFilter)
             .check().should('be.checked').and('have.value','on');
     };
     useCategoryFilter(){
        cy.get(FiltersElements.cssCheckbox_CategoryFilter).check().should('be.checked').and('have.value','on');
     };
     useIncludedSoftFilter(){
       cy.get(FiltersElements.cssCheckbox_IncludedSoftFilter).check().should('be.checked').and('have.value','on');
     };
     usePriceFrom200Filter(){
       cy.get(FiltersElements.cssCheckbox_PriceFrom200).check().should('be.checked').and('have.value','on');
     };
     useClassificationFilter(){
       cy.get(FiltersElements.cssCheckbox_Classification).check().should('be.checked').and('have.value','on');
     };
     useLargeFormatPrintersFilter(){
       cy.get(FiltersElements.cssCheckbox_LargePrinters).check().should('be.checked').and('have.value','on');
     };
     resetFilters(){
         cy.get(FiltersElements.cssButton_UpperReset).click();
     };
     useLabelMakerPrinters(){
         cy.get(FiltersElements.cssCheckbox_LabelMakerPrinters).check().should('be.checked').and('have.value','on');
     };





     someMethod() {
        let temp = cy.get(".page-toolbar__container.top .records-count")
            .invoke('text')
         cy.get("div[class='product-card product-card--plp']").should("have.length", 'text');




         // cy.get('.page-toolbar__container.top .records-count')
         //     .then(($div) => {
         //         const val = $div.val();
         //         cy.log(val)
         //         let id = document.getElementsByClassName("page-toolbar__count.records-count");
         //         cy.get("div[class='product-card product-card--plp']").should("have.length", val);
         //         console.log(id)
         //
         //     })
     }

}
export default FiltersActions