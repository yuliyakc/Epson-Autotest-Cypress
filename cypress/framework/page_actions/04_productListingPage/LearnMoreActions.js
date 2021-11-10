import LearnMoreElements from "../../locators/04_productListingPage/LearnMoreElements";

class LearnMoreActions {
    clickLearnMoreBtn(){
        cy.get(LearnMoreElements.cssBtn_ProductCard).first().click()
        // //div[@class='product-card__cta']//a[contains(text(),'Learn More')]
    };

}
export default LearnMoreActions