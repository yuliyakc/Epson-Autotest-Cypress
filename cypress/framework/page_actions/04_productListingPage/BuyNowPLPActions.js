class BuyNowPLPActions {
    clickBuyNowBtnPLP(){
        cy.get(".product-card").find("#addToCartButton").first().click()
        //cy.wait(2000);
    };
}
export default BuyNowPLPActions