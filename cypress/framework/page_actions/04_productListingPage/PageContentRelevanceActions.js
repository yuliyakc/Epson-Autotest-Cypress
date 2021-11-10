import printersData from "../../../data/printers";
import CommonElements from "../../locators/CommonElements";
import MainHeaderElements from "../../locators/00_mainHeader/MainHeaderElements";

class PageContentRelevanceActions {
    openConsumerPrintersPage(){
        cy.get(MainHeaderElements.cssBlock_CmsComponent).invoke('show')
        cy.contains(printersData.consumer.name).click({force:true});
    };
    openLaserMonochromePrintersPage(){
        cy.get(MainHeaderElements.cssBlock_CmsComponent).invoke('show')
        cy.contains(printersData.laserMonochrome.name).click({force:true});
    };
    openLabelMakersPcRemoteAndConnectedPrintersPage(){
        cy.get(MainHeaderElements.cssBlock_CmsComponent).invoke('show')
        cy.contains(printersData.labelMaker.name).click({force:true});
    };

}
export default PageContentRelevanceActions