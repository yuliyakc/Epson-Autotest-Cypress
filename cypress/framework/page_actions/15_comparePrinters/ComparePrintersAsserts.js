import ComparePrintersElements from "../../locators/15_comparePrinters/ComparePrintersElements";

class ComparePrintersAsserts {
    checkThatCompareBlockIsDisplayed(){
      cy.get(ComparePrintersElements.cssBlock_Compare).should("be.visible");
    };
    checkCompareBlockIsHidden(){
        cy.get(ComparePrintersElements.cssBlock_Compare).should("have.class", "hidden");
    };
    checkCompareBlockIsVisible(){
        cy.get(ComparePrintersElements.cssBlock_Compare).should("not.have.class", "hidden");
    };
    checkCorrectPageWasOpened(){
      cy.url() .should("include", "comparison");
    };
    checkThreePrintersOnThePage(){
      cy.get(ComparePrintersElements.cssQuantity_PrintersQuantity).should("have.length", 6)
    };
    checkCorrectPageWasRedirected(){
        cy.url() .should("include", "printers");
    };
    checkRequestCallbackUrlIsOpenedCorrect(){
      cy.url().should("include", "request-callback");
    };

}
export default ComparePrintersAsserts