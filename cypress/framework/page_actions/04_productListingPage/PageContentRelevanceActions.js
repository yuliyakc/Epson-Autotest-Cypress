import printersData from "../../../data/printers";
import CommonElements from "../../locators/CommonElements";
import HeaderElements from "../../locators/00_header/HeaderElements";

class PageContentRelevanceActions {
    openConsumerPrintersPage(){
        cy.get(HeaderElements.cssBlock_CmsComponent).invoke('show')
        cy.contains(printersData.consumer.name).click({force:true});
    };
    openLaserMonochromePrintersPage(){
        cy.get(HeaderElements.cssBlock_CmsComponent).invoke('show')
        cy.contains(printersData.laserMonochrome.name).click({force:true});
    };
    openLabelMakersPcRemoteAndConnectedPrintersPage(){
        cy.get(HeaderElements.cssBlock_CmsComponent).invoke('show')
        cy.contains(printersData.labelMaker.name).click({force:true});
    };

}
export default PageContentRelevanceActions