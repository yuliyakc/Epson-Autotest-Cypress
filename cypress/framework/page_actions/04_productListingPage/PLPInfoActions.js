import PLPInfoElements from "../../locators/04_productListingPage/PLPInfoElements";

class PLPInfoActions {
    clickBuyNowBtnPLP(){
        cy.get(".product-card").find("#addToCartButton").first().click();
    };
    clickLearnMoreBtn(){
        cy.get(PLPInfoElements.cssBtn_LearnMore).first().click();
    };
    clickFindADealerBtn(){
        cy.get(PLPInfoElements.cssBtn_FindADealer).click();
    };
}
export default PLPInfoActions