import printersData from "../../../data/printers";
import PageContentRelevanceElements from "../../locators/04_productListingPage/PageContentRelevanceElements";
import HomePageMenuElements from "../../locators/03_homepageMenu/HomePageMenuElements";

class PageContentRelevanceActions {
    openConsumerPrintersPage(){
        cy.get(HomePageMenuElements.cssBlock_CmsComponent).invoke('show')
        cy.contains(printersData.consumer.name).click({force:true});
    };
    openLaserMonochromePrintersPage(){
        cy.get(HomePageMenuElements.cssBlock_CmsComponent).invoke('show')
        cy.contains(printersData.laserMonochrome.name).click({force:true});
    };
    openLabelMakersPcRemoteAndConnectedPrintersPage(){
        cy.get(HomePageMenuElements.cssBlock_CmsComponent).invoke('show')
        cy.contains(printersData.labelMaker.name).click({force:true});
    };
    clickFifthLinkInBreadcrumbs(){
      cy.get(PageContentRelevanceElements.cssLink_FifthLinkInBreadcrumbs).click();
    };

    clickFourthLinkInBreadcrumbs(){
        cy.get(PageContentRelevanceElements.cssLink_FourthLinkInBreadcrumbs).click();
    };
    clickThirdLinkInBreadcrumbs(){
        cy.get(PageContentRelevanceElements.cssLink_ThirdLinkInBreadcrumbs).click();
    };
    clickSecondLinkInBreadcrumbs(){
        cy.get(PageContentRelevanceElements.cssLink_SecondLinkInBreadcrumbs).click();
    };
    clickFirstLinkInBreadcrumbs(){
      cy.get(PageContentRelevanceElements.cssLink_FirstLinkInBreadcrumbs).click();
      cy.wait(1000);
    };

}
export default PageContentRelevanceActions