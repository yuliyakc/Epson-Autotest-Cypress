import printersData from "../../../data/printers";
import HeaderElements from "../../locators/00_header/HeaderElements";

class HeaderActions {
    openInkJetBusinessPrinters(){
        cy.get(HeaderElements.cssBlock_CmsComponent).invoke('show')
        cy.contains(printersData.inkJet.business).click({force:true});
    };
    openLaserColourPrinters(){
        cy.get(HeaderElements.cssBlock_CmsComponent).invoke('show')
        cy.contains(printersData.laserPrinters.colour).click({force:true});
    };
    openLabelMakerRemotePrinters(){
        cy.get(HeaderElements.cssBlock_CmsComponent).invoke('show')
        cy.contains(printersData.labelMaker.name3).click({force:true});
    };
    openDotMatrixPrintersPage(){
        cy.get(HeaderElements.cssBlock_CmsComponent).invoke('show')
        cy.contains(printersData.dotMatrix.name2).click({force:true});
    };
    openLargeFormatPrintersPage(){
        cy.get(HeaderElements.cssBlock_CmsComponent).invoke('show')
        cy.contains(printersData.largeFormat.name).click({force:true});
    };
    openLabelMarkerPrintersPage(){
        cy.get(HeaderElements.cssBlock_CmsComponent).invoke('show')
        cy.contains(printersData.labelMaker.name4).click({force:true});
    };

}
export default HeaderActions